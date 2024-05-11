import { Component } from '@angular/core';
import { BUTTON_OPTIONS } from '../../models/consts/new-chat-list';
import { SentMessageButtonComponent } from '../sent-message-button/sent-message-button.component';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-new-chat',
  standalone: true,
  templateUrl: './new-chat.component.html',
  styleUrl: './new-chat.component.scss',
  imports: [SentMessageButtonComponent],
})
export class NewChatComponent {
  buttonOptions = BUTTON_OPTIONS;

  constructor(private chatService: ChatService) {}

  onOptionSelect(optionId: number): void {
    const option = this.buttonOptions.find((o) => o.id === optionId);
    if (option) {
      this.chatService.startNewConversation(option.question);
    }
  }
}
