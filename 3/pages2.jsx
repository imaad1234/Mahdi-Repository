// ============== REMAINING PAGES ==============

// --------- LEARN ---------
function LearnPage({ setPage }) {
  const courses = [
    { t:'Content That Converts', mods:'12 modules', lvl:'Intermediate', status:'LIVE', d:"The organic content system behind Trifid's 10B views.", p:'$—' },
    { t:'Personal Brand From Zero', mods:'8 modules', lvl:'Beginner', status:'LIVE', d:'For founders building a brand from scratch in 90 days.', p:'$—' },
    { t:'The EGC Playbook', mods:'10 modules', lvl:'Intermediate', status:'LIVE', d:'Employee-generated content that actually scales.', p:'$—' },
    { t:'TikTok For Founders', mods:'6 modules', lvl:'Beginner', status:'LIVE', d:"Mahdi's original GCC framework — first agency to teach it.", p:'$—' },
    { t:'The $100M Sales System', mods:'14 modules', lvl:'Advanced', status:'Q2 2026', d:'Outbound + founder-led sales. The exact system.', p:'$—' },
    { t:'Founder Content OS', mods:'9 modules', lvl:'Intermediate', status:'Q3 2026', d:'Weekly content system for operators who have no time.', p:'$—' },
    { t:'Brand Deals The Real Way', mods:'8 modules', lvl:'Intermediate', status:'Q2 2026', d:'How to price, pitch, and close partnerships.', p:'$—' },
    { t:'Hiring Young Talent', mods:'7 modules', lvl:'Advanced', status:'Q3 2026', d:'How Trifid hires and runs teams with avg age 23.', p:'$—' },
  ];
  return (
    <div className="page-fade">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="wrap">
          <Reveal><div className="eyebrow">COURSES · SELF-PACED</div></Reveal>
          <h1 style={{marginTop:28}}><Reveal delay={100}>Learn what<br/>10 billion views taught me.</Reveal></h1>
          <Reveal delay={220}><p className="lede">Frameworks compressed. No motivation, no "mindset." Just the plays I run on real accounts at Trifid.</p></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="course-grid">
            {courses.map((c, i) => (
              <Reveal key={c.t} delay={i*50}>
                <div className="course">
                  <div className="course-inner">
                    <div className="course-face front">
                      <div className="top">
                        <div className="mono" style={{color:'rgba(255,255,255,.6)'}}>COURSE · 0{i+1}</div>
                        <div className={`status ${c.status !== 'LIVE' ? 'soon' : ''}`}>{c.status}</div>
                      </div>
                      <div className="bottom">
                        <div className="title">{c.t}</div>
                        <div className="meta">
                          <span>{c.mods}</span>
                          <span>{c.lvl}</span>
                        </div>
                      </div>
                    </div>
                    <div className="course-face back">
                      <div>
                        <div className="mono" style={{color:'var(--sky)'}}>INSIDE</div>
                        <div className="title" style={{marginTop: 14, fontSize: 22}}>{c.t}</div>
                        <p className="desc" style={{marginTop: 14}}>{c.d}</p>
                        <div className="price">{c.p}</div>
                      </div>
                      <button className="btn btn-primary" style={{alignSelf:'flex-start'}}>
                        {c.status === 'LIVE' ? 'Enroll' : 'Notify me'} <Arrow/>
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="placeholder-banner" style={{marginTop:32, maxWidth:640}}>
              FINAL PRICING TBD · UPDATE "$—" PLACEHOLDERS PRE-LAUNCH
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bundle">
              <div>
                <div className="mono" style={{color:'var(--gold)'}}>⬥ ALL-ACCESS</div>
                <h3 style={{marginTop:14}}>The Full Vault.</h3>
                <p style={{marginTop:14}}>Every course. Every new course for 12 months. Private members newsletter. All SOPs and templates. One annual membership. No upsells.</p>
                <ul>
                  <li>8 current courses + all future drops (12 months)</li>
                  <li>Private members-only newsletter</li>
                  <li>Every SOP, template, and Notion doc we use internally</li>
                  <li>Quarterly live Q&amp;A with Mahdi</li>
                </ul>
              </div>
              <div className="bundle-price">
                <div className="label">ANNUAL MEMBERSHIP</div>
                <div className="amount">$—<br/><small>price TBD</small></div>
                <button className="btn btn-primary cta">Join the Vault <Arrow/></button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterBlock />
    </div>
  );
}

// --------- READ ---------
function ReadPage() {
  return (
    <div className="page-fade">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="wrap">
          <Reveal><div className="eyebrow">BOOKS · COMING 2026–2027</div></Reveal>
          <h1 style={{marginTop:28}}><Reveal delay={100}>Books that hit like<br/>a punch, not a lecture.</Reveal></h1>
          <Reveal delay={220}><p className="lede">Three books in the chamber. Short reads. No filler chapters. The kind you underline on a flight.</p></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="books-hero">
            <Reveal>
              <div className="book-cover-3d">
                <div className="book">
                  <div className="spine"></div>
                  <img src="assets/book-cover.png" alt="F*$? The Resume book cover" />
                </div>
                <div className="badge">COMING 2026</div>
              </div>
            </Reveal>
            <div className="book-info">
              <Reveal delay={80}><div className="mono" style={{color:'var(--sky)'}}>BOOK 01 · FEATURED</div></Reveal>
              <Reveal delay={140}><h2 style={{marginTop:14}}>F*$? The Resume.</h2></Reveal>
              <Reveal delay={220}>
                <p className="hook">
                  The resume was invented in 1482. It's a dead document. Here's what replaces it —
                  from the guy whose team of 450 has never hired off one.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <form className="waitlist" onSubmit={(e)=>e.preventDefault()}>
                  <input type="email" placeholder="Email me when it drops" />
                  <button className="btn btn-primary">Join waitlist <Arrow/></button>
                </form>
              </Reveal>
              <Reveal delay={340}>
                <div className="signed">FIRST 500 SIGNED COPIES — NOTIFY-ME LIST</div>
              </Reveal>
            </div>
          </div>

          <div className="book-upcoming">
            {[
              { n:'BOOK 02', t:'The Culture Agency', yr:'2027', hint:'How we built a 450-person operator army across 12+ countries with an average age of 23.' },
              { n:'BOOK 03', t:'The Green Currency', yr:'2027', hint:'Attention is the new oil. Content is the new currency. A field manual for turning views into revenue.' },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i*80}>
                <div className="upcoming-card">
                  <div className="yr">'{b.yr.slice(2)}</div>
                  <div>
                    <div className="mono" style={{color:'var(--sky)'}}>{b.n} · COMING {b.yr}</div>
                    <h3 style={{marginTop:14}}>{b.t}</h3>
                    <p className="hint" style={{marginTop:14}}>{b.hint}</p>
                  </div>
                  <form className="waitlist-mini" onSubmit={(e)=>e.preventDefault()}>
                    <input type="email" placeholder="Notify me when this drops"/>
                    <button className="btn btn-secondary" style={{padding:'10px 14px', fontSize:12}}>Notify <Arrow size={12}/></button>
                  </form>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </div>
  );
}

// --------- COMMUNITY ---------
function CommunityPage() {
  return (
    <div className="page-fade">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="wrap">
          <Reveal><div className="eyebrow">COMMUNITY · GCC FIRST</div></Reveal>
          <h1 style={{marginTop:28}}><Reveal delay={100}>Where GCC operators<br/>actually talk shop.</Reveal></h1>
          <Reveal delay={220}><p className="lede">Two doors. The free one is tactical. The paid one is room-temperature honest with people who ship.</p></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="comm-cols">
            <Reveal>
              <div className="comm-col">
                <div className="tier">FREE TIER</div>
                <h3>WhatsApp Community</h3>
                <p>Where most operators start. Weekly tactical drops, open threads, regional meetups announced here first.</p>
                <ul>
                  <li>Weekly tactical drops from Mahdi &amp; the Trifid team</li>
                  <li>AMA threads — every other Friday</li>
                  <li>Job board — real roles from real operators</li>
                  <li>Meetup announcements (Dubai · Riyadh · London · Mumbai)</li>
                </ul>
                <button className="btn btn-primary" style={{alignSelf:'flex-start', marginTop:10}}>Join free <Arrow/></button>
                <div className="placeholder-banner" style={{marginTop:16}}>ADD WHATSAPP INVITE LINK</div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="comm-col paid">
                <div className="tier">INVITE-ONLY</div>
                <h3>Inner Circle</h3>
                <p>Paid, invite-based. Operators who've shipped. Deal flow, intros, and the threads that don't happen in public.</p>
                <ul>
                  <li>Vetted founder-only access — application required</li>
                  <li>Monthly closed-door dinners in Dubai &amp; travelling cities</li>
                  <li>Deal flow &amp; intro channel — no lurkers</li>
                  <li>Direct access to Mahdi's specialist operators</li>
                </ul>
                <button className="btn btn-secondary" style={{alignSelf:'flex-start', marginTop:10, borderColor:'rgba(212,175,55,.5)', color:'var(--gold)'}}>Request invite <Arrow/></button>
              </div>
            </Reveal>
          </div>

          <div className="comm-stats">
            <Reveal>
              <div className="globe-stat">
                <Globe3D />
              </div>
            </Reveal>
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:22}}>OPERATORS IN THE ROOM</div></Reveal>
              <Reveal delay={80}><h2>Members across 28 countries — weighted to the markets that matter.</h2></Reveal>
              <Reveal delay={160}>
                <div className="comm-countries" style={{marginTop:30}}>
                  {['UAE','KSA','QATAR','KUWAIT','BAHRAIN','OMAN','INDIA','PAKISTAN','SINGAPORE','AUSTRALIA','UK','LEBANON','MOROCCO','SOUTH AFRICA','USA','CANADA'].map(c => <span key={c}>{c}</span>)}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// --------- NEWSLETTER ---------
function NewsletterPage() {
  return (
    <div className="page-fade">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="wrap">
          <Reveal><div className="eyebrow">SUNDAY DROP · FREE</div></Reveal>
          <h1 style={{marginTop:28}}><Reveal delay={100}>Steal my frameworks.<br/>Every Sunday. Free.</Reveal></h1>
          <Reveal delay={220}><p className="lede">One email a week. The plays I ran last week — what worked, what didn't, the numbers behind both. No sponsors, no "7 reasons why" listicles.</p></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="news-preview">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:22}}>PAST ISSUES</div></Reveal>
              <Reveal delay={80}><h2>What a typical Sunday looks like.</h2></Reveal>
              <Reveal delay={160}>
                <p style={{marginTop:20, fontSize:17}}>
                  Three sections, every week. <strong style={{color:'#fff'}}>(1)</strong> What I shipped and why.
                  <strong style={{color:'#fff'}}> (2)</strong> One play you can run this week. <strong style={{color:'#fff'}}>(3)</strong> A receipt — with numbers.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="placeholder-banner" style={{marginTop:30, maxWidth:520}}>
                  ADD CURRENT SUBSCRIBER COUNT (eg "12,000+ OPERATORS READ THIS")
                </div>
              </Reveal>
              <Reveal delay={320}>
                <form className="news-form" style={{marginLeft:0, marginTop:26}} onSubmit={e=>e.preventDefault()}>
                  <input type="email" placeholder="operator@yourcompany.com"/>
                  <button className="btn btn-primary">Subscribe <Arrow/></button>
                </form>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="email-stack">
                {[
                  { d:'SUN · APR 20', s:'Why our $100K test client fired us in week 3', p:"The uncomfortable part no one writes about — what I'd do differently, what I wouldn't." },
                  { d:'SUN · APR 13', s:"The 3-hour founder content OS we use at Trifid", p:"Exactly how I batch a month of content in one Sunday afternoon. Template inside." },
                  { d:'SUN · APR 6', s:"Lebanese outbound talent — why, how, at what cost", p:"The hiring model that unlocked our MENA expansion. Ranges, scripts, and the mistakes." },
                ].map((e, i) => (
                  <div className="email-mock" key={i}>
                    <div className="top"><span>MAHDI'S SUNDAY DROP</span><span>{e.d}</span></div>
                    <div className="sender">Mahdi Shafiei</div>
                    <div className="subject">{e.s}</div>
                    <div className="pre">{e.p}</div>
                    <div className="bar"></div>
                    <div className="rows"><div></div><div></div><div></div><div></div><div></div></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

// --------- PARTNERSHIPS ---------
function PartnershipsPage({ setPage }) {
  const brands = ['SAMSUNG','CHANEL','DIOR','PORSCHE','AMAZON','ADIDAS','RED BULL',"L'ORÉAL",'KFC','EMAAR','STARBUCKS','BURBERRY','NIVEA','HONOR','DAMAC','DUBAI MALL','NOON','SPOTII'];
  return (
    <div className="page-fade">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="wrap">
          <Reveal><div className="eyebrow">PARTNER WITH MAHDI</div></Reveal>
          <h1 style={{marginTop:28}}><Reveal delay={100}>Brands, speaking,<br/>and the room-temperature honest work.</Reveal></h1>
          <Reveal delay={220}><p className="lede">Three tiers. Clear qualifiers. We say no to more than we say yes to — it's the only way the yes stays good.</p></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>TIERED ENGAGEMENTS</div></Reveal>
              <Reveal delay={80}><h2>Pick the right door. The team routes accordingly.</h2></Reveal>
            </div>
          </div>
          <div className="tier-grid">
            <Reveal>
              <div className="tier">
                <div className="tn">TIER 01</div>
                <h3>Content Partnership</h3>
                <p className="what">1–6 pieces of content, scripted and produced by Trifid, published across Mahdi's channels. Usage rights for your paid ads. Performance report with attribution. Ideal for product launches, platform drops, single campaigns.</p>
                <div className="ideal">IDEAL FOR: LAUNCHES · PLATFORM DROPS</div>
                <div className="qual">Qualifier: real product, clear brief, budget confirmed.</div>
                <button className="btn btn-secondary" style={{alignSelf:'flex-start'}} onClick={()=>setPage('contact')}>Inquire <Arrow/></button>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="tier featured">
                <div className="badge-popular">MOST REQUESTED</div>
                <div className="tn">TIER 02</div>
                <h3>Integrated Campaign</h3>
                <p className="what">Full-funnel. Mahdi's voice + Trifid's 450-person production engine + paid distribution across the region. 12-week minimum. Strategy, creative direction, production, talent, landing-page build, weekly reviews.</p>
                <div className="ideal">IDEAL FOR: CATEGORY LAUNCHES · REGIONAL EXPANSIONS</div>
                <div className="qual">Qualifier: serious brand, CMO/founder in the room, minimum scope required.</div>
                <button className="btn btn-primary" style={{alignSelf:'flex-start'}} onClick={()=>setPage('contact')}>Start the brief <Arrow/></button>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="tier">
                <div className="tn">TIER 03</div>
                <h3>Keynote &amp; Stage</h3>
                <p className="what">45–60 minute keynote tailored to your audience. Panels, fireside chats, closed-door founder dinners. Private workshops for leadership teams. Topics: brand-building, operating, content at scale, MENA markets, building across 28 countries.</p>
                <div className="ideal">IDEAL FOR: TRADE SHOWS · BRAND OFFSITES · FOUNDER RETREATS</div>
                <div className="qual">Qualifier: clear date, audience profile, and event scope.</div>
                <button className="btn btn-secondary" style={{alignSelf:'flex-start'}} onClick={()=>setPage('contact')}>Book the stage <Arrow/></button>
              </div>
            </Reveal>
          </div>

          <div className="hard-filter">
            <div className="x">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 5l10 10M15 5L5 15"/></svg>
            </div>
            <div>
              <h4>Hard filters — we say no to these. Every time.</h4>
              <p>Crypto projects with no product. Guaranteed-result asks. Free-product collabs. Please don't waste the inbox.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingTop: 0}}>
        <div className="wrap">
          <Reveal>
            <div className="mono center" style={{marginBottom: 24, color:'rgba(255,255,255,.5)'}}>PAST PARTNERS · PLACEHOLDER WORDMARKS</div>
          </Reveal>
          <Reveal delay={80}>
            <div className="trust-grid" style={{borderRadius: 16}}>
              {brands.map(b => <div className="trust-cell" key={b}>{b}</div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterBlock />
    </div>
  );
}

// --------- CONTACT ---------
function ContactPage() {
  const tiles = [
    { t:'Mentorship', d:'Application. 3 minutes.', ic: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 16V4h12v12M8 20l2-4 2 4"/></svg> },
    { t:'Partnerships', d:'Brand, campaign, collab.', ic: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="7" cy="10" r="3"/><circle cx="13" cy="10" r="3"/></svg> },
    { t:'Speaking', d:'Stage, panel, fireside.', ic: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 2v11M6 8l4-6 4 6M5 17h10"/></svg> },
    { t:'Media & Press', d:'Interviews, quotes, features.', ic: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="5" width="14" height="10" rx="1"/><path d="M7 9h6M7 12h4"/></svg> },
    { t:'Investor Deal Flow', d:'Pre-seed → Series B.', ic: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 16l4-6 3 4 5-8M13 6h3v3"/></svg> },
    { t:'General', d:'Everything else.', ic: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 5h12M4 10h12M4 15h8"/></svg> },
  ];
  return (
    <div className="page-fade">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="wrap">
          <Reveal><div className="eyebrow">CONTACT · DUBAI HQ</div></Reveal>
          <h1 style={{marginTop:28}}><Reveal delay={100}>I'm busy. You're busy.<br/>Let's not waste time.</Reveal></h1>
          <Reveal delay={220}><p className="lede">Pick the door. Write in one paragraph. My team triages within 48 hours.</p></Reveal>
        </div>
      </section>

      <section style={{paddingTop: 60}}>
        <div className="wrap">
          <div className="contact-grid">
            {tiles.map((t, i) => (
              <Reveal key={t.t} delay={i*50}>
                <div className="contact-tile">
                  <div className="ic">{t.ic}</div>
                  <div>
                    <h3>{t.t}</h3>
                    <p style={{marginTop:6, fontSize:14}}>{t.d}</p>
                  </div>
                  <div className="arrow"><Arrow size={18}/></div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="map-blk">
              <div className="map-img"></div>
              <div>
                <div className="eyebrow" style={{marginBottom:20}}>HQ · DUBAI, UAE</div>
                <h3 style={{fontSize: 28}}>The Trifid Content Hub</h3>
                <p style={{marginTop: 14}}>
                  The largest content hub in the GCC. 450-person operator army. Four studios, two edit bays,
                  and a whole floor of outbound. If you're in the city, come by.
                </p>
                <div style={{marginTop: 22, display:'flex', flexDirection:'column', gap: 10}}>
                  <div className="mono" style={{color:'var(--sky)'}}>ADDRESS — [PLACEHOLDER] DUBAI, UAE</div>
                  <div className="mono" style={{color:'rgba(255,255,255,.5)'}}>WHATSAPP — [ADD wa.me LINK]</div>
                </div>
                <div style={{marginTop:24, display:'flex', gap:14, flexWrap:'wrap'}}>
                  <a href="https://www.linkedin.com/in/mahdi-shafiei-trifidmedia/" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn <Arrow/></a>
                  <a href="https://instagram.com/mahdiishafiei" target="_blank" rel="noreferrer" className="btn btn-secondary">Instagram <Arrow/></a>
                  <a href="https://www.tiktok.com/@mahdi.shafiei" target="_blank" rel="noreferrer" className="btn btn-secondary">TikTok <Arrow/></a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function PodcastFeature() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal><div className="eyebrow" style={{marginBottom:20}}>ON THE MIC · LATEST DROP</div></Reveal>
            <Reveal delay={80}><h2>The long-form version. Unedited, on camera.</h2></Reveal>
          </div>
          <div className="right">
            <Reveal delay={160}><p>Latest podcast feature. The full conversation — building Trifid, scaling across 28 countries, and what operators get wrong about content.</p></Reveal>
          </div>
        </div>
        <Reveal>
          <div className="podcast">
            <div className="podcast-video">
              {playing ? (
                <iframe src="https://www.youtube.com/embed/M0Kh0zBStAg?autoplay=1&rel=0"
                        title="Mahdi Shafiei — Podcast"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              ) : (
                <div className="podcast-thumb" onClick={()=>setPlaying(true)}>
                  <div className="label">LIVE · WATCH THE FULL EPISODE</div>
                  <div className="play-btn">
                    <svg width="28" height="28" viewBox="0 0 20 20" fill="#fff"><path d="M6 4l12 6-12 6z"/></svg>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="mono" style={{color:'var(--sky)'}}>EPISODE · FEATURED</div>
              <h3 style={{marginTop:14, fontSize: 32}}>Gen Z built my company. Gen Alpha will rename it.</h3>
              <p style={{marginTop:18, fontSize:17}}>
                How Trifid's 450-person, average-age-23 operator army actually runs. Hiring, firing,
                the cultural plays that don't fit in a LinkedIn post, and why every founder I know
                is getting the next generation wrong.
              </p>
              <div style={{marginTop: 24, display:'flex', gap: 14, flexWrap:'wrap'}}>
                <a href="https://www.youtube.com/watch?v=M0Kh0zBStAg" target="_blank" rel="noreferrer" className="btn btn-secondary">Open on YouTube <Arrow/></a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { PodcastFeature });
