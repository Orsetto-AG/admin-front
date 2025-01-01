/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Api } from '../../providers/api/api';


@Injectable()
export class ProductLocalizationService extends Api {
    
    // for get method
    public params: any = {};
    // url
    private basUrl = this.getBaseUrl();


    public getProductLocalization(params): Observable<any> {
        return this.http.get(this.basUrl + '/product/product-translation', { params });
    }

    public getProductLocalizationCount(params): Observable<any> {
        return this.http.get(this.basUrl + '/product/product-translation', { params });
    }

    public productLocalizationDetail(params): Observable<any> {
        return this.http.get(this.basUrl + '/product/' + Number(params.productId) + '/product-translation');
    }

    public productLocalizationCreate(params): Observable<any> {
        return this.http.post(this.basUrl + '/product/' + Number(params.id) + '/product-translation', (params.data));
    }
}