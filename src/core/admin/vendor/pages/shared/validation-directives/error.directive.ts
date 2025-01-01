
/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Directive, ElementRef, AfterViewInit } from '@angular/core';


@Directive({
    selector: '[appScrollTo]'
})
export class ScrollToDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}
  ngAfterViewInit() {
    this.elRef.nativeElement.scrollHeight();

  }
}
