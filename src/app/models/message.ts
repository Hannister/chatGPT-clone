import { MessageType } from './message-type.enum';
import { User } from './user';

export interface Message {
  content: string;
  user?: User;
  date?: Date;
  id: string;
  type: MessageType;
}
