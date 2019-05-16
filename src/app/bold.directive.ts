import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  @HostBinding('style.color') myColor;
  @HostListener('click') changeColor() {
    this.myColor = 'green';
  }

  constructor(
    private el: ElementRef
  ) { 
    el.nativeElement.style.fontWeight = 'bold';
    this.myColor = 'red';
  }

}
