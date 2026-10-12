export type AgentStatus = 'online' | 'offline' | 'busy';
export type MessageRole = 'user' | 'agent' | 'system';

export class ChatMessage {
  public readonly id: string;
  public readonly role: MessageRole;
  public readonly content: string;
  public readonly createdAt: Date;
  public readonly plan?: string[];

  constructor(
    id: string, role: MessageRole, content: string, createdAt: Date, plan?: string[],
  ) { this.id=id; this.role=role; this.content=content; this.createdAt=createdAt; this.plan=plan; }
}

export class Execution {
  public readonly id: string;
  public readonly command: string;
  public readonly context: string;
  public readonly startedAt: string;
  public readonly duration: string;
  public readonly status: 'completed' | 'running' | 'failed';

  constructor(
    id: string, command: string, context: string, startedAt: string, duration: string, status: 'completed' | 'running' | 'failed',
  ) { this.id=id; this.command=command; this.context=context; this.startedAt=startedAt; this.duration=duration; this.status=status; }
}
