import { Directive,ElementRef, Input } from '@angular/core';
import { User } from './darasa/user';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() user: User;

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = '#C70039';
  }

}
