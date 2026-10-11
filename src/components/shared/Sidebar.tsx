import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/**
 * @component Sidebar
 * @description Barra lateral de navegação com links para as principais seções da aplicação.
 *              Inspirada na interface do Hermes Agent desktop.
 */
const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: '🏠' },
    { name: 'Skills', path: '/skills', icon: '⚡' },
    { name: 'Memory', path: '/memory', icon: '🧠' },
    { name: 'Plugins', path: '/plugins', icon: '🔌' },
    { name: 'Cron', path: '/cron', icon: '⏰' },
    { name: 'Terminal', path: '/terminal', icon: '💻' },
    { name: 'Chat', path: '/chat', icon: '💬' },
  ];

  return (
    <SidebarContainer>
      <div style={{ padding: '20px 0', textAlign: 'center', borderBottom: '1px solid #30363d' }}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>Hermes</div>
        <div style={{ fontSize: '14px', opacity: 0.7 }}>Agent Interface</div>
      </div>
      <NavContainer>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            <NavItem>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.name}</span>
            </NavItem>
          </NavLink>
        ))}
      </NavContainer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside``;

const NavContainer = styled.nav``;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  color: #c9d1d9;
  text-decoration: none;
  
  &:hover {
    background-color: #21262d;
  }
  
  &.active {
    background-color: #1f6feb;
    color: white;
  }
  
  .icon {
    margin-right: 12px;
    font-size: 18px;
    min-width: 20px;
    text-align: center;
  }
  
  .text {
    font-size: 14px;
    font-weight: 500;
  }
`;

export default Sidebar;
