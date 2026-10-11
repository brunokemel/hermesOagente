import React from 'react';
import styled from 'styled-components';

/**
 * @component MainLayout
 * @description Layout principal da aplicação com sidebar e header fixos.
 *              O conteúdo das páginas é renderizado no Outlet do react-router-dom.
 */
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <HeaderStyled />
      <Content>
        <SidebarStyled />
        <Main>
          {children}
        </Main>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderStyled = styled.header`
  height: 60px;
  background-color: #0d1117;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #30363d;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const SidebarStyled = styled.aside`
  width: 260px;
  background-color: #0d1117;
  color: white;
  border-right: 1px solid #30363d;
  overflow-y: auto;
`;

const Main = styled.main`
  flex: 1;
  background-color: #010409;
  color: white;
  overflow-y: auto;
  padding: 20px;
`;

export default MainLayout;
