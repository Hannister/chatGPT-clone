import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-sent-message-button',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatTooltip],
  templateUrl: './sent-message-button.component.html',
  styleUrl: './sent-message-button.component.scss',
})
export class SentMessageButtonComponent {
  @Output() click = new EventEmitter<void>();
  @Input() disabled = true;
  @Input() tooltip = '';
  @Input() backgroundColor: string = 'var(--primary-text)';
  @Input() iconColor: string = 'var(--dark-gray)';

  send(): void {
    this.click.emit();
  }
}
