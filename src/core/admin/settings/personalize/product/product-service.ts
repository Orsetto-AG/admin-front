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
import { ProductModel } from './product-model/product-model';
import { Api } from '../../../providers/api/api';

@Injectable()
export class PerSonalizeProductService extends Api {
  private url = this.getBaseUrl();

  // new Product
  createProduct(param: ProductModel): Observable<any> {
    return this.http.post(this.url + '/settings', param);
  }
  // get Product
  getProduct(): Observable<any> {
    return this.http.get(this.url + '/settings?defaultWebsite=1');
  }
}
