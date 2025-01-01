/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from './order-model/order-model';
import { Api } from '../../../providers/api/api';

@Injectable()
export class PerSonalizeOrderService extends Api {
  private url = this.getBaseUrl();

  createOrder(param: OrderModel): Observable<any> {
    return this.http.post(this.url + '/settings', param);
  }
  getOrder(): Observable<any> {
    return this.http.get(this.url + '/settings?defaultWebsite=1');
  }
}
