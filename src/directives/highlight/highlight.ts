import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pil-highlight]' // Attribute selector
})
export class HighlightDirective {

  constructor(
    private element: ElementRef
  ) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
