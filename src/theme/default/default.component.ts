/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-orsetto-root',
  templateUrl: './default.component.html'
})
export class DefaultComponent implements OnInit {
  title = 'Orsetto Commerce';
  public mylanguage: string;

  constructor(public translate: TranslateService) {}

  ngOnInit() {}
}
