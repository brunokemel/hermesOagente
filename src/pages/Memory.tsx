import React from 'react';
import styled from 'styled-components';

/**
 * @page Memory
 * @description Página para visualização e gerenciamento da memória do Hermes Agent.
 *              Mostra memórias de usuário e do próprio agente.
 */
const Memory: React.FC = () => {
  // Mock data based on what we know from the session
  const userMemory = [
    { 
      id: 1, 
      content: 'Usuário prefere respostas concisas e diretas', 
      timestamp: '2026-10-10 14:30', 
      category: 'preference' 
    },
    { 
      id: 2, 
      content: 'Usuário está trabalhando em um projeto de interface web para Hermes', 
      timestamp: '2026-10-11 16:20', 
      category: 'project' 
    },
    { 
      id: 3, 
      content: 'Usuário gosta de organizar informações em listas numeradas', 
      timestamp: '2026-10-11 15:45', 
      category: 'style' 
    }
  ];
  
  const agentMemory = [
    { 
      id: 1, 
      content: 'Hermes Agent está rodando no Windows 11 com Python 3.14.7', 
      timestamp: '2026-10-11 16:00', 
      category: 'system' 
    },
    { 
      id: 2, 
      content: 'Última atualização de skill: web-search (versão 2.1)', 
      timestamp: '2026-10-10 09:15', 
      category: 'skill' 
    },
    { 
      id: 3, 
      content: 'Preferência de formato de resposta: markdown com emojis estratégicos', 
      timestamp: '2026-10-11 15:30', 
      category: 'communication' 
    }
  ];
  
  return (
    <MemoryContainer>
      <Header>
        <h1>Memória do Hermes Agent</h1>
        <p>Armazenamento persistente de fatos e preferências</p>
      </Header>
      
      <Tabs>
        <TabButton 
          active={true} 
          onClick={() => {}}
        >
          Memória do Usuário ({userMemory.length})
        </TabButton>
        <TabButton 
          active={false} 
          onClick={() => {}}
        >
          Memória do Agente ({agentMemory.length})
        </TabButton>
      </Tabs>
      
      <MemorySection>
        <MemoryList>
          {userMemory.map((memory) => (
            <MemoryItem key={memory.id}><div className="content"><div className="text">{memory.content}</div><div className="meta"><div className="category">{memory.category}</div><div className="timestamp">{memory.timestamp}</div></div></div><div className="actions"><button>✏️ Editar</button><button>🗑️ Excluir</button></div></MemoryItem>
          ))}
        </MemoryList>
      </MemorySection>
    </MemoryContainer>
  );
};

const MemoryContainer = styled.div``;

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
  
  h1 {
    font-size: 24px;
    margin: 0 0 8px 0;
    color: #f0f6fc;
  }
  
  p {
    font-size: 16px;
    color: #8b949e;
    margin: 0;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  gap: 4px;
`;

const TabButton = styled.button<{active: boolean}>`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#1f6feb' : '#21262d'};
  border: ${props => props.active ? '1px solid #1f6feb' : '1px solid #30363d'};
  border-radius: 4px;
  color: ${props => props.active ? 'white' : '#c9d1d9'};
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? '#1c5ed7' : '#30363d'};
  }
`;

const MemorySection = styled.div`
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  overflow: hidden;
`;

const MemoryList = styled.div``;

const MemoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 20px;
  border-bottom: 1px solid #21262d;
  
  &:last-child {
    border-bottom: none;
  }
  
  .content {
    flex: 1;
    
    .text {
      font-size: 14px;
      color: #c9d1d9;
      margin-bottom: 4px;
      line-height: 1.4;
    }
    
    .meta {
      font-size: 12px;
      color: #8b949e;
      display: flex;
      gap: 12px;
      
      .category {
        background-color: #21262d;
        padding: 2px 6px;
        border-radius: 3px;
        text-transform: capitalize;
      }
      
      .timestamp {
        font-family: monospace;
      }
    }
  }
  
  .actions {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    
    button {
      padding: 6px 10px;
      background-color: transparent;
      border: 1px solid #30363d;
      border-radius: 4px;
      color: #8b949e;
      font-size: 12px;
      cursor: pointer;
      
      &:hover {
        background-color: #21262d;
        color: #c9d1d9;
      }
      
      &:first-of-type {
        border-color: #238636;
        color: #238636;
        
        &:hover {
          background-color: #2ea043;
          color: white;
        }
      }
      
      &:last-of-type {
        border-color: #da3633;
        color: #da3633;
        
        &:hover {
          background-color: #f85149;
          color: white;
        }
      }
    }
  }
`;

export default Memory;
