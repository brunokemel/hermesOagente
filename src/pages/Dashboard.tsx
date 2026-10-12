import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/shared/Icon';
import { Badge, Button, Card, Page, PageHeader, theme } from '../styles/theme';

const activities = [
  { icon: 'terminal' as const, title: 'Relatório de vendas consolidado', meta: 'python reports/sales.py', time: 'há 8 min', status: 'Concluído' },
  { icon: 'brain' as const, title: 'Preferência salva na memória', meta: 'Tom de resposta: direto', time: 'há 34 min', status: 'Memória' },
  { icon: 'clock' as const, title: 'Backup diário executado', meta: 'automation.daily-backup', time: 'hoje, 08:00', status: 'Concluído' },
];

/** Visão geral prioriza o que importa: conexão, atividade e próximo comando. */
const Dashboard = () => (
  <Page>
    <PageHeader><div><div className="eyebrow">Painel operacional</div><h1>Bom dia, Kemel.</h1><p>Seu Hermes está pronto para receber instruções.</p></div><Link to="/chat"><Button $variant="primary"><Icon name="chat" size={16}/>Abrir conversa</Button></Link></PageHeader>
    <Hero>
      <HeroCopy><Badge $tone="success"><Dot/>agente online</Badge><h2>O que vamos<br/><em>resolver hoje?</em></h2><p>Converse com o Hermes, acompanhe cada etapa e mantenha o controle das ações executadas na sua máquina.</p><QuickPrompt to="/chat"><span>Enviar uma instrução ao Hermes...</span><b><Icon name="arrow" size={17}/></b></QuickPrompt><small><Icon name="wifi" size={13}/> Conexão local · canal web independente</small></HeroCopy>
      <Pulse aria-hidden="true"><Orbit $size={230}/><Orbit $size={160}/><Core><div>H</div></Core><Label $top="18%" $left="66%">MEMÓRIA</Label><Label $top="70%" $left="5%">SKILLS</Label><Label $top="77%" $left="72%">TOOLS</Label></Pulse>
    </Hero>
    <Metrics>
      <Metric><div><span>Sessão atual</span><Icon name="wifi"/></div><strong>02h 14m</strong><small><i/> estável</small></Metric>
      <Metric><div><span>Execuções hoje</span><Icon name="terminal"/></div><strong>24</strong><small>+18% vs. ontem</small></Metric>
      <Metric><div><span>Automações</span><Icon name="clock"/></div><strong>6</strong><small>próxima às 14:30</small></Metric>
      <Metric><div><span>Uso de contexto</span><Icon name="brain"/></div><strong>38%</strong><Bar><i/></Bar></Metric>
    </Metrics>
    <BottomGrid><ActivityCard><TitleRow><div><span>Fluxo recente</span><h3>Últimas atividades</h3></div><Link to="/terminal">Ver todas <Icon name="arrow" size={14}/></Link></TitleRow>{activities.map(a=><Activity key={a.title}><ActivityIcon><Icon name={a.icon}/></ActivityIcon><div><strong>{a.title}</strong><small>{a.meta}</small></div><time>{a.time}</time><Badge $tone={a.status==='Concluído'?'success':'neutral'}>{a.status}</Badge></Activity>)}</ActivityCard><SystemCard><TitleRow><div><span>Sistema</span><h3>Saúde do agente</h3></div><Badge $tone="success">normal</Badge></TitleRow><SystemRow><span>Hermes Core</span><b>operacional</b></SystemRow><SystemRow><span>API local</span><b>24 ms</b></SystemRow><SystemRow><span>Fila de tarefas</span><b>0 pendentes</b></SystemRow><SystemRow><span>Última sincronização</span><b>agora</b></SystemRow><Foot><Dot/> Todos os sistemas operacionais</Foot></SystemCard></BottomGrid>
  </Page>
);

const Hero=styled(Card)`min-height:310px;display:grid;grid-template-columns:1.2fr .8fr;overflow:hidden;background:linear-gradient(120deg,#121618 0%,#101315 60%,#17140e 100%);@media(max-width:800px){grid-template-columns:1fr;}`;
const HeroCopy=styled.div`padding:38px 42px;position:relative;z-index:2;h2{font-size:clamp(34px,4.4vw,58px);line-height:1.02;letter-spacing:-.055em;margin:22px 0 16px;}h2 em{font-style:normal;color:${theme.colors.accent};}p{max-width:570px;color:${theme.colors.muted};font-size:14px;line-height:1.65;} >small{display:flex;align-items:center;gap:6px;color:${theme.colors.faint};font:10px var(--font-mono);margin-top:11px;}@media(max-width:600px){padding:28px 22px;}`;
const Dot=styled.i`width:6px;height:6px;border-radius:50%;background:${theme.colors.success};display:inline-block;box-shadow:0 0 7px ${theme.colors.success};`;
const QuickPrompt=styled(Link)`max-width:540px;height:50px;margin-top:25px;padding-left:16px;display:flex;align-items:center;color:${theme.colors.faint};background:#0a0c0d;border:1px solid ${theme.colors.borderStrong};border-radius:11px;text-decoration:none;font-size:12px;span{flex:1;}b{width:36px;height:36px;margin-right:6px;display:grid;place-items:center;color:#16110a;background:${theme.colors.accent};border-radius:8px;}`;
const Pulse=styled.div`min-height:310px;position:relative;display:grid;place-items:center;background:radial-gradient(circle,rgba(255,184,77,.12),transparent 58%);@media(max-width:800px){display:none;}`;
const Orbit=styled.div<{$size:number}>`position:absolute;width:${p=>p.$size}px;height:${p=>p.$size}px;border:1px solid rgba(255,184,77,.13);border-radius:50%;&:after{content:'';position:absolute;top:20%;left:6%;width:5px;height:5px;border-radius:50%;background:${theme.colors.accent};box-shadow:0 0 12px ${theme.colors.accent};}`;
const Core=styled.div`width:92px;height:92px;display:grid;place-items:center;border:1px solid #5b4322;border-radius:28px;transform:rotate(45deg);background:#1e1a13;box-shadow:0 0 55px rgba(255,184,77,.15);div{transform:rotate(-45deg);color:${theme.colors.accent};font:500 36px var(--font-mono);}`;
const Label=styled.span<{$top:string;$left:string}>`position:absolute;top:${p=>p.$top};left:${p=>p.$left};color:${theme.colors.faint};font:9px var(--font-mono);letter-spacing:.13em;`;
const Metrics=styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:14px 0 26px;@media(max-width:1000px){grid-template-columns:repeat(2,1fr);}@media(max-width:520px){grid-template-columns:1fr;}`;
const Metric=styled(Card)`padding:18px 20px;div:first-child{display:flex;justify-content:space-between;color:${theme.colors.muted};font-size:11px;}div:first-child svg{color:${theme.colors.faint};}strong{display:block;font:500 25px var(--font-mono);margin:14px 0 6px;}small{color:${theme.colors.faint};font-size:10px;}small i{width:5px;height:5px;display:inline-block;border-radius:50%;background:${theme.colors.success};}`;
const Bar=styled.div`height:4px;background:${theme.colors.elevated};border-radius:4px;margin-top:11px;overflow:hidden;i{display:block;width:38%;height:100%;background:${theme.colors.accent};}`;
const BottomGrid=styled.div`display:grid;grid-template-columns:1.7fr 1fr;gap:14px;@media(max-width:950px){grid-template-columns:1fr;}`;
const ActivityCard=styled(Card)`padding:22px;`;
const SystemCard=styled(Card)`padding:22px;`;
const TitleRow=styled.div`display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;span{color:${theme.colors.faint};font:9px var(--font-mono);text-transform:uppercase;letter-spacing:.12em;}h3{margin:5px 0 0;font-size:16px;}a{display:flex;align-items:center;gap:5px;color:${theme.colors.accent};font-size:10px;text-decoration:none;}`;
const Activity=styled.div`min-height:64px;display:grid;grid-template-columns:38px 1fr auto auto;align-items:center;gap:12px;border-top:1px solid ${theme.colors.border};>div:nth-child(2){min-width:0;}strong,small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}strong{font-size:11px;}small,time{color:${theme.colors.faint};font:9px var(--font-mono);margin-top:4px;}@media(max-width:620px){grid-template-columns:38px 1fr auto;time{display:none;}}`;
const ActivityIcon=styled.div`width:32px;height:32px;display:grid;place-items:center;color:${theme.colors.accent};background:${theme.colors.accentSoft};border-radius:8px;`;
const SystemRow=styled.div`height:42px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid ${theme.colors.border};font-size:11px;color:${theme.colors.muted};b{color:${theme.colors.text};font:500 10px var(--font-mono);}`;
const Foot=styled.div`display:flex;align-items:center;gap:7px;padding-top:16px;color:${theme.colors.success};font-size:10px;`;
export default Dashboard;
