// ============== PAGES ==============

// --------- HOME ---------
function HomePage({ setPage }) {
  return (
    <div className="page-fade">
      {/* HERO */}
      <section className="hero">
        <div className="hero-canvas"><Globe3D /></div>
        <div className="hero-grid"></div>
        <div className="wrap hero-inner">
          <Reveal><div className="eyebrow">FOUNDER · OPERATOR · INVESTOR</div></Reveal>
          <h1 style={{marginTop:28}}>
            <Reveal delay={100}><span style={{display:'block'}}>10 Billion Views.</span></Reveal>
            <Reveal delay={200}><span style={{display:'block'}}>$100M+ in Sales.</span></Reveal>
            <Reveal delay={300}><span style={{display:'block'}}><em>Built From Zero.</em></span></Reveal>
          </h1>
          <Reveal delay={450}>
            <p className="hero-sub">
              I'm Mahdi. I help founders turn content into cashflow across 28 countries.
              No gurus, no fluff — just the plays that actually move revenue.
            </p>
          </Reveal>
          <Reveal delay={550}>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={()=>setPage('mentorship')}>
                Apply for Mentorship <Arrow/>
              </button>
              <button className="btn btn-secondary" onClick={()=>setPage('newsletter')}>
                Steal My Frameworks — Free <Arrow/>
              </button>
            </div>
          </Reveal>
        </div>
        <div className="hero-meta">
          <div><div>LIVE</div><div className="line"></div></div>
          <div>HQ · DUBAI, UAE</div>
          <div>28 COUNTRIES</div>
          <div>EST. 2018</div>
        </div>
        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="pipe"></div>
        </div>
      </section>

      <Ticker />
      <TrustWall />

      {/* WHY MAHDI */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>WHY MAHDI</div></Reveal>
              <Reveal delay={80}><h2>Most mentors sell frameworks they've never run. I ship them daily.</h2></Reveal>
            </div>
            <div className="right">
              <Reveal delay={160}>
                <p>Three reasons founders keep re-upping. One reason they leave: they already built what they came for.</p>
              </Reveal>
            </div>
          </div>
          <div className="why-grid">
            {[
              { n:'01', t:'Proven Track Record', b:'Trifid has generated 10B+ views and $100M+ in client sales across 28 markets. These are receipts, not case studies with blurred logos.' },
              { n:'02', t:'Tailored Warfare', b:"No playbook is universal. Plays for a Dubai D2C brand don't fit a London SaaS. I rewrite the plan against your market, team size, and cashflow." },
              { n:'03', t:'Expert Aggression', b:"Content, sales, and hiring — compressed. You'll ship more in 4 weeks than most founders ship in 4 quarters. That's the whole point." },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i*100}>
                <div className="why-card">
                  <div className="glow"></div>
                  <div className="num">{x.n}</div>
                  <h3>{x.t}</h3>
                  <p>{x.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS row — tasteful wordmarks only; real logos to be added */}
      <section style={{paddingTop: 0}}>
        <div className="wrap">
          <Reveal>
            <div className="mono center" style={{marginBottom: 24, color:'rgba(255,255,255,.5)'}}>FEATURED ON &nbsp;·&nbsp; PLACEHOLDER WORDMARKS</div>
          </Reveal>
          <Reveal delay={80}>
            <div className="press-row">
              <div>FORBES ME</div>
              <div>ARABIAN BUSINESS</div>
              <div>ENTREPRENEUR ME</div>
              <div>GULF NEWS</div>
              <div>THE NATIONAL</div>
              <div>+ PODCASTS</div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="placeholder-banner" style={{marginTop: 24, maxWidth: 640, marginLeft:'auto', marginRight:'auto'}}>
              REPLACE WITH REAL PRESS / PODCAST LOGOS POST-LAUNCH
            </div>
          </Reveal>
        </div>
      </section>

      {/* MEET MAHDI */}
      <section>
        <div className="wrap">
          <div className="meet">
            <Reveal>
              <div className="meet-photo">
                <img src="assets/mahdi-stage.jpeg" alt="Mahdi Shafiei on stage" />
                <div className="frame"></div>
                <div className="caption">
                  <div className="l">MAHDI · STAGE</div>
                  <div className="r">28 MARKETS · ONE PLAYBOOK</div>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal delay={100}><div className="eyebrow" style={{marginBottom:22}}>MEET MAHDI</div></Reveal>
              <Reveal delay={180}>
                <div className="meet-quote">
                  <span className="mark">"</span>
                  I started flipping sneakers at 16. Now I'm the operator I wish I'd had when I was 22, broke, and stubborn.
                </div>
              </Reveal>
              <Reveal delay={260}>
                <p className="meet-bio">
                  4x founder. Investor. Keynote speaker. Started Trifid Media in 2018 with a laptop
                  and zero funding. Today: 450+ team members across Saudi, Kuwait, Qatar, UAE, Australia,
                  India, South Africa, Morocco, UK, Lebanon and more. First agency in the GCC to run
                  TikTok workshops. Largest content hub in the region. I don't teach from a deck —
                  I teach from last week's P&L.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <div className="meet-sig">— MAHDI SHAFIEI, FOUNDER · TRIFID MEDIA</div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER GRID */}
      <section className="sec-off" style={{color:'var(--ink)'}}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>FOUR DOORS</div></Reveal>
              <Reveal delay={80}><h2 style={{color:'var(--ink)'}}>Four ways in. Pick the one that matches where you actually are.</h2></Reveal>
            </div>
          </div>
          <div className="offers">
            {[
              { idx:'01', t:'Mentorship', d:'1:1 with Mahdi. 4 weeks. No fluff.', cta:'Apply now', to:'mentorship', featured: true },
              { idx:'02', t:'Learn', d:'Courses. What 10B views taught me.', cta:'Explore courses', to:'learn' },
              { idx:'03', t:'Read', d:"Books that hit, not lecture.", cta:'Coming soon', to:'read' },
              { idx:'04', t:'Community', d:'Where GCC operators talk shop.', cta:'Join free', to:'community' },
            ].map((o, i) => (
              <Reveal key={o.idx} delay={i*80}>
                <div className={`offer ${o.featured?'featured':''}`} onClick={()=>setPage(o.to)} style={{color:'#fff', cursor:'pointer'}}>
                  <div>
                    <div className="idx">{o.idx}</div>
                    <div className="title" style={{marginTop: 14}}>{o.t}</div>
                    <div className="desc">{o.d}</div>
                  </div>
                  <div className="cta">{o.cta} <Arrow/></div>
                  <div className="shape"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>VOICES FROM THE PIPELINE</div></Reveal>
              <Reveal delay={80}><h2>What operators say mid-program.</h2></Reveal>
            </div>
            <div className="right">
              <Reveal delay={160}>
                <p>Current cohort is mid-program — these are structural placeholders modelled on the real mentee ICP. Verbatim quotes drop in at cohort-end.</p>
              </Reveal>
            </div>
          </div>
          <div className="testi-grid">
            {[
              { tag:'01 · AGENCY · IN→UAE', body:"I was stuck on referrals. Mahdi forced me to build an outbound engine and a personal brand on LinkedIn. 8 weeks in, I'm closing work outside my network for the first time.", name:'Neil S.', role:'Founder, marketing agency · India', av:'NS' },
              { tag:'02 · SaaS · APAC+MENA', body:"We had a product and no sales motion. The mentorship gave us a repeatable outbound SOP and a hiring plan for Middle East sales. That was the whole unlock.", name:'Piyush B.', role:'Founder, D2C/SaaS agency · India', av:'PB' },
              { tag:'03 · REMOTE AGENCY · MENA', body:"I was the only reason anyone paid us. Mahdi helped me design a sales team on commission using Lebanese talent. I'm not the bottleneck anymore.", name:'Susan I.', role:'Founder, Your Business Gateway · MENA', av:'SI' },
              { tag:'04 · PIVOTER · GCC', body:"22 years in corporate. I thought I'd missed my window to build something of my own. Mahdi showed me the first 90 days are brand, not product.", name:'Maham M.', role:'Creative entrepreneur · GCC', av:'MM' },
              { tag:'05 · CREATOR · INTL', body:"My content was getting views and not getting paid. I left with a monetization stack — paid partnerships, tour funnel, creator income — that I'm still running.", name:'Jay P.', role:'Travel creator · International', av:'JP' },
              { tag:'06 · D2C · PK', body:"I was a QA tester with a brand idea and no nerve. 4 weeks in I had a launch plan, a content engine, and receipts. I'd pay the $5K again tomorrow.", name:'Fizah B.', role:'Founder, sustainable apparel · Pakistan', av:'FB' },
            ].map((t, i) => (
              <Reveal key={i} delay={i*60}>
                <div className="testi">
                  <div className="tag">{t.tag}</div>
                  <div className="mark">"</div>
                  <div className="body">{t.body}</div>
                  <div className="who">
                    <div className="avatar">{t.av}</div>
                    <div>
                      <div className="name">{t.name}</div>
                      <div className="role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="placeholder-banner" style={{marginTop:40, maxWidth:720}}>
              PLACEHOLDER QUOTES · REPLACE WITH VERBATIM COHORT-END QUOTES PRE-LAUNCH
            </div>
          </Reveal>
        </div>
      </section>

      {/* WARM-SELL */}
      <section className="warm">
        <div className="wrap">
          <div>
            <Reveal><div className="eyebrow" style={{marginBottom:22}}>THE OFFER</div></Reveal>
            <Reveal delay={80}>
              <h2>Most mentors haven't built anything. I've built 4 companies, invested in dozens, and scaled across 28 countries. If you're serious, apply.</h2>
            </Reveal>
            <Reveal delay={160}>
              <div style={{marginTop: 32, display:'flex', gap: 14, flexWrap:'wrap'}}>
                <button className="btn btn-primary" onClick={()=>setPage('mentorship')}>Apply for mentorship <Arrow/></button>
                <button className="btn btn-secondary" onClick={()=>setPage('learn')}>Not ready? Browse courses <Arrow/></button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="aside">
              LIMITED SEATS PER QUARTER. ROLLING COHORTS EVERY ~2 WEEKS. FIT &gt; PRICE.
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterBlock />
    </div>
  );
}

// --------- MENTORSHIP ---------
function MentorshipPage({ setPage }) {
  return (
    <div className="page-fade">
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="stage-img"></div>
        </div>
        <div className="wrap">
          <Reveal><div className="eyebrow">1:1 WITH MAHDI · APPLICATION-ONLY</div></Reveal>
          <h1 style={{marginTop: 28}}>
            <Reveal delay={100}>For founders who are<br/>done playing.</Reveal>
          </h1>
          <Reveal delay={220}>
            <p className="lede">
              4 weeks in the room with me. Direct WhatsApp to my team of specialists.
              Real frameworks, real receipts, and a hard pass if we're not the right fit.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div style={{marginTop:36, display:'flex', gap: 14, flexWrap:'wrap'}}>
              <a href="#apply" className="btn btn-primary">Apply for a discovery call <Arrow/></a>
              <a href="#what-you-get" className="btn btn-secondary">What you actually get <Arrow/></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>WHO THIS IS FOR</div></Reveal>
              <Reveal delay={80}><h2>Four operators. One bottleneck each.</h2></Reveal>
            </div>
            <div className="right">
              <Reveal delay={160}><p>If you see yourself in one of these, book the call. If you don't, save us both the time.</p></Reveal>
            </div>
          </div>
          <div className="icp-grid">
            {[
              { n:'01', t:'Agency owners on a referral ceiling', b:"You're running a 3–20 person agency doing $5K–$50K/mo. All your work comes from referrals and you're the only one who can sell. You need an outbound engine, a sales SOP, and a second seller who isn't you." },
              { n:'02', t:'D2C / e-commerce founders scaling organic', b:"You've got a product and 10K–200K followers but revenue isn't matching attention. You want organic / EGC content that sells, not another round of paid ads." },
              { n:'03', t:'SaaS & service founders expanding into GCC / MENA / APAC', b:"You've got traction in one market and want to crack the Middle East or Asia-Pacific. You need positioning, a hiring playbook for regional sales, and a founder-led content motion." },
              { n:'04', t:'Career pivoters & creators going pro', b:"15+ years in corporate or 100K+ followers with no monetization stack. You want to move from employee / poster to owner. You need a personal brand that pays." },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i*80}>
                <div className="icp">
                  <div className="n">{x.n}</div>
                  <h3>{x.t}</h3>
                  <p>{x.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS NOT FOR */}
      <section style={{paddingTop: 0}}>
        <div className="wrap">
          <Reveal>
            <div className="not-for">
              <div className="col good">
                <h3>If you want tactics, stay.</h3>
                <ul>
                  <li><span className="ic">✓</span><span>Revenue is your KPI, not impressions.</span></li>
                  <li><span className="ic">✓</span><span>You'll take feedback without arguing for 20 minutes.</span></li>
                  <li><span className="ic">✓</span><span>You can commit 4 weeks of real focus. Not "when I'm free."</span></li>
                  <li><span className="ic">✓</span><span>You've shipped something — anything — already.</span></li>
                </ul>
              </div>
              <div className="col bad">
                <h3>If you want motivation, leave.</h3>
                <ul>
                  <li><span className="ic">✕</span><span>You want quotes, not work. Go find an Instagram page.</span></li>
                  <li><span className="ic">✕</span><span>You're allergic to hiring, firing, or outbound calls.</span></li>
                  <li><span className="ic">✕</span><span>You want guaranteed results. I don't do guarantees.</span></li>
                  <li><span className="ic">✕</span><span>You haven't started. Build the thing first.</span></li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="what-you-get">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>WHAT YOU GET</div></Reveal>
              <Reveal delay={80}><h2>4–6 weeks. Me, my team, and every play we've ever shipped.</h2></Reveal>
            </div>
          </div>
          <Reveal>
            <div className="get-list">
              {[
                ['01', <><strong>Private 1:1 calls with Mahdi</strong> — every week for 4–6 weeks, tailored to your revenue goal.</>],
                ['02', <><strong>Direct WhatsApp access</strong> — daily group with me and my team. Ask between calls.</>],
                ['03', <><strong>Access to specialists</strong> — Neeta and Haneen (personal branding & content), plus operators from Trifid's 450-person network for sales, hiring, and ops.</>],
                ['04', <><strong>The frameworks</strong> — 10B+ views, $100M+ in client sales. The actual systems, not the decks about them.</>],
                ['05', <><strong>Sales SOP + outbound playbook</strong> — and founder-content / EGC playbooks we run internally at Trifid.</>],
                ['06', <><strong>Office visits in Dubai</strong> — real exposure to the Trifid Content Hub when you're in the city.</>],
                ['07', <><strong>Hiring support</strong> — specifically placing Lebanese and regional outreach talent into your sales team.</>],
                ['08', <><strong>Investor pitching practice</strong> — for founders raising. Live reps, not a PDF.</>],
                ['09', <><strong>AI productivity stack</strong> — the transcript, research and content tools the team uses daily.</>],
                ['10', <><strong>Tabby 2-pay installment</strong> — split the investment across 2 payments.</>],
                ['11', <><strong>Post-program follow-up</strong> — you don't get dropped at week 6. The WhatsApp stays open.</>],
                ['12', <><strong>No refunds from week 3 onwards</strong> — if we haven't shipped material progress by week 2, we refund and part ways clean.</>],
              ].map(([n, body]) => (
                <div key={n}>
                  <div className="n">{n}</div>
                  <div className="body">{body}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS WALL */}
      <section className="sec-off" style={{color:'#fff', background:'linear-gradient(180deg,#081e38,#0A2540)'}}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>RESULTS WALL</div></Reveal>
              <Reveal delay={80}><h2 style={{color:'#fff'}}>What mentees ship by the end of the program.</h2></Reveal>
            </div>
            <div className="right">
              <Reveal delay={160}><p style={{color:'rgba(255,255,255,.7)'}}>Numbers modeled on the real ICP. Actual hard-number receipts swap in as the current cohort completes.</p></Reveal>
            </div>
          </div>
          <div className="results-grid">
            {[
              { kpi:'$0 → $38K', tag:'AGENCY · OUTBOUND LIVE', desc:'Built from zero to 38K/mo in booked outbound pipeline in 8 weeks. First non-referral clients closed.', who:'Agency owner · India → UAE' },
              { kpi:'3 hires', tag:'SaaS · MENA SALES TEAM', desc:'Identified, hired, and onboarded a 3-person Lebanese outbound team on commission. Founder out of sales by week 6.', who:'SaaS founder · APAC + MENA' },
              { kpi:'$12K paid partners', tag:'CREATOR · MONETIZATION', desc:'Moved from free collabs to paid partnerships. Locked 3 brand deals and a founder-led tour funnel.', who:'Travel creator · International' },
              { kpi:'90-day launch', tag:'PIVOTER · NEW BUSINESS', desc:'22-year corporate operator shipped a personal-brand-first business in 90 days. First 5 clients closed inbound.', who:'Creative entrepreneur · GCC' },
              { kpi:'4x CAC:LTV', tag:'D2C · ORGANIC STACK', desc:'Rebuilt the content engine around EGC. 4x improvement in attributable revenue from organic vs. paid.', who:'D2C founder · Middle East' },
              { kpi:'500 units / 14d', tag:'APPAREL · FIRST DROP', desc:'Launch plan, content engine, and receipts in 4 weeks. First drop sold 500 units in 14 days.', who:'Sustainable apparel · Pakistan' },
            ].map((r, i) => (
              <Reveal key={i} delay={i*80}>
                <div className="result">
                  <div className="kpi">{r.kpi}</div>
                  <div className="tag">{r.tag}</div>
                  <div className="desc">{r.desc}</div>
                  <div className="foot">{r.who}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="placeholder-banner" style={{marginTop:40, maxWidth: 720}}>
              PLACEHOLDER HARD-NUMBER RECEIPTS · REPLACE WITH ACTUAL COHORT DATA PRE-LAUNCH
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>TRANSFORMATION TIMELINE</div></Reveal>
              <Reveal delay={80}><h2>Before. 30 days. 90 days. 6 months.</h2></Reveal>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="tl-grid">
              {[
                { when:'BEFORE', title:'Referral-dependent', p:'No sales SOP. Founder is the bottleneck. Personal brand is weak or inconsistent. Cashflow swings with moods.' },
                { when:'WEEK 4 · END OF PROGRAM', title:'Outbound live', p:'Personal brand publishing weekly. Outbound SOP running. First non-network deals in pipeline. First sales hire identified.' },
                { when:'90 DAYS', title:'Team installed', p:'Sales team of 1–3 installed. Monthly pipeline is predictable. Founder out of daily execution on at least one function.' },
                { when:'6 MONTHS', title:'Compounding', p:'Founder-led content compounding. Multi-channel revenue (services + product + partnerships). Hiring a COO or second-in-command.' },
              ].map((s, i) => (
                <Reveal key={s.when} delay={i*100}>
                  <div className="tl-step">
                    <div className="dot"></div>
                    <div className="when">{s.when}</div>
                    <h4>{s.title}</h4>
                    <p>{s.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>FAQ</div></Reveal>
              <Reveal delay={80}><h2>The questions people actually ask on the call.</h2></Reveal>
            </div>
          </div>
          <FAQ items={[
            ['How much does it cost?', "We only discuss investment on the application call — because fit matters more than price. If we're not right for each other, the number is moot."],
            ['How long is the program?', "4 weeks core, with 2 flex weeks built in. Rolling cohorts start every ~2 weeks. If life happens, we pause and resume."],
            ['Do you run in languages other than English?', "Program runs in English. My team can support in Arabic, Hindi, and Urdu when needed — confirmed on the call."],
            ['Is there a payment plan?', "Yes — 2-pay split via Tabby is standard. Discussed on the call. No pitching, no pressure."],
            ["What's the refund policy?", "If we don't ship material progress against your goal in the first 2 weeks, we refund and part ways. Said once, meant always."],
            ['How is this different from your courses?', "Courses teach you what to do. Mentorship is me in the room while you do it."],
          ]}/>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="sec-off" style={{background:'linear-gradient(180deg,#06172b,#0A2540)', color:'#fff'}}>
        <div className="wrap">
          <div className="section-head" style={{justifyContent:'center', textAlign:'center'}}>
            <div style={{margin:'0 auto'}}>
              <Reveal><div className="eyebrow" style={{marginBottom:20}}>APPLY</div></Reveal>
              <Reveal delay={80}><h2 style={{color:'#fff'}}>Only a limited number of seats per quarter.</h2></Reveal>
              <Reveal delay={160}><p style={{color:'rgba(255,255,255,.7)', marginTop:18}}>The form takes 3 minutes. If there's a fit, my team books a discovery call within 48 hours.</p></Reveal>
            </div>
          </div>
          <Reveal delay={200}><ApplyForm /></Reveal>
        </div>
      </section>
    </div>
  );
}

function FAQ({ items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <Reveal key={i} delay={i*40}>
          <div className={`faq-item ${open === i ? 'open' : ''}`} onClick={()=>setOpen(open === i ? -1 : i)}>
            <div className="faq-q">
              <div className="q">{q}</div>
              <div className="plus">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 1v8M1 5h8" />
                </svg>
              </div>
            </div>
            <div className="faq-a">{a}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ApplyForm() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({});
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const steps = ['Contact', 'Business', 'Bottleneck', 'Motivation', 'Book'];
  return (
    <div className="apply">
      <div className="apply-steps">
        {steps.map((s, i) => (
          <div key={s} className={`s ${step === i+1 ? 'active' : ''} ${step > i+1 ? 'done' : ''}`}>
            0{i+1} · {s}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <div className="mono" style={{color:'var(--sky)', marginBottom:22}}>STEP 01 / 04 — WHO ARE YOU?</div>
          <div className="row">
            <div><label>Full name</label><input type="text" placeholder="Mahdi Shafiei" defaultValue={data.name} onBlur={e=>set('name', e.target.value)}/></div>
            <div><label>Email</label><input type="email" placeholder="you@company.com" defaultValue={data.email} onBlur={e=>set('email', e.target.value)}/></div>
          </div>
          <div><label>WhatsApp number</label><input type="tel" placeholder="+971 ..." defaultValue={data.wa} onBlur={e=>set('wa', e.target.value)}/></div>
        </div>
      )}
      {step === 2 && (
        <div>
          <div className="mono" style={{color:'var(--sky)', marginBottom:22}}>STEP 02 / 04 — YOUR BUSINESS</div>
          <div className="row">
            <div><label>Company</label><input type="text" placeholder="Company name" defaultValue={data.company} onBlur={e=>set('company', e.target.value)}/></div>
            <div><label>Country</label><input type="text" placeholder="UAE · India · UK ..." defaultValue={data.country} onBlur={e=>set('country', e.target.value)}/></div>
          </div>
          <div>
            <label>Monthly revenue</label>
            <select defaultValue={data.rev || ''} onChange={e=>set('rev', e.target.value)}>
              <option value="">Select a range</option>
              <option>Pre-revenue</option>
              <option>$0 – $5K / month</option>
              <option>$5K – $20K / month</option>
              <option>$20K – $50K / month</option>
              <option>$50K – $200K / month</option>
              <option>$200K+ / month</option>
            </select>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <div className="mono" style={{color:'var(--sky)', marginBottom:22}}>STEP 03 / 04 — WHAT'S BROKEN?</div>
          <label>Your biggest bottleneck (be specific)</label>
          <textarea placeholder="Example: I run a 6-person agency doing $22K/mo, all referral. I'm the only one who closes. I need to hire a seller and ship an outbound motion before Ramadan." defaultValue={data.bottleneck} onBlur={e=>set('bottleneck', e.target.value)}></textarea>
        </div>
      )}
      {step === 4 && (
        <div>
          <div className="mono" style={{color:'var(--sky)', marginBottom:22}}>STEP 04 / 04 — WHY NOW?</div>
          <label>Why Mahdi, why now?</label>
          <textarea placeholder="What made you apply this week and not last quarter?" defaultValue={data.why} onBlur={e=>set('why', e.target.value)}></textarea>
        </div>
      )}
      {step === 5 && (
        <div style={{textAlign:'center', padding:'40px 0'}}>
          <div style={{width:72, height:72, margin:'0 auto', borderRadius:'50%', background:'rgba(30,90,255,.15)', border:'1px solid rgba(30,90,255,.5)', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="var(--sky)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4 4 8-8"/></svg>
          </div>
          <h3 style={{marginTop:22}}>Application received.</h3>
          <p style={{marginTop:14, maxWidth:'42ch', marginLeft:'auto', marginRight:'auto'}}>
            If there's a fit, my team will reach out on WhatsApp within 48 hours with a Calendly link for a discovery call.
            If it's not a fit, you'll hear that too — quickly, and with a reason.
          </p>
          <div style={{marginTop:24}} className="mono">— MAHDI</div>
        </div>
      )}

      <div className="apply-nav">
        <button className="btn btn-secondary" onClick={()=>setStep(Math.max(1, step-1))} disabled={step === 1 || step === 5} style={{opacity: (step === 1 || step === 5) ? .4 : 1, cursor: (step === 1 || step === 5) ? 'default' : 'pointer'}}>← Back</button>
        {step < 4 && <button className="btn btn-primary" onClick={()=>setStep(step+1)}>Continue <Arrow/></button>}
        {step === 4 && <button className="btn btn-primary" onClick={()=>setStep(5)}>Submit application <Arrow/></button>}
      </div>
    </div>
  );
}

Object.assign(window, { HomePage, MentorshipPage, FAQ, ApplyForm });
