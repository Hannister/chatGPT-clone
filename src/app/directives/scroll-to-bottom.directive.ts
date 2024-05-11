import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Message } from '../models/message';

@Directive({
  selector: '[appScrollToBottom]',
  standalone: true,
})
export class ScrollToBottomDirective implements OnChanges {
  @Input({ required: true })
  appScrollToBottom!: Message[] | null;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(): void {
    setTimeout(() => {
      this.scroll();
    }, 100);
  }

  private scroll(): void {
    const element = this.elementRef.nativeElement;
    element.scrollTop = element.scrollHeight;
  }
}
