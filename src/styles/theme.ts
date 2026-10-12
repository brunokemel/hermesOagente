import styled from 'styled-components';

/** Tokens centrais: altere este objeto para repaginar cores, raios e sombras. */
export const theme = {
  colors: {
    background: '#090b0c', panel: '#101315', panelSoft: '#15191b', elevated: '#1b2022',
    border: '#272c2f', borderStrong: '#373d40', text: '#f5f2eb', muted: '#949b9f',
    faint: '#62696d', accent: '#ffb84d', accentSoft: '#2d2418', success: '#63d49a',
    danger: '#ff7168', info: '#72a7ff',
  },
  radius: { sm: '8px', md: '12px', lg: '18px' },
};

export const Page = styled.section`
  max-width: 1440px; margin: 0 auto; padding: 32px 36px 52px;
  @media (max-width: 760px) { padding: 22px 18px 100px; }
`;

export const PageHeader = styled.header`
  display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 28px;
  .eyebrow { color: ${theme.colors.accent}; font: 500 11px/1 var(--font-mono); letter-spacing: .14em; text-transform: uppercase; margin-bottom: 10px; }
  h1 { color: ${theme.colors.text}; font-size: clamp(26px, 3vw, 36px); letter-spacing: -.045em; line-height: 1.08; margin: 0 0 8px; }
  p { color: ${theme.colors.muted}; font-size: 14px; line-height: 1.6; margin: 0; }
  @media (max-width: 700px) { align-items: flex-start; flex-direction: column; }
`;

export const Card = styled.div`
  background: ${theme.colors.panel}; border: 1px solid ${theme.colors.border}; border-radius: ${theme.radius.lg};
`;

export const Button = styled.button<{ $variant?: 'primary' | 'quiet' | 'danger' }>`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 40px; padding: 0 15px;
  border-radius: ${theme.radius.sm}; cursor: pointer; font-size: 13px; font-weight: 700;
  border: 1px solid ${({ $variant }) => $variant === 'primary' ? theme.colors.accent : $variant === 'danger' ? '#66322f' : theme.colors.borderStrong};
  background: ${({ $variant }) => $variant === 'primary' ? theme.colors.accent : $variant === 'danger' ? '#2b1716' : theme.colors.panelSoft};
  color: ${({ $variant }) => $variant === 'primary' ? '#17120b' : $variant === 'danger' ? theme.colors.danger : theme.colors.text};
  transition: transform .15s ease, border-color .15s ease;
  &:hover { transform: translateY(-1px); border-color: ${({ $variant }) => $variant === 'primary' ? '#ffd08a' : theme.colors.accent}; }
  &:disabled { cursor: not-allowed; opacity: .5; transform: none; }
`;

export const Badge = styled.span<{ $tone?: 'success' | 'warning' | 'neutral' }>`
  display: inline-flex; align-items: center; gap: 6px; width: fit-content; padding: 5px 8px; border-radius: 999px;
  font: 500 10px/1 var(--font-mono); text-transform: uppercase; letter-spacing: .05em;
  color: ${({ $tone }) => $tone === 'success' ? theme.colors.success : $tone === 'warning' ? theme.colors.accent : theme.colors.muted};
  background: ${({ $tone }) => $tone === 'success' ? '#12241c' : $tone === 'warning' ? theme.colors.accentSoft : theme.colors.elevated};
  border: 1px solid ${({ $tone }) => $tone === 'success' ? '#25543c' : $tone === 'warning' ? '#5b4322' : theme.colors.border};
`;

export const Field = styled.input`
  width: 100%; min-height: 42px; padding: 0 13px; color: ${theme.colors.text}; background: ${theme.colors.panelSoft};
  border: 1px solid ${theme.colors.border}; border-radius: ${theme.radius.sm}; outline: none;
  &::placeholder { color: ${theme.colors.faint}; }
  &:focus { border-color: ${theme.colors.accent}; box-shadow: 0 0 0 3px rgba(255,184,77,.08); }
`;
