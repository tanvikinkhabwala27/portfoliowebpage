function StepLabel({ index, children }: { index: number; children: React.ReactNode }) {
  return <div className="stepLabel"><span>{String(index).padStart(2, '0')}</span><strong>{children}</strong></div>;
}
function Arrow() { return <span className="processArrow" aria-hidden="true">→</span>; }
const months = ['Jan','Feb','Mar','Apr','May','Jun'];
const performance = [94,94,93,92,89,87];

export default function WorkVisuals() {
  return <section className="visualWork" aria-labelledby="visual-work-title">
    <div className="shell visualIntro">
      <p className="kicker">How I turn data into decisions</p>
      <div className="workFramework" aria-label="Automate, investigate, communicate"><strong>Automate</strong><span>→</span><strong>Investigate</strong><span>→</span><strong>Communicate</strong></div>
      <h2 id="visual-work-title">Three ways I make<br />complex data useful.</h2>
      <p>Eliminate repetitive work, find the real drivers, and translate complexity into clear decision support.</p>
    </div>

    <article className="walkthrough shell automationStory">
      <header className="walkHeader"><div><span className="projectType">01 · Automate</span><h3>Automated a critical validation process</h3></div><div className="walkMetric"><strong>80 → 2</strong><span>hours</span></div></header>
      <div className="beforeAfterFlow" aria-label="Before, automation, and after workflow">
        <section className="statePanel beforePanel"><StepLabel index={1}>Before</StepLabel><div className="sourceStack"><span>CSV</span><span>XLS</span><span>DB</span></div><div className="manualSteps"><span>Manual reconciliation</span><span>Manual QA</span><span>Final output</span></div><div className="effortMetric"><strong>~80</strong><small>hours of manual effort</small></div></section>
        <Arrow />
        <section className="automationCore"><span className="coreEyebrow">What I built</span><strong>Automated<br />workflow</strong><small>Python · Alteryx · SQL</small><div className="automationTasks"><span>Standardize</span><span>Match</span><span>Validate</span><span>Flag exceptions</span></div><b>Automated output</b></section>
        <Arrow />
        <section className="statePanel afterPanel"><StepLabel index={3}>After</StepLabel><div className="afterSteps"><span>Automated validation</span><span>Exceptions surfaced</span><span>Human reviews exceptions only</span><span>Trusted output</span></div><div className="effortMetric"><strong>~2</strong><small>hours</small></div><p><b>~98% less</b> manual effort</p></section>
      </div>
    </article>

    <article className="walkthrough shell investigationStory">
      <header className="walkHeader"><div><span className="projectType">02 · Investigate</span><h3>Found what was really driving the decline</h3></div><div className="question"><span>Analytical investigation</span><strong>What changed—and where should the team look first?</strong></div></header>
      <div className="investigationCanvas">
        <section className="trendInvestigation"><StepLabel index={1}>Spot the signal</StepLabel><div className="trendSummary"><strong>94%</strong><span>→</span><strong>87%</strong></div><div className="declineChart" aria-label="Illustrative performance decline from 94 percent in January to 87 percent in June">{performance.map((v,i)=><div key={months[i]}><i style={{height:`${(v-80)*5 + 18}%`}}/><b>{v}%</b><small>{months[i]}</small></div>)}</div></section>
        <section className="dimensionInvestigation"><StepLabel index={2}>Test dimensions</StepLabel><div className="dimensionRows"><div><span>Region</span><b>Stable</b></div><div><span>Channel</span><b>Stable</b></div><div><span>Customer segment</span><b>Moderate</b></div><div className="signal"><span>Product category</span><b>Significant ↗</b></div></div></section>
        <section className="categoryInvestigation"><StepLabel index={3}>Follow the anomaly</StepLabel><div className="categoryBars">{[['A',93],['B',91],['C',72],['D',90]].map(([label,value])=><div className={label==='C'?'signal':''} key={label}><span>{label}</span><i style={{'--bar':`${value}%`} as React.CSSProperties}/><b>{value}%</b></div>)}</div><div className="drillDown"><span>Category C</span><div><b>Existing customers</b><strong>88%</strong></div><div className="signal"><b>New customers</b><strong>61%</strong></div></div></section>
        <aside className="investigationFinding"><span>Primary driver</span><strong>Category C · New customers</strong><p><b>61%</b> vs portfolio average of 87%</p><div><small>Recommended next step</small>Investigate the Category C onboarding and process experience for new customers before making broad changes.</div></aside>
      </div>
      <p className="syntheticNote">Illustrative investigation using synthetic data.</p>
    </article>

    <article className="walkthrough shell biStory">
      <header className="walkHeader"><div><span className="projectType">03 · Communicate</span><h3>Made operational data decision-ready</h3></div><div className="walkMetric"><strong>8M+</strong><span>records</span></div></header>
      <div className="clarityFrame"><strong>Complexity</strong><span>→</span><strong>Clarity</strong><span>→</span><strong>Decision</strong></div>
      <div className="beforeAfterStrip"><span><b>Before</b> Fragmented sources · inconsistent definitions · difficult comparison</span><span><b>After</b> One model · trusted KPIs · one executive view</span></div>
      <div className="biFlow">
        <div className="biPrep"><div className="biStage"><StepLabel index={1}>Data sources</StepLabel><div className="dbSources"><span>OPS</span><span>FIN</span><span>CRM</span></div><small>Multiple operational sources</small></div><Arrow /><div className="biStage"><StepLabel index={2}>SQL + data model</StepLabel><div className="modelVisual"><span>FACT</span><i/><span>KPI</span><i/><span>DIM</span></div><small>Clean · joined · structured</small></div><Arrow /><div className="biStage"><StepLabel index={3}>KPI layer</StepLabel><div className="kpiList"><span>Volume</span><span>Rate</span><span>Trend</span><span>Opportunity</span></div><small>One trusted definition</small></div></div>
        <div className="dashboard" aria-label="Illustrative executive dashboard using synthetic data"><div className="dashboardTop"><div><span>Executive overview</span><small>Illustrative dashboard · synthetic data</small></div><b>Q4</b></div><div className="dashboardKpis"><div><span>Total volume</span><strong>24.8K</strong><small>↑ 8.4%</small></div><div><span>Performance</span><strong>94.2%</strong><small>↑ 2.1 pts</small></div><div><span>YoY change</span><strong>+12.6%</strong><small>on target</small></div><div><span>Opportunity</span><strong>$1.2M</strong><small>modeled</small></div></div><div className="dashboardCharts"><div className="trendChart"><span>Performance trend</span><div className="trendBars">{[38,52,46,66,72,64,84,78,92].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="axis"><small>Jan</small><small>Sep</small></div></div><div className="mixChart"><span>Category mix</span><div><i style={{'--size':'72%'} as React.CSSProperties}/><i style={{'--size':'54%'} as React.CSSProperties}/><i style={{'--size':'36%'} as React.CSSProperties}/></div><small>A&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;C</small></div><div className="compareChart"><span>Actual vs target</span><div><i/><b/></div><strong>94.2%</strong><small>Target 92%</small></div></div></div>
        <div className="decisionBadge"><span>Decision support</span><strong>One clear view for faster, more confident decisions</strong><small>Millions of records → trusted KPIs</small></div>
      </div>
      <p className="syntheticNote">Dashboard values are illustrative and use synthetic data.</p>
    </article>
    <div className="labTeaser shell" id="analytics-lab"><div><p className="kicker">Analytics Lab</p><h2>Interested in seeing more?</h2><p>Explore the Analytics Lab to interact with dashboards and see more examples of my work in action.</p></div><a className="button" href="/analytics-lab">Explore Analytics Lab <span>→</span></a></div>
  </section>;
}
