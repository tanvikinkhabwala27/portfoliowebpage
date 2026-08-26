function StepLabel({ index, children }: { index: number; children: React.ReactNode }) {
  return <div className="stepLabel"><span>{String(index).padStart(2, '0')}</span><strong>{children}</strong></div>;
}
function Arrow() { return <span className="processArrow" aria-hidden="true">→</span>; }
export default function WorkVisuals() {
  return <section className="visualWork" aria-labelledby="visual-work-title">
    <div className="shell visualIntro">
      <p className="kicker">How I turn data into decisions</p>
      <div className="workFramework" aria-label="Automate, uncover, enable"><strong>Automate</strong><span>·</span><strong>Uncover</strong><span>·</span><strong>Enable</strong></div>
      <h2 id="visual-work-title">I start with the business question,<br />then use data to get to the decision.</h2>
      <p>Process automation · Opportunity analysis · Decision intelligence</p>
    </div>

    <article className="walkthrough shell automationStory">
      <header className="walkHeader"><div><span className="projectType">01 · Process automation</span><h3>Automated a critical validation process</h3></div><div className="question lightQuestion"><span>Business question</span><strong>Why are we spending so much time doing this manually?</strong></div></header>
      <div className="beforeAfterFlow" aria-label="Before, automation, and after workflow">
        <section className="statePanel beforePanel"><StepLabel index={1}>Before</StepLabel><div className="sourceStack"><span>CSV</span><span>XLS</span><span>DB</span><span>SYS</span></div><div className="manualSteps"><span>Manual data preparation</span><span>Manual reconciliation</span><span>Manual validation</span><span>Manual output preparation</span></div><div className="effortMetric"><strong>~80</strong><small>hours every cycle</small></div></section>
        <Arrow />
        <section className="automationCore"><span className="coreEyebrow">What I built</span><strong>Automated<br />workflow</strong><small>SQL · Python · Alteryx</small><div className="automationTasks"><span>Standardize</span><span>Combine</span><span>Reconcile</span><span>Validate</span><span>Quality checks</span><span>Flag exceptions</span></div><b>Produce trusted output</b></section>
        <Arrow />
        <section className="statePanel afterPanel"><StepLabel index={3}>After</StepLabel><div className="afterSteps"><span>Automated validation</span><span>Exceptions surfaced</span><span>Human reviews exceptions only</span><span>Trusted output</span></div><div className="effortMetric"><strong>~2</strong><small>hours</small></div><p><b>~98% less</b> manual effort</p></section>
      </div>
    </article>

    <article className="walkthrough shell investigationStory opportunityStory">
      <header className="walkHeader"><div><span className="projectType">02 · Opportunity analysis</span><h3>Found where the business should focus first</h3><p className="walkSubhead">From a broad dataset to a quantified, actionable opportunity.</p></div><div className="question"><span>Business question</span><strong>Where is the biggest opportunity?</strong></div></header>
      <div className="opportunityCanvas">
        <section className="opData"><StepLabel index={1}>Large dataset</StepLabel><strong>12M+</strong><span>transactions</span><div className="dataFields"><i>Customer</i><i>Product</i><i>Region</i><i>Channel</i><i>Expected</i><i>Actual</i></div></section>
        <section className="opGap"><StepLabel index={2}>Quantify</StepLabel><div><span>Expected<strong>$42.0M</strong></span><span>Actual<strong>$39.6M</strong></span></div><p><small>Opportunity gap</small><strong>$2.4M</strong></p></section>
        <section className="opCompare"><StepLabel index={3}>Compare</StepLabel><h4>By product</h4><div className="opBars">{[['A','.4M',33],['B','1.2M',100],['C','.3M',25],['D','.5M',42]].map(([l,v,w])=><div className={l==='B'?'signal':''} key={l}><span>{l}</span><i style={{'--bar':`${w}%`} as React.CSSProperties}/><b>${v}</b></div>)}</div><h4>By segment</h4><div className="segmentValues"><span>Enterprise <b>$1.1M</b></span><span>Mid-market <b>$0.8M</b></span><span>SMB <b>$0.5M</b></span></div></section>
        <section className="opDrill"><StepLabel index={4}>Drill deeper</StepLabel><div className="drillPath"><span>Product B</span><b>↓</b><span>Enterprise</span><b>↓</b><span>East region</span></div><div className="variance"><span>Expected<b>$125</b></span><span>Actual<b>$109</b></span><strong>−$16 variance</strong></div></section>
        <aside className="opPriority"><span>Concentrated opportunity</span><strong>$1.1M</strong><small>Synthetic estimate</small><div><b>Priority</b>Investigate the Product B pricing discrepancy within Enterprise / East first.<em>Highest potential impact</em></div></aside>
      </div>
      <p className="syntheticNote">Illustrative opportunity analysis using synthetic data.</p>
    </article>

    <article className="walkthrough shell biStory">
      <header className="walkHeader"><div><span className="projectType">03 · Decision intelligence</span><h3>Made complex data decision-ready</h3></div><div className="question lightQuestion"><span>Business question</span><strong>What does leadership actually need to know?</strong></div></header>
      <div className="complexityLead"><strong>8M+</strong><span>records</span><p>An executive does not need 8 million rows.</p><div>Transactions · dates · categories · locations · statuses · amounts · multiple sources</div></div>
      <div className="clarityFrame"><strong>Complexity</strong><span>→</span><strong>Clarity</strong><span>→</span><strong>Decision</strong></div>
      <div className="beforeAfterStrip"><span><b>Before</b> Fragmented sources · inconsistent definitions · difficult comparison</span><span><b>After</b> One model · trusted KPIs · one executive view</span></div>
      <div className="biFlow">
        <div className="biPrep"><div className="biStage"><StepLabel index={1}>Data sources</StepLabel><div className="dbSources"><span>OPS</span><span>FIN</span><span>CRM</span></div><small>Multiple operational sources</small></div><Arrow /><div className="biStage"><StepLabel index={2}>SQL + data model</StepLabel><div className="modelVisual"><span>FACT</span><i/><span>KPI</span><i/><span>DIM</span></div><small>Clean · joined · structured</small></div><Arrow /><div className="biStage"><StepLabel index={3}>KPI layer</StepLabel><div className="kpiList"><span>Volume</span><span>Rate</span><span>Trend</span><span>Opportunity</span></div><small>One trusted definition</small></div></div>
        <div className="dashboard" aria-label="Illustrative executive dashboard using synthetic data"><div className="dashboardTop"><div><span>Executive overview</span><small>Illustrative dashboard · synthetic data</small></div><b>Q4</b></div><div className="dashboardKpis"><div><span>Total volume</span><strong>24.8K</strong><small>↑ 8.4%</small></div><div><span>Performance</span><strong>94.2%</strong><small>↑ 2.1 pts</small></div><div><span>YoY change</span><strong>+12.6%</strong><small>on target</small></div><div><span>Opportunity</span><strong>$1.2M</strong><small>modeled</small></div></div><div className="dashboardCharts"><div className="trendChart"><span>Performance trend</span><div className="trendBars">{[38,52,46,66,72,64,84,78,92].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="axis"><small>Jan</small><small>Sep</small></div></div><div className="mixChart"><span>Category mix</span><div><i style={{'--size':'72%'} as React.CSSProperties}/><i style={{'--size':'54%'} as React.CSSProperties}/><i style={{'--size':'36%'} as React.CSSProperties}/></div><small>A&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;C</small></div><div className="compareChart"><span>Actual vs target</span><div><i/><b/></div><strong>94.2%</strong><small>Target 92%</small></div></div></div>
        <div className="decisionBadge"><span>Clear decision support</span><strong>I turn millions of rows into something leadership can actually use.</strong><small>8M+ records → 12 trusted KPIs → 4 attention areas → 1 executive view</small></div>
      </div>
      <p className="syntheticNote">Dashboard values are illustrative and use synthetic data.</p>
    </article>
    <div className="labTeaser shell" id="analytics-lab"><div><p className="kicker">Analytics Lab</p><h2>Interested in seeing more?</h2><p>Explore the Analytics Lab to interact with dashboards and see more examples of my work in action.</p></div><a className="button" href="/analytics-lab">Explore Analytics Lab <span>→</span></a></div>
  </section>;
}
