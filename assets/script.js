/* =========================================================
   MAHDI SHAFIEI — SITE JS
   Cursor, reveal animations, hero canvas, tilt, nav, forms
   ========================================================= */

(function () {
  'use strict';

  /* ---------- CUSTOM CURSOR ---------- */
  const cursor = document.querySelector('.cursor');
  const ring = document.querySelector('.cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  if (cursor && ring && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();

    const hoverables = document.querySelectorAll('a, button, .tilt, input, textarea, select, .course-card, .pillar, .testi, .tier, .book-3d');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        ring.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        ring.classList.remove('hover');
      });
    });
  }

  /* ---------- PAGE LOADER ---------- */
  window.addEventListener('load', () => {
    const loader = document.querySelector('.page-load');
    if (loader) {
      setTimeout(() => loader.classList.add('done'), 1100);
      setTimeout(() => loader.remove(), 2200);
    }
  });

  /* ---------- NAV HIDE ON SCROLL DOWN ---------- */
  let lastY = 0;
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (!nav) return;
    if (y > 140 && y > lastY) nav.classList.add('hidden');
    else nav.classList.remove('hidden');
    lastY = y;
  });

  /* ---------- MOBILE MENU ---------- */
  const toggle = document.querySelector('.menu-toggle');
  const mobile = document.querySelector('.mobile-menu');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      mobile.classList.toggle('open');
    });
    mobile.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => mobile.classList.remove('open'));
    });
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .stagger, .word-reveal').forEach((el) => io.observe(el));

  /* ---------- 3D TILT (mouse) ---------- */
  document.querySelectorAll('.tilt').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rotX = ((y / r.height) - 0.5) * -10;
      const rotY = ((x / r.width) - 0.5) * 10;
      el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });

  /* ---------- HERO CANVAS (particles + lines) ---------- */
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const N = 44;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.3 + 0.4
    }));

    let mouseX = -9999, mouseY = -9999;
    canvas.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
    });
    canvas.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // ambient radial glow bottom-right
      const grd = ctx.createRadialGradient(w * 0.75, h * 0.75, 0, w * 0.75, h * 0.75, w * 0.7);
      grd.addColorStop(0, 'rgba(255,77,26,0.10)');
      grd.addColorStop(0.5, 'rgba(255,77,26,0.02)');
      grd.addColorStop(1, 'rgba(255,77,26,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // pts
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        // attract to mouse
        const dx = mouseX - p.x, dy = mouseY - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 220) {
          p.x += (dx / d) * 0.4;
          p.y += (dy / d) * 0.4;
        }
        ctx.beginPath();
        ctx.fillStyle = 'rgba(244,239,230,0.55)';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // connections
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i], b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            const op = 1 - d / 130;
            ctx.strokeStyle = `rgba(244,239,230,${op * 0.18})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };
    draw();
  }

  /* ---------- MAGNETIC BUTTONS ---------- */
  document.querySelectorAll('[data-magnet]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });

  /* ---------- COUNTER ANIMATION ---------- */
  const countEls = document.querySelectorAll('[data-count]');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const dur = 2200;
      const start = performance.now();
      const isFloat = target % 1 !== 0;
      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = target * eased;
        el.textContent = isFloat ? v.toFixed(1) : Math.floor(v).toLocaleString();
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString();
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  countEls.forEach((el) => countIO.observe(el));

  /* ---------- FORM SUBMIT (demo only) ---------- */
  document.querySelectorAll('form[data-demo]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"], .btn-primary');
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = 'SENT ✓';
        btn.style.background = 'var(--gold)';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.background = '';
          form.reset();
        }, 2600);
      }
    });
  });

})();
