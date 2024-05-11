import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakText',
  standalone: true,
})
export class BreakTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(.{100})/g, '$1\n');
  }
}
