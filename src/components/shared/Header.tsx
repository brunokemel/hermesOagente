import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * @component Header
 * @description Cabeçalho da aplicação com logo, título e barra de busca/comandos.
 */
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/" className="logo-link">
          <div className="logo">H</div>
          <div className="title">Hermes Agent</div>
        </Link>
      </LogoContainer>
      <SearchContainer>
        <input
          type="text"
          placeholder="Digite um comando ou buscar..."
          className="search-input"
        />
        <button className="search-button">⚡</button>
      </SearchContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header``;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  .logo-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .logo {
    width: 32px;
    height: 32px;
    background-color: #1f6feb;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    color: white;
  }
  
  .title {
    font-size: 18px;
    font-weight: 600;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  .search-input {
    flex: 1;
    padding: 8px 12px;
    background-color: #21262d;
    border: 1px solid #30363d;
    border-radius: 4px;
    color: #c9d1d9;
    font-size: 14px;
    
    &::placeholder {
      color: #8b949e;
    }
    
    &:focus {
      outline: none;
      border-color: #1f6feb;
      background-color: #161b22;
    }
  }
  
  .search-button {
    padding: 8px 16px;
    background-color: #1f6feb;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #1c5ed7;
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
`;

export default Header;
