import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safe',
  standalone: true,
})
export class SafePipe implements PipeTransform {
  transform(url: string, type: string): any {
    // Simple passthrough for now - in production, use DomSanitizer
    return url;
  }
}
