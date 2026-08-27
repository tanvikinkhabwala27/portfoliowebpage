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
      <header className="walkHeader"><div><span className="projectType">02 · Opportunity analysis</span><h3>Found where the business should focus next</h3><p className="walkSubhead">From sales data to a more complete picture of where growth could actually create value.</p></div><div className="question"><span>Business question</span><strong>Which product should we invest in?</strong></div></header>
      <div className="discoveryScale"><span><b>$4.8M</b> revenue</span><span><b>18</b> products</span><span><b>3</b> channels</span><span><b>2,400</b> customers</span></div>
      <div className="discoveryStory">
        <section className="revenueAnswer"><StepLabel index={1}>Revenue</StepLabel><div className="revenueBars">{[['A','$1.2M',100],['B','$850K',71],['C','$620K',52],['D','$470K',39]].map(([l,v,w])=><div className={l==='A'?'winner':''} key={l}><span>Product {l}</span><i style={{'--bar':`${w}%`} as React.CSSProperties}/><b>{v}</b></div>)}</div><p>Revenue says: <strong>invest in Product A.</strong></p></section>
        <section className="contextBridge"><StepLabel index={2}>Add context</StepLabel><div><span>Sales</span><b>+</b><span>Costs</span><b>+</b><span>Customer behavior</span><b>+</b><span>Sales channel</span></div><p>The biggest number is not always the biggest opportunity.</p></section>
        <section className="productCompare"><StepLabel index={3}>Compare</StepLabel><div className="productColumns"><article><span>Product A</span><strong>$1.2M</strong><small>Revenue</small><b>8% margin</b><b>12% repeat</b></article><article className="betterProduct"><span>Product B</span><strong>$850K</strong><small>Revenue</small><b>31% margin</b><b>46% repeat</b></article></div></section>
        <section className="channelDiscovery"><StepLabel index={4}>Discover</StepLabel><strong>Product B</strong><div><span className="best"><b>Direct</b><i>Strongest margin</i><em>High repeat</em></span><span><b>Marketplace</b><i>Moderate margin</i><em>Moderate repeat</em></span><span><b>Wholesale</b><i>Lower margin</i><em>Lower repeat</em></span></div></section>
        <aside className="discoveryConclusion"><span>Opportunity found</span><strong>Product B<br />· Direct channel</strong><p>Strong margin + strong repeat behavior + room to grow</p><div><b>Recommended next step</b>Prioritize Product B&apos;s direct channel before increasing investment in the highest-revenue product.</div></aside>
      </div>
      <p className="syntheticNote">Illustrative analysis using synthetic data.</p>
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
  </section>;
}
