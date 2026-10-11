import React from 'react';
import styled from 'styled-components';

/**
 * @component ErrorFallback
 * @description Interface de fallback exibida quando um erro é capturado pelo ErrorBoundary.
 */
const ErrorFallback: React.FC<{ error: Error; resetErrorHandler: () => void }> = ({ 
  error, 
  resetErrorHandler 
}) => {
  return (
    <ErrorFallbackContainer>
      <h2>Ocorreu um erro inesperado</h2>
      <p>Desculpe, algo deu errado. Nossa equipe foi notificada.</p>
      <div className="error-details">
        <strong>Tipo de erro:</strong> {error.name}
      </div>
      <div className="error-details">
        <strong>Mensagem:</strong> {error.message}
      </div>
      <button onClick={resetErrorHandler}>Tentar Novamente</button>
    </ErrorFallbackContainer>
  );
};

const ErrorFallbackContainer = styled.div`
  text-align: center;
  padding: 40px;
  color: #f0f6fc;
  
  h2 {
    color: #ff6b6b;
    margin-bottom: 20px;
  }
  
  .error-details {
    margin: 10px 0;
    font-size: 14px;
    color: #8b949e;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #1f6feb;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
      background-color: #1c5ed7;
    }
  }
`;

export default ErrorFallback;
