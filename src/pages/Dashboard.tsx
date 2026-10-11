import React from 'react';
import styled from 'styled-components';

/**
 * @page Dashboard
 * @description Página inicial com visão geral do sistema Hermes Agent.
 *              Mostra estatísticas rápidas, atalhos e atividades recentes.
 */
const Dashboard: React.FC = () => {
  // Mock data - in a real implementation, this would come from Hermes agent
  const stats = [
    { label: 'Skills Ativas', value: '12', icon: '⚡' },
    { label: 'Memórias Salvas', value: '45', icon: '🧠' },
    { label: 'Plugins Conectados', value: '3/8', icon: '🔌' },
    { label: 'Tarefas Cron', value: '5', icon: '⏰' },
  ];

  const recentActivities = [
    { time: '10:30', action: 'Skill "web-search" atualizada', icon: '🔄' },
    { time: '09:15', action: 'Nova memória adicionada: preferência de resposta', icon: '➕' },
    { time: '08:45', action: 'Plugin "github" conectado', icon: '🔌' },
    { time: '08:30', action: 'Comando executado: criar backup de config', icon: '💻' },
  ];

  return (
    <DashboardContainer>
      <Header>
        <h1>Dashboard Hermes Agent</h1>
        <p>Visão geral do seu agente pessoal</p>
      </Header>
      
      <StatsContainer>
        {stats.map((stat) => (
          <StatBox key={stat.label}>
            <div className="icon">{stat.icon}</div>
            <div className="content">
              <div className="value">{stat.value}</div>
              <div className="label">{stat.label}</div>
            </div>
          </StatBox>
        ))}
      </StatsContainer>
      
      <Section>
        <h2>Atividades Recentes</h2>
        <ActivityList>
          {recentActivities.map((activity) => (
            <ActivityItem key={activity.time}>
              <div className="time">{activity.time}</div>
              <div className="icon">{activity.icon}</div>
              <div className="description">{activity.action}</div>
            </ActivityItem>
          ))}
        </ActivityList>
      </Section>
      
      <Section>
        <h2>Ações Rápidas</h2>
        <QuickActions>
          <QuickAction>
            <button>⚡ Executar Comando</button>
          </QuickAction>
          <QuickAction>
            <button>📝 Criar Nova Skill</button>
          </QuickAction>
          <QuickAction>
            <button>🔍 Buscar na Web</button>
          </QuickAction>
          <QuickAction>
            <button>💬 Nova Conversa</button>
          </QuickAction>
        </QuickActions>
      </Section>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div``;

const Header = styled.div`
  margin-bottom: 32px;
  
  h1 {
    font-size: 28px;
    margin: 0 0 8px 0;
    color: #f0f6fc;
  }
  
  p {
    font-size: 16px;
    color: #8b949e;
    margin: 0;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
`;

const StatBox = styled.div`
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  
  .icon {
    font-size: 32px;
    margin-bottom: 12px;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .value {
      font-size: 24px;
      font-weight: 600;
      color: #f0f6fc;
      margin-bottom: 4px;
    }
    
    .label {
      font-size: 14px;
      color: #8b949e;
    }
  }
`;

const Section = styled.div`
  margin-bottom: 32px;
  
  h2 {
    font-size: 20px;
    margin: 0 0 16px 0;
    color: #f0f6fc;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const ActivityList = styled.div`
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  overflow: hidden;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #21262d;
  
  &:last-child {
    border-bottom: none;
  }
  
  .time {
    font-size: 14px;
    color: #8b949e;
    min-width: 60px;
  }
  
  .icon {
    font-size: 18px;
    margin: 0 12px;
    min-width: 24px;
  }
  
  .description {
    font-size: 14px;
    color: #c9d1d9;
    flex: 1;
  }
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
`;

const QuickAction = styled.div`
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #21262d;
    border: 1px solid #30363d;
    border-radius: 4px;
    color: #c9d1d9;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s;
    
    &:hover {
      background-color: #30363d;
      border-color: #1f6feb;
      color: #f0f6fc;
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
`;

export default Dashboard;
