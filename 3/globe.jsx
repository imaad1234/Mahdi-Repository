// 3D animated globe with wireframe + pin arcs — Three.js
function Globe3D({ className, height = '100%' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!window.THREE || !ref.current) return;
    const THREE = window.THREE;
    const host = ref.current;
    let w = host.clientWidth, h = host.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w/h, 0.1, 100);
    camera.position.set(0, 0, 5.2);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Solid sphere (dark)
    const solid = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x081e38 })
    );
    group.add(solid);

    // Wireframe
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(1.51, 36, 24),
      new THREE.MeshBasicMaterial({ color: 0x1E5AFF, wireframe: true, transparent: true, opacity: 0.35 })
    );
    group.add(wire);

    // Outer glow sphere (additive points)
    const pointsGeom = new THREE.SphereGeometry(1.54, 80, 60);
    const pos = pointsGeom.attributes.position;
    const dotPositions = [];
    for (let i = 0; i < pos.count; i++){
      if (Math.random() < 0.35){
        dotPositions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
      }
    }
    const dotGeom = new THREE.BufferGeometry();
    dotGeom.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
    const points = new THREE.Points(
      dotGeom,
      new THREE.PointsMaterial({ color: 0x7FB3FF, size: 0.018, transparent: true, opacity: 0.9 })
    );
    group.add(points);

    // Pins (country markers)
    const latlngs = [
      [25.2, 55.3],   // Dubai
      [24.7, 46.7],   // Riyadh
      [29.4, 47.9],   // Kuwait
      [25.3, 51.5],   // Doha
      [-33.9, 151.2], // Sydney
      [19.1, 72.9],   // Mumbai
      [-26.2, 28.0],  // JHB
      [33.6, -7.6],   // Casablanca
      [51.5, -0.1],   // London
      [33.9, 35.5],   // Beirut
      [1.3, 103.8],   // Singapore
      [40.7, -74.0],  // NY
    ];
    const pins = new THREE.Group();
    function latlngToVec(lat, lng, r){
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lng + 180) * Math.PI / 180;
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
         r * Math.cos(phi),
         r * Math.sin(phi) * Math.sin(theta)
      );
    }
    latlngs.forEach(([la, ln]) => {
      const v = latlngToVec(la, ln, 1.52);
      const pin = new THREE.Mesh(
        new THREE.SphereGeometry(0.025, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x1E5AFF })
      );
      pin.position.copy(v);
      pins.add(pin);
      // Halo
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x7FB3FF, transparent: true, opacity: 0.25 })
      );
      halo.position.copy(v);
      pins.add(halo);
    });
    group.add(pins);

    // Arcs connecting random pairs
    const arcs = new THREE.Group();
    group.add(arcs);
    function makeArc(a, b){
      const va = latlngToVec(a[0], a[1], 1.52);
      const vb = latlngToVec(b[0], b[1], 1.52);
      const mid = va.clone().add(vb).multiplyScalar(0.5).normalize().multiplyScalar(2.2);
      const curve = new THREE.QuadraticBezierCurve3(va, mid, vb);
      const geom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
      const mat = new THREE.LineBasicMaterial({ color: 0x7FB3FF, transparent: true, opacity: 0.5 });
      return new THREE.Line(geom, mat);
    }
    // Dubai hub → everywhere else
    for (let i = 1; i < latlngs.length; i++){
      arcs.add(makeArc(latlngs[0], latlngs[i]));
    }

    // Resize
    const onResize = () => {
      w = host.clientWidth; h = host.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w/h; camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    let mouseX = 0, mouseY = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5);
      mouseY = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', onMove);

    let raf;
    const clock = new THREE.Clock();
    const loop = () => {
      const dt = clock.getDelta();
      group.rotation.y += dt * 0.15;
      tx += (mouseX * 0.4 - tx) * 0.05;
      ty += (mouseY * 0.3 - ty) * 0.05;
      group.rotation.x = ty;
      camera.position.x = tx;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      renderer.dispose();
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={ref} className={className} style={{ width:'100%', height }} />;
}

window.Globe3D = Globe3D;
