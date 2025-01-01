/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  logoImage:any 
  ngOnInit() {
    this.logoImage=environment.logo
  }
}
