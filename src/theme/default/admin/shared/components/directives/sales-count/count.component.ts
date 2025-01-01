/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import {
  Component,
  OnInit,
} from '@angular/core';
import { LayoutsSandbox } from '../../../../../../../core/admin/sales/layout/layout.sandbox';
import { LayoutSandbox } from '../../../../../../../core/admin/layout/layout.sandbox';


@Component({
  selector: 'app-sales-count',
  templateUrl: 'count.component.html',
  styleUrls: ['count.component.scss']
})
export class SalesCountComponent implements OnInit {


  constructor(public layoutSandbox: LayoutsSandbox,
    public commonSandbox: LayoutSandbox) {
  }

  ngOnInit() {
    this.layoutSandbox.getSalesCount();
  }

}
