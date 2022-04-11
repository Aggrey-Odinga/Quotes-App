import { Directive, ElementRef} from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'cyan'
   }

}
