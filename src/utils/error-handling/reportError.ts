/**
 * @utility reportError
 * @description Função utilitária para reportar erros a serviços de monitoramento.
 *              Em um projeto real, isso poderia integrar-se com Sentry, LogRocket, etc.
 * @param {Error} error - O objeto de erro a ser reportado
 * @param {Object} [options] - Opções adicionais de contexto
 * @param {string} [options.serviceName] - Nome do serviço onde o erro ocorreu
 * @param {string} [options.userId] - ID do usuário que experimentou o erro
 * @param {Record<string, any>} [options.additionalData] - Dados adicionais para contexto
 * @returns {Promise<void>}
 */
export const reportError = async (
  error: Error,
  options: {
    serviceName?: string;
    userId?: string;
    additionalData?: Record<string, any>;
  } = {}
): Promise<void> => {
  const { serviceName, userId, additionalData } = options;
  
  // Construir o payload de erro
  const errorPayload = {
    timestamp: new Date().toISOString(),
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
    context: {
      serviceName,
      userId,
      ...(additionalData ?? {}),
    },
    // Em um ambiente de produção, você adicionaria informações como:
    // - Versão da aplicação
    // - Ambiente (development/staging/production)
    // - Informações do navegador/dispositivo
  };
  
  // Em desenvolvimento, apenas logar no console
  if (import.meta.env.DEV) {
    console.error('[Error Reporting] Error payload:', errorPayload);
    return;
  }
  
  // Em produção, enviar para o serviço de monitoramento
  // Exemplo de implementação (comentado para não causar erros de dependência):
  /*
  try {
    await fetch('/api/report-error', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorPayload),
    });
  } catch (reportError) {
    // Falha ao reportar o erro não deveria quebrar a aplicação
    console.error('Falha ao reportar erro:', reportError);
  }
  */
  
  // Por enquanto, apenas garantir que a função não lance erros
  return Promise.resolve();
};

/**
 * @utility catchAsync
 * @description Função utilitária para capturar erros em funções assíncronas.
 *              Útil para rotas de API ou funções que retornam promises.
 * @param {Promise<any>} promise - A promise a ser executada
 * @returns {Promise<[any, Error | null]>} Tupla com [dados, erro]
 */
export const catchAsync = async <T,>(
  promise: Promise<T>
): Promise<[T | null, Error | null]> => {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as Error];
  }
};

export default { reportError, catchAsync };
