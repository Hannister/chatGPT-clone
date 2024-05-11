import { Conversation } from './../models/conversation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost/passportcard.api';

  startNewConversation(conversationId: string) {
    const conversation: Conversation = {
      id: conversationId,
      messages: [],
    };
    return this.http.post<Conversation>(this.baseUrl, conversation);
  }

  loadConversation(conversationId: string) {
    return this.http.get<Conversation>(
      `${this.baseUrl}/conversations/${conversationId}`
    );
  }

  sendMessage(newMessage: string) {
    return this.http.post<Message>(
      `${this.baseUrl}/conversations/newMessage`,
      newMessage
    );
  }

  private getChatGPTResponse(newMessage: Message) {
    return this.http.post<Message>(
      `${this.baseUrl}/conversations/getChatGPTResponse`,
      newMessage
    );
  }
}
