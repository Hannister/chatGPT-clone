import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Message } from '../../models/message';
import { MessageComponent } from '../message/message.component';
import { NewChatComponent } from '../new-chat/new-chat.component';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
  imports: [MessageComponent, NewChatComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageListComponent {
  messages$: Observable<Message[]>;
  constructor(public chatService: ChatService) {
    this.messages$ = this.chatService.messages$; // Assuming messages$ is a BehaviorSubject or Observable of messages.
  }
}
