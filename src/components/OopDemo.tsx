import React, { useState } from 'react';
import styled from 'styled-components';
import { Calculator } from '../utils/Calculator';

/**
 * @styled-component Container
 * @description Container principal do componente com estilo básico.
 */
const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

/**
 * @styled-component Display
 * @description Exibe o valor atual da calculadora.
 */
const Display = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-align: center;
`;

/**
 * @styled-component ButtonGroup
 * @description Agrupa os botões de operação.
 */
const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

/**
 * @styled-component OpButton
 * @description Botão de operação com estilo.
 */
const OpButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${props =>
    props.variant === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

/**
 * @component OopDemo
 * @description Demonstração de Programação Orientada a Objetos (POO) usando a classe Calculator.
 *              Este componente permite realizar operações básicas e mostra o resultado em tempo real.
 * @remarks O componente utiliza a classe Calculator (definida em utils/Calculator.ts) para
 *          encapsular a lógica de cálculo, demonstrando encapsulamento e abstração da POO.
 */
const OopDemo: React.FC = () => {
  const [calculator] = useState(() => new Calculator());
  const [value, setValue] = useState(calculator.getValue());

  /**
   * @function handleOperation
   * @description Manipula as operações da calculadora e atualiza o estado.
   * @param {string} operation - A operação a ser realizada ('add', 'subtract', etc.)
   * @param {number} operand - O operando para a operação.
   * @returns {void}
   */
  const handleOperation = (
    operation: keyof Omit<Calculator, 'getValue' | 'reset'>,
    operand: number
  ): void => {
    try {
      // @ts-ignore - Embora TypeScript possa reclamar, sabemos que essas são métodos válidos
      calculator[operation](operand);
      setValue(calculator.getValue());
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <Container>
      <h1>Demo de POO com Calculadora</h1>
      <Display>{value}</Display>
      
      <div>
        <h2>Operações:</h2>
        <ButtonGroup>
          <OpButton variant="primary" onClick={() => handleOperation('add', 5)}>
            Adicionar 5
          </OpButton>
          <OpButton onClick={() => handleOperation('subtract', 3)}>
            Subtrair 3
          </OpButton>
        </ButtonGroup>
        <ButtonGroup>
          <OpButton variant="primary" onClick={() => handleOperation('multiply', 2)}>
            Multiplicar por 2
          </OpButton>
          <OpButton onClick={() => handleOperation('divide', 4)}>
            Dividir por 4
          </OpButton>
        </ButtonGroup>
        <ButtonGroup>
          <OpButton onClick={() => { calculator.reset(0); setValue(calculator.getValue()); }}>
            Resetar
          </OpButton>
          <OpButton variant="secondary" onClick={() => { calculator.reset(10); setValue(calculator.getValue()); }}>
            Definir 10
          </OpButton>
        </ButtonGroup>
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
        <p>Esta demonstração mostra:</p>
        <ul>
          <li>Encapsulamento: O valor atual é privado e acessível apenas através de métodos.</li>
          <li>Abstração: A interface pública esconde a implementação interna.</li>
          <li>Como usar classes TypeScript em componentes React.</li>
        </ul>
      </div>
    </Container>
  );
};

export default OopDemo;
