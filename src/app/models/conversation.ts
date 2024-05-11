import { Message } from './message';

export interface Conversation {
  id: string;
  messages: Message[];
}
