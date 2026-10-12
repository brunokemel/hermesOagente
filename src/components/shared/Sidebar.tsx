import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon, { type IconName } from './Icon';
import { theme } from '../../styles/theme';
import hermesCompleteLogo from '../../assets/hermes-completo.png';

type MenuItem = { name: string; path: string; icon: IconName; end?: boolean };

/** Lista única da navegação. Edite aqui para incluir, remover ou reordenar abas. */
const menuItems: MenuItem[] = [
  { name: 'Visão geral', path: '/', icon: 'grid', end: true },
  { name: 'Chat', path: '/chat', icon: 'chat' },
  { name: 'Execuções', path: '/terminal', icon: 'terminal' },
  { name: 'Automações', path: '/cron', icon: 'clock' },
  { name: 'Memória', path: '/memory', icon: 'brain' },
  { name: 'Skills', path: '/skills', icon: 'bolt' },
  { name: 'Conexões', path: '/plugins', icon: 'plug' },
];

const Sidebar = () => (
  <Aside>
    <Brand><img src={hermesCompleteLogo} alt="Hermes Agent" /></Brand>
    <SectionLabel>Workspace</SectionLabel>
    <Nav aria-label="Navegação principal">
      {menuItems.map(item => (
        <NavLink key={item.path} to={item.path} end={item.end}>
          <Icon name={item.icon} size={17}/><span>{item.name}</span>
        </NavLink>
      ))}
    </Nav>
    <Bottom>
      <NavLink to="/settings"><Icon name="settings" size={17}/><span>Ajustes</span></NavLink>
      <AgentCard><StatusDot/><div><strong>Hermes local</strong><small>Máquina conectada</small></div><Icon name="more" size={17}/></AgentCard>
    </Bottom>
  </Aside>
);

const Aside = styled.aside`
  width: 236px; min-width: 236px; height: 100vh; position: sticky; top: 0; padding: 22px 14px 16px;
  display: flex; flex-direction: column; background: #0c0f10; border-right: 1px solid ${theme.colors.border};
  @media (max-width: 900px) { width: 76px; min-width: 76px; padding-inline: 10px; }
  @media (max-width: 600px) { position: fixed; z-index: 20; inset: auto 0 0; width: 100%; height: 66px; padding: 8px 10px; border: 0; border-top: 1px solid ${theme.colors.border}; }
`;
const Brand = styled.div`
  display: flex; align-items: center; height: 44px; padding: 0 8px; margin-bottom: 34px;
  img { width: 158px; max-height: 42px; object-fit: contain; object-position: left center; display: block; }
  @media(max-width:900px){ justify-content:center; padding:0; img { width: 48px; height: 42px; object-fit: cover; object-position: left center; } }
  @media(max-width:600px){ display:none; }
`;
const SectionLabel = styled.div`
  padding: 0 11px 10px; color:${theme.colors.faint}; font:500 9px var(--font-mono); letter-spacing:.14em; text-transform:uppercase;
  @media(max-width:900px){display:none;}
`;
const Nav = styled.nav`
  display:flex; flex-direction:column; gap:4px;
  a { height:42px; padding:0 11px; display:flex; align-items:center; gap:12px; color:${theme.colors.muted}; text-decoration:none; border-radius:9px; font-size:13px; font-weight:600; transition:.16s ease; }
  a:hover{background:${theme.colors.panelSoft};color:${theme.colors.text};} a.active{color:${theme.colors.text};background:${theme.colors.elevated};box-shadow:inset 2px 0 ${theme.colors.accent};}
  @media(max-width:900px){a{justify-content:center;padding:0;} a span{display:none;}}
  @media(max-width:600px){flex-direction:row; justify-content:space-around; a{width:46px;} a:nth-child(n+6){display:none;} a.active{box-shadow:inset 0 -2px ${theme.colors.accent};}}
`;
const Bottom = styled.div`
  margin-top:auto; >a{height:42px;padding:0 11px;display:flex;align-items:center;gap:12px;color:${theme.colors.muted};text-decoration:none;border-radius:9px;font-size:13px;font-weight:600;} >a:hover,>a.active{color:${theme.colors.text};background:${theme.colors.panelSoft};}
  @media(max-width:900px){>a{justify-content:center;padding:0;} >a span{display:none;}}
  @media(max-width:600px){display:none;}
`;
const AgentCard = styled.div`
  display:flex;align-items:center;gap:9px;margin-top:14px;padding:11px 9px;border-top:1px solid ${theme.colors.border};
  div{flex:1;min-width:0;} strong,small{display:block;white-space:nowrap;} strong{font-size:11px;} small{margin-top:2px;color:${theme.colors.faint};font-size:9px;}
  @media(max-width:900px){justify-content:center;div,svg:last-child{display:none;}}
`;
const StatusDot=styled.span`width:8px;height:8px;border-radius:50%;background:${theme.colors.success};box-shadow:0 0 0 4px rgba(99,212,154,.08);`;
export default Sidebar;
