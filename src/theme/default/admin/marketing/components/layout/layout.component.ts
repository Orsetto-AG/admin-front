/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { LayoutSandbox } from '../../../../../../core/admin/Customers/layout/layout.sandbox';

@Component({
  selector: 'app-marketing-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketingLayoutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // this.layoutSandbox.getCustomerCount();
  }
}
