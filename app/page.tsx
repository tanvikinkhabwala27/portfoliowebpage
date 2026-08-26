import WorkVisuals from './WorkVisuals';

const impact = [
  { stat:'80 → 2', unit:'hours', title:'Automated a critical validation process', copy:'Built a Python and Alteryx workflow that cut manual effort by roughly 98% while strengthening audit readiness.' },
  { stat:'8% → 31%', unit:'margin', title:'Found where the business should focus next', copy:'Revenue pointed to one product. Adding profitability, customer behavior, and channel performance revealed a stronger growth opportunity.', note:'Illustrative · synthetic data' },
  { stat:'8M+', unit:'records', title:'Made operational data decision-ready', copy:'Delivered reporting and KPI frameworks that helped hospital leaders accelerate decisions by up to 85%.' },
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
  const consultation = 'mailto:tanvikinkhabwala@gmail.com?subject=Free%20analytics%20consultation&body=Hi%20Tanvi%2C%0A%0AI%20liked%20your%20work%20and%20would%20love%20to%20discuss%3A%0A';
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top"><span className="logoMark" aria-hidden="true" /> Tanvi Kinkhabwala</a>
      <div className="navlinks"><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#capabilities">Capabilities</a><a href="#about">About</a></div>
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

    <section className="work" id="work"><div className="shell"><div className="sectionHead"><p className="kicker">Selected work</p><h2>Impact, in numbers.</h2><p>A few examples of how I’ve used analytics, automation, and business context to create meaningful outcomes.</p></div><div className="impactGrid">{impact.map((x,i)=><article className="impact" key={x.stat}><span className="case">Project 0{i+1}</span><div><strong>{x.stat}</strong><small>{x.unit}</small>{x.note&&<small className="cardNote">{x.note}</small>}</div><h3>{x.title}</h3><p>{x.copy}</p></article>)}</div></div></section>

    <WorkVisuals />

    <section className="experience shell" id="experience"><div className="experienceHead"><p className="kicker">Experience</p><h2>Built across industries.</h2><p>From global consulting to healthcare operations, each role has strengthened how I connect technical execution with business outcomes.</p></div><div className="timeline">{experience.map((x,i)=><article className="role" key={x.company}><div><span className="roleIndex">0{i+1}</span><span className="years">{x.years}</span></div><div><h3>{x.role}</h3><strong>{x.company}</strong><p>{x.copy}</p></div></article>)}</div></section>

    <section className="capabilitySection" id="capabilities"><div className="shell capabilities"><div><p className="kicker">Capabilities</p><h2>What I bring<br />to the table.</h2></div><div>{capabilities.map(c=><article className="capability" key={c[0]}><h3>{c[0]}</h3><p>{c[1]}</p></article>)}</div></div></section>

    <section className="businessQuestions"><div className="shell"><div className="businessQuestionsHead"><p className="kicker">For growing businesses</p><h2>What could your<br />data tell you?</h2><p>You may already be collecting the information you need to answer some of your biggest business questions. The first step is figuring out what&apos;s possible.</p></div><div className="questionGrid">
      <article><span>01</span><h3>Which products actually make me money?</h3><p>Look beyond sales and compare revenue with costs, discounts, returns, and other expenses.</p><div className="tinyEquation"><b>Revenue</b><i>−</i><b>Costs</b><i>=</i><strong>Margin</strong></div></article>
      <article><span>02</span><h3>Which customers are most valuable?</h3><p>Understand who buys repeatedly, who is growing, and which customer groups are actually profitable.</p><div className="tinyPath"><b>Customer groups</b><i>→</i><b>Repeat behavior</b><i>→</i><strong>Value</strong></div></article>
      <article><span>03</span><h3>Is my marketing actually working?</h3><p>Connect marketing spend to customers, sales, and profit instead of relying only on clicks or impressions.</p><div className="tinyPath"><b>Spend</b><i>→</i><b>Customers</b><i>→</i><b>Revenue</b><i>→</i><strong>Profit</strong></div></article>
      <article><span>04</span><h3>Where am I losing money?</h3><p>Find pricing gaps, excessive discounts, failed transactions, returns, or other unexpected losses.</p><div className="tinyEquation"><b>Expected</b><i>vs</i><b>Actual</b><i>→</i><strong>Gap</strong></div></article>
      <article className="linkedQuestion"><span>05</span><h3>Where should I invest next?</h3><p>Compare products, channels, customer groups, or locations to find the opportunities with the strongest potential.</p><div className="tinyPath"><b>Compare</b><i>→</i><b>Add context</b><i>→</i><strong>Better bet</strong></div></article>
      <article><span>06</span><h3>What am I wasting time doing manually?</h3><p>Identify recurring spreadsheet, reporting, and data tasks that could be automated.</p><div className="tinyEquation"><b>Manual</b><i>→</i><strong>Automated</strong></div></article>
    </div></div></section>

    <section className="offer"><div className="shell offerInner"><p className="kicker">A practical next step</p><h2>You already have data.<br />Let&apos;s figure out what it&apos;s telling you.</h2><p className="offerLead">I help growing teams connect the information they already collect, uncover opportunities, automate repetitive analysis, and understand what deserves their attention.</p><div className="offerList"><span>Opportunity analysis</span><span>Reporting &amp; dashboards</span><span>Process automation</span><span>Data cleanup &amp; modeling</span><span>Analytics advisory</span></div><p className="offerNote">Not sure what you need? Tell me what you&apos;re trying to understand.</p><a className="button light" href={consultation}>Explore what your data can answer <span>→</span></a></div></section>

    <footer className="footer shell"><div className="brand"><span className="logoMark" aria-hidden="true" /> Tanvi Kinkhabwala</div><p>Senior data analytics professional · New York</p><div><a href="mailto:tanvikinkhabwala@gmail.com">Email</a><a href="https://www.linkedin.com/in/tanvi-kinkhabwala" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </main>;
}
