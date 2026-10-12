import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Card, theme } from '../../styles/theme';

/** Tabela responsiva compartilhada pelas telas operacionais. */
export const DataCard=styled(Card)`overflow:hidden;`;
export const DataHeader=styled.div`min-height:56px;padding:0 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid ${theme.colors.border};h3{font-size:13px;margin:0;}span{color:${theme.colors.faint};font:9px var(--font-mono);}`;
export const DataRow=styled.div`min-height:64px;padding:12px 18px;display:grid;grid-template-columns:minmax(180px,1.5fr) 1fr .7fr .55fr;align-items:center;gap:14px;border-bottom:1px solid ${theme.colors.border};font-size:11px;&:last-child{border-bottom:0;}strong,small{display:block;}small{margin-top:4px;color:${theme.colors.faint};font:9px var(--font-mono);}.muted{color:${theme.colors.muted};}@media(max-width:720px){grid-template-columns:1fr auto;.optional{display:none;}}`;
export const NameCell=({icon,children}:{icon:ReactNode;children:ReactNode})=><Name><i>{icon}</i><div>{children}</div></Name>;
const Name=styled.div`display:flex;align-items:center;gap:11px;min-width:0;>i{width:34px;height:34px;flex:0 0 auto;display:grid;place-items:center;color:${theme.colors.accent};background:${theme.colors.accentSoft};border-radius:9px;font-style:normal;}div{min-width:0;}`;
