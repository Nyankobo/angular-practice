import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  //The brackets make it an ATTRIBUTE selector:
  //    angular locates each element in template, & applies this logic to that element
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
    //ElementRef to inject a reference to host DOM element

    //Property:
    //  alias = appHighlight
  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  //Listeners
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
