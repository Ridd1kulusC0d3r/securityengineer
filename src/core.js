export const key='securityengineer:v1';
export function cleanState(value,modules,labs){
 const data=value&&typeof value==='object'?value:{};
 return {completed:Array.isArray(data.completed)?[...new Set(data.completed.filter(x=>modules.some(m=>m.id===x)))]:[],notes:Object.fromEntries(labs.map(l=>[l.id,typeof data.notes?.[l.id]==='string'?data.notes[l.id].slice(0,8000):''])),answers:Object.fromEntries(labs.filter(l=>Number.isInteger(data.answers?.[l.id])&&data.answers[l.id]>=0&&data.answers[l.id]<l.options.length).map(l=>[l.id,data.answers[l.id]]))};
}
export function grade(lab,answer){return Number.isInteger(answer)&&answer===lab.answer;}
export function selectResources(rows,query='',kind='Todos'){return rows.filter(r=>(kind==='Todos'||r.kind===kind)&&`${r.name} ${r.area} ${r.description}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()));}
