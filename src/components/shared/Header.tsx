import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';
import { theme } from '../../styles/theme';

const pageNames: Record<string, string> = { '/': 'Visão geral', '/chat': 'Chat', '/terminal': 'Execuções', '/cron': 'Automações', '/memory': 'Memória', '/skills': 'Skills', '/plugins': 'Conexões', '/settings': 'Ajustes' };

/** Cabeçalho contextual; o título acompanha a rota ativa automaticamente. */
const Header = () => {
  const { pathname } = useLocation();
  return <Bar><Current><span>HERMES</span><i>/</i><strong>{pageNames[pathname] ?? 'Painel'}</strong></Current><Actions><Search><Icon name="search" size={15}/><span>Buscar ou executar...</span><kbd>⌘ K</kbd></Search><IconButton aria-label="Notificações"><Icon name="bell" size={17}/><b/></IconButton><Connection><span/><div><strong>Online</strong><small>latência 24 ms</small></div></Connection></Actions></Bar>;
};
const Bar=styled.header`
  height:68px;position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:rgba(9,11,12,.9);backdrop-filter:blur(16px);border-bottom:1px solid ${theme.colors.border};
  @media(max-width:760px){padding:0 18px;height:58px;}
`;
const Current=styled.div`
  display:flex;align-items:center;gap:10px;font-size:12px; span{color:${theme.colors.faint};font:500 10px var(--font-mono);letter-spacing:.12em;} i{color:${theme.colors.borderStrong};font-style:normal;} strong{font-size:12px;}
  @media(max-width:520px){span,i{display:none;}}
`;
const Actions=styled.div`display:flex;align-items:center;gap:10px;`;
const Search=styled.button`
  width:230px;height:34px;padding:0 9px;display:flex;align-items:center;gap:8px;background:${theme.colors.panel};border:1px solid ${theme.colors.border};border-radius:8px;color:${theme.colors.faint};font-size:11px;cursor:pointer;
  span{flex:1;text-align:left;} kbd{padding:2px 5px;background:${theme.colors.elevated};border:1px solid ${theme.colors.borderStrong};border-radius:4px;font:9px var(--font-mono);}
  @media(max-width:760px){display:none;}
`;
const IconButton=styled.button`
  width:34px;height:34px;position:relative;display:grid;place-items:center;background:${theme.colors.panel};border:1px solid ${theme.colors.border};border-radius:8px;color:${theme.colors.muted};cursor:pointer;
  b{position:absolute;right:7px;top:6px;width:5px;height:5px;background:${theme.colors.accent};border-radius:50%;}
`;
const Connection=styled.div`
  display:flex;align-items:center;gap:8px;padding-left:5px;>span{width:7px;height:7px;border-radius:50%;background:${theme.colors.success};box-shadow:0 0 8px ${theme.colors.success};} strong,small{display:block;}strong{font-size:10px;}small{color:${theme.colors.faint};font:9px var(--font-mono);margin-top:1px;}
  @media(max-width:520px){div{display:none;}}
`;
export default Header;
