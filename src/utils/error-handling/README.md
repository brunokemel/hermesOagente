# Error Handling Utilities

Este módulo fornece utilitários padronizados para tratamento e reporte de erros na aplicação Hermes Agent.

## Uso

### Error Boundary

O `ErrorBoundary` é um componente React que captura erros em sua árvore de componentes e exibe uma interface de fallback.

```tsx
import ErrorBoundary from '@/components/error-boundary/ErrorBoundary';
import ErrorFallback from '@/components/error-boundary/ErrorFallback';

function App() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetErrorHandler = () => {
    setError(null);
  };

  if (error) {
    return <ErrorFallback error={error} resetErrorHandler={resetErrorHandler} />;
  }

  return (
    <ErrorBoundary 
      fallback={<ErrorFallback 
        error={new Error("Erro desconhecido")} 
        resetErrorHandler={() => {}} 
      />}>
      <MainLayout>
        {/* Suas rotas aqui */}
      </MainLayout>
    </ErrorBoundary>
  );
}
```

### Report Error

A função `reportError` envia erros para serviços de monitoramento (como Sentry, LogRocket, etc.).

```tsx
import { reportError } from '@/utils/error-handling';

try {
  // Alguma operação que pode falhar
  const resultado = await operacaoArriscada();
} catch (error) {
  // Reportar erro com contexto adicional
  await reportError(error, {
    serviceName: 'interface-hermes',
    userId: 'usuario-123',
    additionalData: {
      componente: 'PainelDeControle',
      acao: 'salvarConfiguracao'
    }
  });
}
```

### Catch Async

A função `catchAsync` facilita o tratamento de erros em operações assíncronas, retornando uma tupla `[dados, erro]`.

```tsx
import { catchAsync } from '@/utils/error-handling';

const [dados, erro] = await catchAsync(fetchDadosDaAPI());

if (erro) {
  // Tratar o erro
  console.error('Falha ao buscar dados:', erro);
  return [];
}

// Usar os dados
return dados;
```

## Padrões de Projeto

1. **Sempre use ErrorBoundary** na raiz da sua aplicação ou em pontos críticos da árvore de componentes
2. **Reporte erros significativos** usando `reportError` com contexto relevante
3. **Use catchAsync** para operações assíncronas onde você precisa tratar tanto sucesso quanto falha
4. **Não ignore erros** - sempre pelo menos logar no console durante desenvolvimento
5. **Forneça feedback ao usuário** quando ocorrerem erros recuperáveis

## Próximos Passos

- Integrar com serviço real de monitoramento de erros (Sentry, etc.)
- Adicionar informações de versão e ambiente aos reports de erro
- Implementar rate limiting para reports de erro
- Adicionar suporte a breadcrumbs para melhor rastreamento
