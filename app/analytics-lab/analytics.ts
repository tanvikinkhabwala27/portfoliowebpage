export type Row = Record<string, string>;
export type Dataset = { name: string; columns: string[]; rows: Row[] };
export type ColumnProfile = { name:string; type:string; missing:number; unique:number; whitespace:number; inconsistentCase:number; numericStrings:number; min?:number; max?:number; mean?:number; median?:number; dateMin?:string; dateMax?:string; identifier:boolean };
export type HealthFinding = { tone:'good'|'warning'; fact:string; consequence?:string };
export type HealthReport = { score:number; rows:number; columns:number; duplicates:number; profiles:ColumnProfile[]; findings:HealthFinding[] };
export type Relationship = { left:string; right:string; leftColumn:string; rightColumn:string; strength:'Strong'|'Likely'|'Unresolved'; overlap:number; consequence:string };

const clean = (v:string) => v.trim();
const norm = (v:string) => clean(v).toLowerCase().replace(/[^a-z0-9]/g,'');
const empty = (v:string) => !clean(v);
const numeric = (v:string) => /^[-+]?[$£€]?\d[\d,]*(\.\d+)?%?$/.test(clean(v));
const numberValue = (v:string) => Number(clean(v).replace(/[$£€,%]/g,''));
const dateValue = (v:string) => { const t=Date.parse(clean(v)); return Number.isNaN(t)?null:t; };

export function parseCSV(text:string,name='upload.csv'):Dataset {
  const rows:string[][]=[]; let row:string[]=[]; let cell=''; let quoted=false;
  for(let i=0;i<text.length;i++){ const c=text[i]; if(c==='"'){ if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted; } else if(c===','&&!quoted){row.push(cell);cell='';} else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(x=>x.length))rows.push(row);row=[];cell='';} else cell+=c; }
  row.push(cell); if(row.some(x=>x.length))rows.push(row);
  if(rows.length<2) throw new Error('This CSV needs a header row and at least one data row.');
  const columns=rows[0].map((h,i)=>clean(h)||`column_${i+1}`);
  return {name,columns,rows:rows.slice(1).map(r=>Object.fromEntries(columns.map((c,i)=>[c,r[i]??''])))};
}

export function profileDataset(data:Dataset):HealthReport {
  const duplicateKeys=new Set<string>(); let duplicates=0;
  for(const row of data.rows){const k=JSON.stringify(data.columns.map(c=>clean(row[c]??'')));if(duplicateKeys.has(k))duplicates++;else duplicateKeys.add(k);}
  const profiles=data.columns.map(name=>{
    const raw=data.rows.map(r=>r[name]??''); const values=raw.filter(v=>!empty(v)); const lower=new Map<string,Set<string>>();
    values.forEach(v=>{const k=clean(v).toLowerCase();if(!lower.has(k))lower.set(k,new Set());lower.get(k)!.add(v);});
    const nums=values.filter(numeric).map(numberValue).filter(Number.isFinite); const dates=values.map(dateValue).filter((x):x is number=>x!==null);
    let type='text'; if(values.length&&nums.length/values.length>.85) type='number'; else if(values.length&&dates.length/values.length>.85) type='date'; else if(new Set(values.map(clean)).size<=Math.max(20,values.length*.2)) type='category';
    const sorted=[...nums].sort((a,b)=>a-b); const unique=new Set(values.map(clean)).size;
    return {name,type,missing:raw.length-values.length,unique,whitespace:values.filter(v=>v!==clean(v)).length,inconsistentCase:[...lower.values()].filter(s=>s.size>1).length,numericStrings:type==='number'?values.filter(v=>typeof v==='string').length:0,min:nums.length?Math.min(...nums):undefined,max:nums.length?Math.max(...nums):undefined,mean:nums.length?nums.reduce((a,b)=>a+b,0)/nums.length:undefined,median:nums.length?(sorted[Math.floor((sorted.length-1)/2)]+sorted[Math.ceil((sorted.length-1)/2)])/2:undefined,dateMin:dates.length?new Date(Math.min(...dates)).toISOString().slice(0,10):undefined,dateMax:dates.length?new Date(Math.max(...dates)).toISOString().slice(0,10):undefined,identifier:unique/Math.max(values.length,1)>.92&&/(^id$|_id$|code|number|key)/i.test(name)};
  });
  const total=Math.max(data.rows.length,1); const missing=profiles.reduce((s,p)=>s+p.missing,0); const whitespace=profiles.reduce((s,p)=>s+p.whitespace,0); const inconsistent=profiles.reduce((s,p)=>s+p.inconsistentCase,0);
  const penalty=Math.min(65,Math.round(missing/(total*Math.max(data.columns.length,1))*45)+Math.round(duplicates/total*25)+Math.min(10,whitespace)+Math.min(10,inconsistent*2));
  const findings:HealthFinding[]=[];
  profiles.filter(p=>p.missing===0).slice(0,2).forEach(p=>findings.push({tone:'good',fact:`${p.name} is complete across all ${data.rows.length.toLocaleString()} rows.`}));
  profiles.filter(p=>p.type==='number'&&p.missing===0).slice(0,1).forEach(p=>findings.push({tone:'good',fact:`${p.name} is consistently numeric and ready to summarize.`}));
  profiles.filter(p=>p.missing>0).slice(0,2).forEach(p=>findings.push({tone:'warning',fact:`${p.name} is missing in ${p.missing} rows (${(p.missing/total*100).toFixed(1)}%).`,consequence:`Analyses grouped by ${p.name} may undercount or classify some activity as unknown.`}));
  if(duplicates) findings.push({tone:'warning',fact:`${duplicates} duplicate row${duplicates===1?' was':'s were'} detected.`,consequence:'Totals may be overstated if duplicated records represent the same activity.'});
  profiles.filter(p=>p.whitespace||p.inconsistentCase).slice(0,2).forEach(p=>findings.push({tone:'warning',fact:`${p.name} contains ${p.whitespace?'extra whitespace':''}${p.whitespace&&p.inconsistentCase?' and ':''}${p.inconsistentCase?'inconsistent capitalization':''}.`,consequence:`Comparisons may fragment one category into multiple labels.`}));
  return {score:100-penalty,rows:data.rows.length,columns:data.columns.length,duplicates,profiles,findings};
}

const roleRules:Record<string,string[]>={Orders:['order','transaction','revenue','quantity','sale'],Customers:['customer','client','email'],Products:['product','sku','category'],Costs:['cost','unit_cost','cogs'],Marketing:['campaign','spend','impression'],Inventory:['inventory','stock','on_hand'],Subscriptions:['subscription','plan','mrr','churn'],Services:['project','hours','billable','rate','invoice']};
export function inferRole(data:Dataset){ const names=data.columns.map(norm); let best='Business data',score=0; for(const [role,terms] of Object.entries(roleRules)){const s=terms.filter(t=>names.some(n=>n.includes(norm(t)))).length;if(s>score){score=s;best=role;}} return {role:best,confidence:score>=3?'High confidence':score>=1?'Likely':'Needs confirmation'} as const; }

export function findRelationships(sets:Dataset[]):Relationship[]{ const out:Relationship[]=[]; for(let a=0;a<sets.length;a++)for(let b=a+1;b<sets.length;b++){let best:{lc:string;rc:string;score:number;overlap:number}|null=null;for(const lc of sets[a].columns)for(const rc of sets[b].columns){const lv=new Set(sets[a].rows.map(r=>norm(r[lc]||'')).filter(Boolean));const rv=new Set(sets[b].rows.map(r=>norm(r[rc]||'')).filter(Boolean));if(!lv.size||!rv.size)continue;const matches=[...lv].filter(v=>rv.has(v)).length;const overlap=matches/Math.min(lv.size,rv.size);const nameScore=norm(lc)===norm(rc)?0.35:(norm(lc).includes(norm(rc))||norm(rc).includes(norm(lc))?0.18:0);const score=overlap+nameScore;if(!best||score>best.score)best={lc,rc,score,overlap};}if(best&&best.overlap>=.2){const strength=best.score>=1?'Strong':best.score>=.55?'Likely':'Unresolved';const unmatched=Math.round((1-best.overlap)*100);out.push({left:sets[a].name,right:sets[b].name,leftColumn:best.lc,rightColumn:best.rc,strength,overlap:best.overlap,consequence:unmatched===0?'All observed key values matched across these two sources.':`${unmatched}% of distinct key values are unmatched; related analysis may classify some records as unknown.`});}}return out.sort((x,y)=>y.overlap-x.overlap); }

export type MetricDefinition={id:string;name:string;archetype:string;description:string;required:string[][];optional:string[][];missing:string};
export const metricDefinitions:MetricDefinition[]=[
  {id:'revenue',name:'Revenue trends',archetype:'commerce',description:'Track sales over time.',required:[['revenue','sales','amount'],['date','order_date']],optional:[],missing:'Revenue and a usable date are required.'},
  {id:'product',name:'Product performance',archetype:'commerce',description:'Compare demand and sales by product.',required:[['product_id','product','sku'],['revenue','sales','amount']],optional:[['quantity']],missing:'Product identifiers and revenue are required.'},
  {id:'margin',name:'Product profitability',archetype:'commerce',description:'Compare revenue with product costs.',required:[['revenue','sales','amount'],['cost','unit_cost','cogs']],optional:[['returns'],['discount']],missing:'Product or transaction cost data is required to calculate margin.'},
  {id:'repeat',name:'Repeat customer behavior',archetype:'commerce',description:'Measure recurring customer activity.',required:[['customer_id','client_code','customer'],['order_id','transaction_id'],['date','order_date']],optional:[],missing:'Customer, order, and date fields are required.'},
  {id:'channel',name:'Sales-channel performance',archetype:'commerce',description:'Compare revenue across channels.',required:[['channel'],['revenue','sales','amount']],optional:[['cost']],missing:'Channel and revenue fields are required.'},
  {id:'marketing',name:'Marketing efficiency',archetype:'commerce',description:'Connect spend to resulting activity.',required:[['campaign','marketing'],['spend'],['order_id','customer_id','attribution']],optional:[],missing:'Marketing spend and a reliable order/customer attribution key are required.'},
  {id:'serviceRevenue',name:'Revenue by client',archetype:'services',description:'Compare client contribution.',required:[['client','customer'],['revenue','invoice','amount']],optional:[],missing:'Client and revenue/invoice fields are required.'},
  {id:'utilization',name:'Utilization',archetype:'services',description:'Compare billable with available hours.',required:[['hours'],['billable']],optional:[['employee']],missing:'Hours and billable status are required.'},
  {id:'projectProfit',name:'Project profitability',archetype:'services',description:'Compare project revenue and cost.',required:[['project'],['revenue','invoice'],['cost','rate']],optional:[],missing:'Project, revenue, and cost fields are required.'},
  {id:'recurring',name:'Recurring revenue',archetype:'subscription',description:'Track recurring subscription value.',required:[['mrr','arr','recurring_revenue'],['date']],optional:[['plan']],missing:'Recurring revenue and date fields are required.'},
  {id:'churn',name:'Churn and retention',archetype:'subscription',description:'Track cancellations and retained customers.',required:[['customer','account'],['cancel','churn','status'],['date']],optional:[['plan']],missing:'Customer, status/cancellation, and date fields are required.'},
  {id:'arpc',name:'Average revenue per customer',archetype:'subscription',description:'Understand customer revenue mix.',required:[['customer','account'],['revenue','mrr','arr']],optional:[],missing:'Customer and revenue fields are required.'}
];
export function metricReadiness(sets:Dataset[],archetype:string){const fields=sets.flatMap(s=>s.columns.map(norm));return metricDefinitions.filter(m=>m.archetype===archetype).map(m=>{const coverage=m.required.map(group=>group.some(x=>fields.some(f=>f.includes(norm(x)))));const present=coverage.filter(Boolean).length;return {...m,status:present===coverage.length?'ready':present>=Math.max(1,coverage.length-1)?'caution':'unavailable',reason:present===coverage.length?`Required fields were detected across the provided data.`:m.missing};});}
