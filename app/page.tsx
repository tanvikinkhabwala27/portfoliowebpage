const services = [
  { n:'01', title:'Dashboards & BI', copy:'Decision-ready Power BI or Tableau dashboards built around the metrics that matter—not vanity charts.', tags:['Power BI','Tableau','KPI design'] },
  { n:'02', title:'Reporting automation', copy:'Replace repetitive spreadsheet work with reliable, documented workflows that give your team time back.', tags:['Python','SQL','Alteryx'] },
  { n:'03', title:'Data foundations', copy:'Clean up disconnected sources, fragile reports, and inconsistent definitions so everyone trusts the numbers.', tags:['Snowflake','ETL / ELT','Data modeling'] },
  { n:'04', title:'Analytics advisory', copy:'A focused second opinion on your data roadmap, reporting stack, or a high-stakes business question.', tags:['Strategy','Audit','Fractional support'] },
];
const impact = [
  { stat:'80 → 2', unit:'hours', title:'Automated a critical validation process', copy:'Built a Python and Alteryx workflow that cut manual effort by roughly 98% while strengthening audit readiness.' },
  { stat:'$200K', unit:'annual savings', title:'Modeled a smarter operational route', copy:'Designed a predictive transportation model that identified significant recurring savings for a healthcare organization.' },
  { stat:'8M+', unit:'records', title:'Made operational data decision-ready', copy:'Delivered reporting and KPI frameworks that helped hospital leaders accelerate decisions by up to 85%.' },
];

export default function Home() {
  const consultation = 'mailto:tanvikinkhabwala@gmail.com?subject=Free%20analytics%20consultation&body=Hi%20Tanvi%2C%0A%0AI%E2%80%99d%20like%20help%20with%3A%0A%0AMy%20timeline%20is%3A%0A';
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top"><span>TK</span> Tanvi Kinkhabwala</a>
      <div className="navlinks"><a href="#services">Services</a><a href="#work">Impact</a><a href="#about">About</a><a className="button small" href={consultation}>Free consultation</a></div>
    </nav>

    <section className="hero shell" id="top">
      <div className="eyebrow"><span /> Data &amp; analytics consulting for growing teams</div>
      <h1>Your data should<br />answer <em>what’s next.</em></h1>
      <p className="lede">I help teams replace spreadsheet chaos and manual reporting with dashboards, automation, and practical analytics—without enterprise consulting costs.</p>
      <div className="actions"><a className="button" href={consultation}>Book a free consultation <span>↗</span></a><a className="textlink" href="#services">Explore services ↓</a></div>
      <p className="micro">30 minutes · No obligation · Clear next steps</p>
    </section>

    <section className="proof shell" aria-label="Selected results">
      <div className="proofItem"><strong>7+</strong><span>years turning complex data into clear decisions</span></div>
      <div className="proofItem"><strong>98%</strong><span>less manual effort in a flagship automation</span></div>
      <div className="proofItem"><strong>$200K</strong><span>annual savings from one predictive model</span></div>
    </section>

    <section className="intro shell" id="services"><div><p className="kicker">How I can help</p><h2>Senior expertise.<br />Right-sized for you.</h2></div><p>I bring the rigor of enterprise analytics to smaller teams. We’ll start with the business question, then build only what creates value.</p></section>
    <section className="serviceGrid shell">
      {services.map(s=><article className="service" key={s.n}><span className="num">{s.n}</span><h3>{s.title}</h3><p>{s.copy}</p><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}
    </section>

    <section className="work" id="work"><div className="shell"><div className="sectionHead"><p className="kicker">Selected impact</p><h2>Proof, not promises.</h2><p>Representative outcomes from enterprise analytics work across consulting, healthcare, retail, and operations.</p></div><div className="impactGrid">{impact.map((x,i)=><article className="impact" key={x.stat}><span className="case">Case 0{i+1}</span><div><strong>{x.stat}</strong><small>{x.unit}</small></div><h3>{x.title}</h3><p>{x.copy}</p></article>)}</div></div></section>

    <section className="process shell"><div><p className="kicker">A simple engagement</p><h2>Start small.<br />Prove value.<br />Then scale.</h2></div><ol><li><span>1</span><div><strong>Free discovery call</strong><p>We clarify the problem, desired outcome, and whether I’m the right fit.</p></div></li><li><span>2</span><div><strong>Focused recommendation</strong><p>You receive a practical scope, timeline, and transparent project price.</p></div></li><li><span>3</span><div><strong>Build with visibility</strong><p>Short feedback loops, clear documentation, and no black-box delivery.</p></div></li></ol></section>

    <section className="about" id="about"><div className="shell aboutGrid"><div className="monogram" aria-hidden="true">TK<span>data → decisions</span></div><div><p className="kicker">About Tanvi</p><h2>Business-minded.<br />Technically fluent.</h2><p className="aboutCopy">I’m a senior analytics professional with 7+ years of experience helping leaders make better decisions with data. My work spans analytics strategy, BI, data engineering, and automation—from 6M+ record analyses to executive KPI programs.</p><p className="aboutCopy">I translate between technical teams and business stakeholders, so the final solution is useful, maintainable, and understood.</p><div className="skillLine">SQL · Python · Snowflake · Power BI · Tableau · Alteryx</div><a className="linkedin" href="https://www.linkedin.com/in/tanvi-kinkhabwala" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div></div></section>

    <section className="faq shell"><div><p className="kicker">Good to know</p><h2>Questions,<br />answered.</h2></div><div className="questions"><details><summary>Who do you work with?<span>+</span></summary><p>Growing businesses, founders, and lean teams that need senior analytics help but not a large consulting engagement.</p></details><details><summary>What does “lower cost” mean?<span>+</span></summary><p>A right-sized scope and direct collaboration keep overhead low. After the free call, you’ll receive a clear project price before work begins.</p></details><details><summary>Can we start with one small problem?<span>+</span></summary><p>Yes—that’s often the best approach. A reporting audit, prototype dashboard, or single automation can demonstrate value quickly.</p></details><details><summary>Do you offer ongoing support?<span>+</span></summary><p>Yes. Depending on the need, support can be project-based or a lightweight recurring advisory arrangement.</p></details></div></section>

    <section className="cta"><div className="shell"><p className="kicker">Your next decision can be easier</p><h2>Bring me the messy<br />spreadsheet.</h2><p>Leave with clarity—even if we decide you don’t need a project.</p><a className="button light" href={consultation}>Book your free 30-minute consultation <span>↗</span></a></div></section>
    <footer className="footer shell"><div className="brand"><span>TK</span> Tanvi Kinkhabwala</div><p>Data &amp; analytics consulting · New York</p><div><a href="mailto:tanvikinkhabwala@gmail.com">Email</a><a href="https://www.linkedin.com/in/tanvi-kinkhabwala" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </main>;
}
