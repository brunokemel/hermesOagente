import { ChatMessage } from '../models/Hermes';

export interface IHermesAgentService {
  sendMessage(content: string): Promise<ChatMessage>;
  healthCheck(): Promise<boolean>;
}

/**
 * Ponto único da futura integração com o Hermes local.
 * Troque `mockMode` por false e ajuste `baseUrl` quando o endpoint estiver pronto.
 * WhatsApp não passa por esta classe: o site mantém uma conversa independente.
 */
export class HermesAgentService implements IHermesAgentService {
  private readonly baseUrl: string;
  private readonly mockMode: boolean;

  constructor(baseUrl = 'http://localhost:3001', mockMode = true) {
    this.baseUrl = baseUrl;
    this.mockMode = mockMode;
  }

  async healthCheck(): Promise<boolean> {
    if (this.mockMode) return true;
    const response = await fetch(`${this.baseUrl}/health`);
    return response.ok;
  }

  async sendMessage(content: string): Promise<ChatMessage> {
    if (this.mockMode) {
      await new Promise(resolve => setTimeout(resolve, 700));
      return new ChatMessage(crypto.randomUUID(), 'agent', `Entendido. Vou processar: “${content}”.`, new Date(), [
        'Interpretar o pedido e validar o contexto disponível',
        'Executar as ferramentas necessárias na máquina local',
        'Retornar o resultado e registrar a execução',
      ]);
    }
    const response = await fetch(`${this.baseUrl}/api/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: content, channel: 'web' }) });
    if (!response.ok) throw new Error('Não foi possível falar com o Hermes local.');
    const data = await response.json() as { message: string; plan?: string[] };
    return new ChatMessage(crypto.randomUUID(), 'agent', data.message, new Date(), data.plan);
  }
}

export const hermesAgentService = new HermesAgentService();
