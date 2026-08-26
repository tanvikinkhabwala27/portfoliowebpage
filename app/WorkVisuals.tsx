const workflowOne = ['Raw data', 'Clean + transform', 'Validate', 'Output', 'Impact'];

function StepLabel({ index, children }: { index: number; children: React.ReactNode }) {
  return <div className="stepLabel"><span>{String(index).padStart(2, '0')}</span><strong>{children}</strong></div>;
}

function Arrow() { return <span className="processArrow" aria-hidden="true">→</span>; }

export default function WorkVisuals() {
  return <section className="visualWork" aria-labelledby="visual-work-title">
    <div className="shell visualIntro">
      <p className="kicker">How I turn data into decisions</p>
      <h2 id="visual-work-title">A look at my end-to-end process across different analytics problems.</h2>
      <p>Three compact walkthroughs showing how raw information becomes structure, insight, and an actionable next step.</p>
    </div>

    <article className="walkthrough shell automationStory">
      <header className="walkHeader">
        <div><span className="projectType">01 · Automation &amp; data quality</span><h3>Automated a critical validation process</h3></div>
        <div className="walkMetric"><strong>80 → 2</strong><span>hours</span></div>
      </header>
      <div className="automationFlow" aria-label={workflowOne.join(' to ')}>
        <div className="flowStep sourcesStep"><StepLabel index={1}>Raw data</StepLabel><div className="sourceStack"><span>CSV</span><span>XLS</span><span>DB</span></div><small>Multiple source files</small></div>
        <Arrow />
        <div className="flowStep transformStep"><StepLabel index={2}>Clean + transform</StepLabel><div className="transformRows"><span>Standardize</span><span>Join + match</span><span>Quality checks</span></div><small>SQL · Python · Alteryx</small></div>
        <Arrow />
        <div className="flowStep validateStep"><StepLabel index={3}>Validate</StepLabel><div className="donut" aria-label="Illustrative: 98.7 percent matched"><span><strong>98.7%</strong>matched</span></div><small>1.3% exceptions</small></div>
        <Arrow />
        <div className="flowStep outputStep"><StepLabel index={4}>Output</StepLabel><div className="miniTable"><div><b>Status</b><b>Share</b></div><div><span>Match</span><strong>98.7%</strong></div><div><span>Review</span><strong>1.1%</strong></div><div><span>Missing</span><strong>0.2%</strong></div></div><small>Trusted validation view</small></div>
        <Arrow />
        <div className="flowStep impactStep"><StepLabel index={5}>Impact</StepLabel><strong className="timeSaved">~98%</strong><span>time saved</span><small>~80 hours → ~2 hours</small></div>
      </div>
      <p className="syntheticNote">Validation distribution is illustrative and uses synthetic data.</p>
    </article>

    <article className="walkthrough shell analysisStory">
      <header className="walkHeader">
        <div><span className="projectType">02 · Operational analytics</span><h3>Turned operational data into clear priorities</h3></div>
        <div className="question"><span>Business question</span><strong>Where is the workflow getting stuck—and where should the team focus first?</strong></div>
      </header>
      <div className="analysisCanvas">
        <div className="recordsPanel"><StepLabel index={1}>Operational data</StepLabel><strong className="bigSynthetic">12K+</strong><span>synthetic service records</span><div className="fieldPills"><i>Stage</i><i>Cycle time</i><i>Category</i><i>Priority</i></div></div>
        <div className="bottleneckPanel"><StepLabel index={2}>Analyze by stage</StepLabel><div className="barRows"><div><span>Intake</span><i style={{'--bar':'32%'} as React.CSSProperties}/><b>1.6d</b></div><div className="hot"><span>Review</span><i style={{'--bar':'96%'} as React.CSSProperties}/><b>4.8d</b></div><div><span>Approval</span><i style={{'--bar':'55%'} as React.CSSProperties}/><b>2.7d</b></div><div><span>Complete</span><i style={{'--bar':'24%'} as React.CSSProperties}/><b>1.2d</b></div></div><p><strong>4.8 days</strong> average cycle time</p></div>
        <div className="funnelPanel"><StepLabel index={3}>Prioritize</StepLabel><div className="funnel"><div><strong>12,480</strong><span>total cases</span></div><b>↓</b><div><strong>1,340</strong><span>above target</span></div><b>↓</b><div><strong>286</strong><span>high priority</span></div></div></div>
        <div className="actionPanel"><StepLabel index={4}>Action</StepLabel><span>Priority area</span><strong>Review stage</strong><p><b>286</b> cases prioritized for action</p></div>
      </div>
      <p className="syntheticNote">Illustrative analysis using synthetic data.</p>
    </article>

    <article className="walkthrough shell biStory">
      <header className="walkHeader">
        <div><span className="projectType">03 · Business intelligence</span><h3>Made operational data decision-ready</h3></div>
        <div className="walkMetric"><strong>8M+</strong><span>records</span></div>
      </header>
      <div className="biFlow">
        <div className="biPrep">
          <div className="biStage"><StepLabel index={1}>Data sources</StepLabel><div className="dbSources"><span>OPS</span><span>FIN</span><span>CRM</span></div><small>Multiple operational sources</small></div>
          <Arrow />
          <div className="biStage"><StepLabel index={2}>SQL + data model</StepLabel><div className="modelVisual"><span>FACT</span><i/><span>KPI</span><i/><span>DIM</span></div><small>Clean · joined · structured</small></div>
          <Arrow />
          <div className="biStage"><StepLabel index={3}>KPI layer</StepLabel><div className="kpiList"><span>Volume</span><span>Rate</span><span>Trend</span><span>Opportunity</span></div><small>One trusted definition</small></div>
        </div>
        <div className="dashboard" aria-label="Illustrative executive dashboard using synthetic data">
          <div className="dashboardTop"><div><span>Executive overview</span><small>Illustrative dashboard · synthetic data</small></div><b>Q4</b></div>
          <div className="dashboardKpis"><div><span>Total volume</span><strong>24.8K</strong><small>↑ 8.4%</small></div><div><span>Performance</span><strong>94.2%</strong><small>↑ 2.1 pts</small></div><div><span>YoY change</span><strong>+12.6%</strong><small>on target</small></div><div><span>Opportunity</span><strong>$1.2M</strong><small>modeled</small></div></div>
          <div className="dashboardCharts"><div className="trendChart"><span>Performance trend</span><div className="trendBars">{[38,52,46,66,72,64,84,78,92].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="axis"><small>Jan</small><small>Sep</small></div></div><div className="mixChart"><span>Category mix</span><div><i style={{'--size':'72%'} as React.CSSProperties}/><i style={{'--size':'54%'} as React.CSSProperties}/><i style={{'--size':'36%'} as React.CSSProperties}/></div><small>A&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;C</small></div><div className="compareChart"><span>Actual vs target</span><div><i/><b/></div><strong>94.2%</strong><small>Target 92%</small></div></div>
        </div>
        <div className="decisionBadge"><span>Decision</span><strong>Faster, more confident decisions</strong><small>Millions of records → one clear view</small></div>
      </div>
    </article>

    <div className="labTeaser shell" id="analytics-lab"><div><p className="kicker">Analytics Lab</p><h2>Interested in seeing more?</h2><p>Explore the Analytics Lab to interact with dashboards and see more examples of my work in action.</p></div><a className="button" href="/analytics-lab">Explore Analytics Lab <span>→</span></a></div>
  </section>;
}
