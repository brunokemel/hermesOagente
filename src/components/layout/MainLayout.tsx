import type { ReactNode } from 'react';
import styled from 'styled-components';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import { theme } from '../../styles/theme';

/** Estrutura principal: sidebar fixa, header contextual e área rolável de conteúdo. */
const MainLayout = ({ children }: { children: ReactNode }) => <Shell><Sidebar/><Workspace><Header/><Main>{children}</Main></Workspace></Shell>;
const Shell=styled.div`min-height:100vh;display:flex;background:${theme.colors.background};`;
const Workspace=styled.div`min-width:0;flex:1;`;
const Main=styled.main`min-height:calc(100vh - 68px);background:radial-gradient(circle at 75% -10%,rgba(255,184,77,.045),transparent 28%),${theme.colors.background};`;
export default MainLayout;
