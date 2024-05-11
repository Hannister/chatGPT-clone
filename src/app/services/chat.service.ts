import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Conversation } from '../models/conversation';
import { Message } from '../models/message';
import { MessageType } from '../models/message-type.enum';
import { UtilsService } from './utils.service';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  user!: User;
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  public messages$ = this.messagesSubject.asObservable();
  conversationId = '';

  constructor(
    private utils: UtilsService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.getUser();
  }

  startNewConversation(question: string): void {
    this.conversationId = this.utils.generateId();
    this.router.navigate(['/chat', this.conversationId]).then(() => {
      this.sendMessage(question);
    });
  }

  sendMessage(text: string): void {
    const newMessage: Message = {
      id: this.utils.generateId(),
      content: text,
      date: this.utils.getCurrentTimestamp(),
      user: this.user,
      type: MessageType.question,
    };

    let messages = this.messagesSubject.getValue();
    messages.push(newMessage);
    this.messagesSubject.next([...messages]);
    this.getChatGPTResponse(text);
  }

  private getChatGPTResponse(question: string): void {
    const response: Message = {
      id: this.utils.generateId(),
      content: "This is a simulated response to '" + question + "'",
      date: this.utils.getCurrentTimestamp(),
      user: {
        name: 'ChatGPT',
        image: 'assets/icons/chatGPT-icon-white.png',
      },
      type: MessageType.answer,
    };

    let messages = this.messagesSubject.getValue();
    messages.push(response);
    this.messagesSubject.next([...messages]);
    const currentConversation: Conversation = {
      id: this.conversationId,
      messages: messages,
    };
    this.saveMessages(currentConversation);
  }

  private saveMessages(conversation: Conversation): void {
    localStorage.setItem(
      `conversation-${conversation.id}`,
      JSON.stringify(conversation)
    );
  }

  loadConversationFromLocalStorage(conversationId: string): Message[] {
    const savedConversation = localStorage.getItem(
      `conversation-${conversationId}`
    );
    if (savedConversation) {
      return JSON.parse(savedConversation).messages;
    } else {
      return [];
    }
  }

  setMessages(messages: Message[]): void {
    this.messagesSubject.next(messages);
  }

  getMessagesListLength() {
    return this.messagesSubject.getValue().length;
  }

  clearMessages(): void {
    this.messagesSubject.next([]);
  }
}
