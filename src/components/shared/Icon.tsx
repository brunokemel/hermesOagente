import React from 'react';

export type IconName = 'grid' | 'chat' | 'terminal' | 'clock' | 'brain' | 'bolt' | 'plug' | 'settings' | 'search' | 'bell' | 'send' | 'plus' | 'arrow' | 'check' | 'pause' | 'more' | 'wifi';

const paths: Record<IconName, React.ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
  chat: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>,
  terminal: <><path d="m4 17 6-5-6-5"/><path d="M12 19h8"/></>, clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  brain: <><path d="M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 .5 5.5A3.5 3.5 0 0 0 8 17h1.5z"/><path d="M14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1-.5 5.5A3.5 3.5 0 0 1 16 17h-1.5z"/><path d="M9.5 8H8m6.5 2H16M9.5 14H8m6.5 0H16"/></>,
  bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7z"/>, plug: <><path d="M8 12V4m8 8V4M5 8h14v4a7 7 0 0 1-14 0z"/><path d="M12 19v3"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19 15.5l1 1-3 3-1-1a7 7 0 0 1-2 .8V22h-4v-1.7a7 7 0 0 1-2-.8l-1 1-3-3 1-1a7 7 0 0 1-.8-2H2v-4h2.2a7 7 0 0 1 .8-2l-1-1 3-3 1 1a7 7 0 0 1 2-.8V2h4v2.7a7 7 0 0 1 2 .8l1-1 3 3-1 1a7 7 0 0 1 .8 2H22v4h-2.2a7 7 0 0 1-.8 2z"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>, bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  send: <><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></>, plus: <><path d="M12 5v14M5 12h14"/></>, arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  check: <path d="m5 12 4 4L19 6"/>, pause: <><path d="M9 5v14M15 5v14"/></>, more: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>, wifi: <><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1"/></>,
};

/** Ícones SVG locais evitam dependência adicional e herdam a cor do componente pai. */
const Icon: React.FC<{ name: IconName; size?: number; strokeWidth?: number }> = ({ name, size = 18, strokeWidth = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
);
export default Icon;
