// ============== Shared Components ==============

const Arrow = ({ size = 14 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10h12M12 5l5 5-5 5" />
  </svg>
);

// Animated counter
function Counter({ to, prefix='', suffix='', duration=2000 }) {
  const [v, setV] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            setV(to * ease);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const display = to >= 1e9 ? (v/1e9).toFixed(1) + 'B' :
                  to >= 1e6 ? (v/1e6).toFixed(0) + 'M' :
                  to >= 1e3 ? (v/1e3).toFixed(0) + 'K' :
                  Math.round(v).toString();
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

// Reveal on scroll wrapper
function Reveal({ children, delay = 0 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    // If already in view (above the fold), reveal immediately
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setTimeout(() => el.classList.add('in'), delay);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('in'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className="reveal">{children}</div>;
}

// Navigation
function Nav({ page, setPage }) {
  const [open, setOpen] = React.useState(false);
  const links = [
    ['home', 'Home'],
    ['mentorship', 'Mentorship'],
    ['learn', 'Learn'],
    ['read', 'Read'],
    ['community', 'Community'],
    ['newsletter', 'Newsletter'],
    ['partnerships', 'Partnerships'],
    ['contact', 'Contact'],
  ];
  return (
    <>
      <div className="nav">
        <a href="#" className="nav-logo" onClick={(e)=>{e.preventDefault(); setPage('home');}}>
          <span className="dot"></span>MAHDI SHAFIEI
        </a>
        <div className="nav-links">
          {links.map(([k, l]) => (
            <a key={k} href={`#${k}`}
               className={page === k ? 'active' : ''}
               onClick={(e)=>{e.preventDefault(); setPage(k);}}>
              {l}
            </a>
          ))}
        </div>
        <a href="#mentorship" className="nav-cta" onClick={(e)=>{e.preventDefault(); setPage('mentorship');}}>
          Apply for Mentorship <Arrow size={12} />
        </a>
        <button className="nav-burger" onClick={()=>setOpen(!open)} aria-label="Menu">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.5">
            <path d="M3 6h14M3 10h14M3 14h14" />
          </svg>
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <nav>
          {links.map(([k,l]) => (
            <a key={k} href={`#${k}`}
               className={page === k ? 'active' : ''}
               onClick={(e)=>{e.preventDefault(); setPage(k); setOpen(false);}}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

// Trust wall (wordmarks, NOT logos)
function TrustWall() {
  const brands = [
    'SAMSUNG','CHANEL','DIOR','PORSCHE','AMAZON','ADIDAS',
    'RED BULL',"L'ORÉAL",'KFC','EMAAR','STARBUCKS','BURBERRY',
    'NIVEA','HONOR','DAMAC','DUBAI MALL','NOON','SPOTII'
  ];
  return (
    <div className="trust">
      <div className="wrap">
        <div className="trust-label">
          <span className="mono">TRUSTED BY TEAMS THAT SHIP ACROSS 28 COUNTRIES</span>
        </div>
      </div>
      <div className="trust-grid">
        {brands.map(b => <div className="trust-cell" key={b}>{b}</div>)}
      </div>
    </div>
  );
}

// Ticker
function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        <div className="ticker-cell">
          <div className="num"><Counter to={10000000000} /></div>
          <div className="label">Views generated</div>
        </div>
        <div className="ticker-cell">
          <div className="num"><Counter to={100000000} prefix="$" /></div>
          <div className="label">Client sales</div>
        </div>
        <div className="ticker-cell">
          <div className="num"><Counter to={28} suffix="+" /></div>
          <div className="label">Countries</div>
        </div>
        <div className="ticker-cell">
          <div className="num"><Counter to={450} suffix="+" /></div>
          <div className="label">Team members</div>
        </div>
      </div>
    </div>
  );
}

// Footer
function Footer({ setPage }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand foot">
            <div className="logo"><span className="nav-logo"><span className="dot"></span></span>MAHDI SHAFIEI</div>
            <p>Founder of Trifid Media. Operating across 28+ countries from Dubai. I help founders turn content into cashflow.</p>
            <div style={{marginTop:24}}>
              <span className="mono" style={{color:'rgba(255,255,255,.4)'}}>DUBAI · HQ</span>
            </div>
          </div>
          <div className="foot">
            <h5>Explore</h5>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('mentorship');}}>Mentorship</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('learn');}}>Courses</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('read');}}>Books</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('community');}}>Community</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('newsletter');}}>Newsletter</a>
          </div>
          <div className="foot">
            <h5>Work</h5>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('partnerships');}}>Partnerships</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('partnerships');}}>Speaking</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('partnerships');}}>Brand collabs</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('contact');}}>Press / Media</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('contact');}}>Contact</a>
          </div>
          <div className="foot">
            <h5>Follow</h5>
            <a href="https://www.linkedin.com/in/mahdi-shafiei-trifidmedia/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://instagram.com/mahdiishafiei" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.tiktok.com/@mahdi.shafiei" target="_blank" rel="noreferrer">TikTok ↗</a>
            <a href="#">YouTube ↗</a>
            <a href="#">WhatsApp community ↗</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 MAHDI SHAFIEI · ALL RIGHTS RESERVED</div>
          <div>DUBAI · 28 COUNTRIES · ONE PLAYBOOK</div>
        </div>
      </div>
    </footer>
  );
}

// Newsletter signup full-width
function NewsletterBlock() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <section className="news">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow" style={{marginBottom:22}}>SUNDAY DROP · FREE</div>
        </Reveal>
        <Reveal delay={80}><h2>Steal My Frameworks.<br/>Every Sunday. Free.</h2></Reveal>
        <Reveal delay={160}>
          <p className="sub">
            One email. The tactics my team uses on $100M+ in client revenue.
            No fluff. No filler. Unsubscribe whenever.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <form className="news-form" onSubmit={(e)=>{e.preventDefault(); if(email) setSent(true);}}>
            <input type="email" placeholder="operator@yourcompany.com"
                   value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <button className="btn btn-primary" type="submit">
              {sent ? 'Check your inbox →' : <>Send it <Arrow/></>}
            </button>
          </form>
        </Reveal>
        <Reveal delay={320}>
          <div className="news-socials">
            <span>OR FOLLOW ON</span>
            <a href="https://instagram.com/mahdiishafiei" target="_blank" rel="noreferrer">INSTAGRAM</a>
            <span>·</span>
            <a href="#">WHATSAPP BROADCAST</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Arrow, Counter, Reveal, Nav, TrustWall, Ticker, Footer, NewsletterBlock });
