import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

/**
 * @component ErrorBoundary
 * @description Componente de limite de erro para capturar e exibir erros na árvore de componentes.
 *              Forage fallback UI quando um componente filho lança um erro.
 * @props {{ fallback: ReactNode }} - UI a ser exibida quando houver um erro
 * @props {{ children: ReactNode }} - Componentes filhos a serem monitorados
 */
interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * @component ErrorBoundary
 * @description Componente de limite de erro para capturar e exibir erros na árvore de componentes.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Você pode logar o erro para um serviço de monitoramento aqui
    console.error("Erro não capturado:", error, errorInfo);
    // Exemplo de como enviar para um serviço externo:
    // reportErrorToService(error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

/**
 * @example
 * // Uso do ErrorBoundary
 * <ErrorBoundary fallback={<div>Ocorreu um erro. Por favor, tente novamente.</div>}>
 *   <MeuComponente />
 * </ErrorBoundary>
 */
