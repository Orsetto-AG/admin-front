/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Component, ChangeDetectionStrategy, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerHeaderComponent implements OnInit {
  checked: boolean;
  constructor(public titleService: Title) { }
  
  
  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    this.checked = false;
  }

  ngOnInit() {
    this.titleService.setTitle('Customer');
  }
  onClick(e) {
    this.checked = true;
  }
}
