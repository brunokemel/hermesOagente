# Hermes — painel local

Interface web para conversar com o Hermes Agent, acompanhar execuções e administrar automações, memórias, skills e conexões. O canal web é independente do WhatsApp.

## Rodando o projeto

```bash
npm install
npm run dev
```

Verificações disponíveis:

```bash
npm run build
npm run lint
```

## Conectando a API do Hermes

A integração está isolada em `src/services/HermesAgentService.ts`. Enquanto `mockMode` estiver como `true`, o chat usa respostas demonstrativas locais.

Para ligar o backend real:

1. Configure a URL padrão do construtor (atualmente `http://localhost:3001`).
2. Instancie `HermesAgentService` com `mockMode = false`.
3. Implemente no agente os endpoints `GET /health` e `POST /api/chat`.

O envio do chat usa este formato:

```json
{ "message": "texto do usuário", "channel": "web" }
```

E espera uma resposta semelhante a:

```json
{ "message": "resposta do Hermes", "plan": ["passo 1", "passo 2"] }
```

O campo `channel: web` é intencional: ele permite manter sessão, histórico e regras separados do WhatsApp no backend.

## Onde personalizar

- `src/styles/theme.ts`: cores, raios e componentes visuais básicos.
- `src/components/shared/Sidebar.tsx`: ordem e nome das abas.
- `src/services/HermesAgentService.ts`: API HTTP/WebSocket do agente.
- `src/models/Hermes.ts`: objetos de domínio usados na interface.

Os blocos centrais têm comentários próximos aos pontos mais prováveis de manutenção.
