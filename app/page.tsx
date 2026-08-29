import WorkVisuals from './WorkVisuals';

const impact = [
  { stat:'80 → 2', unit:'hours', title:'Automated a critical validation process', copy:'Built a Python and Alteryx workflow that cut manual effort by roughly 98% while strengthening audit readiness.' },
  { stat:'8% → 31%', unit:'margin', title:'Found where the business should focus next', copy:'Revenue pointed to one product. Adding profitability, customer behavior, and channel performance revealed a stronger growth opportunity.' },
  { stat:'8M+', unit:'records', title:'Made complex data decision-ready', copy:'Delivered reporting and KPI frameworks that helped hospital leaders accelerate decisions by up to 85%.' },
];
const experience = [
  { years:'2022 — Present', role:'Senior Analytics Consultant', company:'Protiviti · New York', copy:'Leading enterprise analytics engagements, executive KPI strategy, SQL data modeling, BI delivery, and high-impact automation across millions of records.' },
  { years:'2021 — 2022', role:'Analytics Consultant', company:'DataDrive · Minneapolis', copy:'Consolidated 30+ data sources into Snowflake and delivered scalable pipelines and Tableau analytics for sales, pricing, and CPG teams.' },
  { years:'2020 — 2021', role:'Business Intelligence Engineer', company:'Holy Name Medical Center · New Jersey', copy:'Built executive dashboards, predictive models, and operational automation supporting hospital leadership across 8M+ records.' },
  { years:'2019', role:'Business Intelligence Analyst', company:'CGS · New York', copy:'Created retail BI solutions for 13 clients, contributing to stronger sales, inventory turnover, and product availability.' },
  { years:'2017 — 2018', role:'Data Analyst', company:'Accenture · Mumbai', copy:'Delivered enterprise ETL enhancements and optimized SQL processing performance by 30% for financial systems.' },
];
const capabilities = [
  ['Analytics & BI','Power BI · Tableau · KPI strategy · Executive reporting'],
  ['Data engineering','SQL · Snowflake · Data modeling · ETL / ELT · APIs'],
  ['Automation','Python · Alteryx · Workflow design · Quality controls'],
  ['Leadership','Stakeholder management · Requirements · Mentoring · Storytelling'],
];

export default function Home() {
  const contact = 'mailto:tanvikinkhabwala@gmail.com?subject=Analytics%20problem&body=Hi%20Tanvi%2C%0A%0AI%20have%20an%20analytics%20problem%20I%27d%20like%20to%20discuss%3A%0A';
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top"><span className="logoMark" aria-hidden="true" /> Tanvi Kinkhabwala</a>
      <div className="navlinks"><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#capabilities">Capabilities</a><a href="#about">About</a><a href="/analytics-lab">Analytics Lab</a></div>
    </nav>

    <section className="hero shell" id="top">
      <div className="eyebrow"><span /> Senior data analytics professional · New York</div>
      <div className="heroGrid">
        <h1>I turn complex<br />data into <em>clear<br />decisions.</em></h1>
        <div className="heroContent">
          <p className="lede">I’m Tanvi, an analytics leader with 7+ years of experience building enterprise BI, automation, and data solutions that create measurable business impact.</p>
          <div className="actions"><a className="button" href="#work">View selected work <span>↓</span></a><a className="textlink" href="https://www.linkedin.com/in/tanvi-kinkhabwala" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <p className="micro">SQL · Python · Snowflake · Power BI · Tableau · Alteryx</p>
        </div>
      </div>
    </section>

    <section className="proof shell" aria-label="Career highlights">
      <div className="proofItem"><strong>7+</strong><span>years across consulting, healthcare, retail, and finance</span></div>
      <div className="proofItem"><strong>30+</strong><span>enterprise data sources unified into one trusted platform</span></div>
      <div className="proofItem"><strong>6M+</strong><span>records analyzed annually in enterprise engagements</span></div>
    </section>

    <section className="about" id="about"><div className="shell aboutGrid"><div className="monogram" aria-hidden="true">TK<span>data → decisions</span></div><div><p className="kicker">A little about me</p><h2>Business-minded.<br />Technically fluent.</h2><p className="aboutCopy">I work at the intersection of data, technology, and business strategy. My job is not simply to build a dashboard—it’s to understand the decision behind it and make the path forward visible.</p><p className="aboutCopy">I’ve partnered with executives, finance leaders, operators, and technical teams to turn complex data into trusted systems, sharper questions, and measurable results.</p><div className="education"><span>MS, Information Systems</span><strong>Stevens Institute of Technology · GPA 3.7</strong></div></div></div></section>

    <section className="work" id="work"><div className="shell"><div className="sectionHead"><p className="kicker">Selected work</p><h2>Impact, in numbers.</h2><p>A few examples of how I’ve used analytics, automation, and business context to create meaningful outcomes.</p></div><div className="impactGrid">{impact.map((x,i)=><article className="impact" key={x.stat}><span className="case">Project 0{i+1}</span><div className="impactMetric"><strong>{x.stat}</strong><small>{x.unit}</small></div><h3>{x.title}</h3><p>{x.copy}</p></article>)}</div><div className="storiesBridge" aria-hidden="true"><span>The stories behind the numbers</span><b>↓</b></div></div></section>

    <WorkVisuals />

    <section className="experience shell" id="experience"><div className="experienceHead"><p className="kicker">Experience</p><h2>Built across industries.</h2><p>From global consulting to healthcare operations, each role has strengthened how I connect technical execution with business outcomes.</p></div><div className="timeline">{experience.map((x,i)=><article className="role" key={x.company}><div><span className="roleIndex">0{i+1}</span><span className="years">{x.years}</span></div><div><h3>{x.role}</h3><strong>{x.company}</strong><p>{x.copy}</p></div></article>)}</div></section>

    <section className="capabilitySection" id="capabilities"><div className="shell capabilities"><div><p className="kicker">Capabilities</p><h2>What I bring<br />to the table.</h2></div><div>{capabilities.map(c=><article className="capability" key={c[0]}><h3>{c[0]}</h3><p>{c[1]}</p></article>)}</div></div></section>

    <section className="labBridge"><div className="shell"><div className="labBridgeInner"><div className="labBridgeCopy"><p className="kicker">Want to go deeper?</p><h2>See how I work<br />with data.</h2><p>The Analytics Lab is an interactive space to see how I assess messy data, connect multiple sources, determine what can reliably be analyzed, and surface patterns worth investigating.</p><a className="button" href="/analytics-lab">Explore the Analytics Lab <span>→</span></a></div><div><p className="labJourney">Trust <span>→</span> Connect <span>→</span> Understand <span>→</span> Investigate</p><ol className="labBridgeSteps" aria-label="Analytics Lab preview"><li><span>01</span><div><strong>Data health</strong><em>Can I trust it?</em></div></li><li><span>02</span><div><strong>Data connections</strong><em>Can these sources work together?</em></div></li><li><span>03</span><div><strong>Analysis readiness</strong><em>What can I learn from it?</em></div></li><li><span>04</span><div><strong>Opportunity scan</strong><em>What deserves a closer look?</em></div></li></ol></div></div><div className="problemCta"><h3>Want to know more?</h3><p>I&apos;m always happy to talk about my work, the Analytics Lab, or interesting ideas.</p><a className="textlink" href={contact}>Let&apos;s talk →</a></div></div></section>

    <footer className="footer shell"><div className="brand"><span className="logoMark" aria-hidden="true" /> Tanvi Kinkhabwala</div><p>Senior data analytics professional · New York</p><div><a href="mailto:tanvikinkhabwala@gmail.com">Email</a><a href="https://www.linkedin.com/in/tanvi-kinkhabwala" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </main>;
}
