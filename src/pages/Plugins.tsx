import Icon from '../components/shared/Icon';
import { DataCard, DataHeader, DataRow, NameCell } from '../components/shared/DataTable';
import { Badge, Button, Page, PageHeader } from '../styles/theme';

const connections=[{name:'API Hermes local',desc:'Canal principal deste painel',status:'online',type:'HTTP + WebSocket'},{name:'WhatsApp',desc:'Canal externo independente',status:'isolado',type:'Sessão separada'},{name:'GitHub',desc:'Issues, repositórios e pull requests',status:'offline',type:'OAuth'},{name:'Google Drive',desc:'Leitura e organização de arquivos',status:'offline',type:'OAuth'}];
/** Central deixa explícito quais canais compartilham — ou não — o mesmo contexto. */
const Plugins=()=> <Page><PageHeader><div><div className="eyebrow">Integrações</div><h1>Conexões</h1><p>Controle os serviços que o Hermes pode acessar com sua autorização.</p></div><Button><Icon name="plus" size={16}/>Adicionar conexão</Button></PageHeader><DataCard><DataHeader><h3>Serviços e canais</h3><span>2 CONFIGURADOS</span></DataHeader>{connections.map(item=><DataRow key={item.name}><NameCell icon={<Icon name="plug" size={16}/>}><strong>{item.name}</strong><small>{item.desc}</small></NameCell><span className="optional muted">{item.type}</span><Badge $tone={item.status==='online'?'success':'neutral'}>{item.status}</Badge><Button>{item.status==='offline'?'Conectar':'Configurar'}</Button></DataRow>)}</DataCard></Page>;
export default Plugins;
