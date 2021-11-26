import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardBorder]',
})

export class CardBorderDirective {
  @Input() set appCardBorder(borderClass: string) {
    if (borderClass === 'ответ верный') {
      this.borderClass = 'alert-success';
    } else if (borderClass === 'ответ неверный') {
      this.borderClass ='alert-danger';
    }
  }

  borderClass = 'alert-secondary';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.addClass(el.nativeElement, this.borderClass);
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.borderClass);
  }

}
