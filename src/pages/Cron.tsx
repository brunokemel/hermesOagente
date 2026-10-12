import { useState } from 'react';
import Icon from '../components/shared/Icon';
import { DataCard, DataHeader, DataRow, NameCell } from '../components/shared/DataTable';
import { Button, Page, PageHeader } from '../styles/theme';

const initial=[{id:1,name:'Backup diário do workspace',schedule:'Todos os dias · 08:00',next:'amanhã, 08:00',active:true},{id:2,name:'Resumo de pedidos pendentes',schedule:'Seg–Sex · 14:30',next:'hoje, 14:30',active:true},{id:3,name:'Limpeza de arquivos temporários',schedule:'Domingos · 03:00',next:'18 out, 03:00',active:false}];
/** Automações locais podem ser pausadas sem remover sua configuração. */
const Cron=()=>{const [jobs,setJobs]=useState(initial);return <Page><PageHeader><div><div className="eyebrow">Agendamento local</div><h1>Automações</h1><p>Rotinas que o Hermes executa quando sua máquina está ligada.</p></div><Button $variant="primary"><Icon name="plus" size={16}/>Nova automação</Button></PageHeader><DataCard><DataHeader><h3>Rotinas configuradas</h3><span>{jobs.filter(j=>j.active).length} ATIVAS</span></DataHeader>{jobs.map(job=><DataRow key={job.id}><NameCell icon={<Icon name="clock" size={16}/>}><strong>{job.name}</strong><small>{job.schedule}</small></NameCell><span className="optional muted">Próxima: {job.next}</span><span className="optional muted">Local</span><Button onClick={()=>setJobs(all=>all.map(item=>item.id===job.id?{...item,active:!item.active}:item))}><Icon name={job.active?'pause':'check'} size={14}/>{job.active?'Pausar':'Ativar'}</Button></DataRow>)}</DataCard></Page>};
export default Cron;
