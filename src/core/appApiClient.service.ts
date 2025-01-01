/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppApiClient {
  params: any = {};
  url = 'http://api.orsettocommerce.com/api';

  constructor(private http: HttpClient) {}

  // logout
  logoutapi() {
    return this.http.get(this.url + '/auth/logout');
  }
}
