import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { SentMessageButtonComponent } from '../sent-message-button/sent-message-button.component';

@Component({
  selector: 'app-message-input',
  standalone: true,
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    SentMessageButtonComponent,
  ],
})
export class MessageInputComponent {
  newMessage: string = '';
  @Output() sendMessage = new EventEmitter<string>();

  send(): void {
    if (!this.newMessage.trim()) {
      return;
    }
    this.sendMessage.emit(this.newMessage);
    this.newMessage = '';
  }
}
