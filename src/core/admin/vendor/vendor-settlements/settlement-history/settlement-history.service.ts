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
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Api } from '../../../providers/api/api';

@Injectable()
export class SettlementHistoryService extends Api {
  public params: any = {};
  private basUrl = this.getBaseUrl();



  public historyList(params: any): Observable<any> {
    return this.http.get(this.basUrl + '/settlement', {params: params});
  }

  public historyListCount(params: any): Observable<any> {
    return this.http.get(this.basUrl + '/settlement', {params: params});
  }

  public settlementDetails(params: any): Observable<any> {
    return this.http.get(this.basUrl + '/settlement/settlement/' + params.id, params);
  }

  public exportPayment(params: any): Observable<any> {
    const reqOpts: any = {};
    reqOpts.responseType = 'arraybuffer';
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(this.basUrl + '/settlement/settlement-export-excel-download', reqOpts);
  }

  public exportAllPayment(params: any): Observable<any> {
    const reqOpts: any = {};
    reqOpts.responseType = 'arraybuffer';
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(this.basUrl + '/settlement/bulk-export-settlement-list', reqOpts);
  }

}
