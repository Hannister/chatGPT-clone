import { Component, Input } from '@angular/core';
import { Message } from '../../models/message';
import { BreakTextPipe } from '../../pipes/break-text.pipe';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [BreakTextPipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  @Input() message!: Message;
}
