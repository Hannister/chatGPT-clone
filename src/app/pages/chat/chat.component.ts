import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { MessageListComponent } from '../../components/message-list/message-list.component';
import { MessageInputComponent } from '../../components/message-input/message-input.component';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ScrollToBottomDirective } from '../../directives/scroll-to-bottom.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  imports: [
    MessageListComponent,
    MessageInputComponent,
    ScrollToBottomDirective,
    FormsModule,
    CommonModule,
  ],
})
export class ChatComponent implements OnInit {
  navigationStart: any;

  conversationId: string = '';
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    public chatService: ChatService,
    private activatedRoute: ActivatedRoute
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
          this.chatService.clearMessages();
        }
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.conversationId = id;
        this.chatService.setMessages(
          this.chatService.loadConversationFromLocalStorage(this.conversationId)
        );
      }
    });
  }

  sendMessage(event: string): void {
    if (!event.trim()) return;

    if (this.chatService.getMessagesListLength() !== 0) {
      this.chatService.sendMessage(event);
    } else {
      this.chatService.startNewConversation(event);
    }

    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
  }

  private scrollToBottom(): void {
    const element = this.myScrollContainer.nativeElement;
    try {
      element.scrollTop = element.scrollHeight;
    } catch (err) {
      console.error('Could not scroll to bottom: ', err);
    }
  }
}
