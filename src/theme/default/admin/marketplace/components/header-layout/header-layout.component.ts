/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    sessionStorage.removeItem('myKey')

  }
}
