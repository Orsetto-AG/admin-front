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
import { ZonelistForm } from './zone-model/zonelist.model';
import { ZoneForm } from './zone-model/zone.model';
import { Api } from '../../../providers/api/api';

@Injectable()
export class ZoneService extends Api {
  zonelistdata: any;
  private url: string = this.getBaseUrl();

  setzonelistdata(data) {
    this.zonelistdata = data;
  }

  getzonelistdata() {
    return this.zonelistdata;
  }

  // Zone list Pagination

  public zonePagiantion(params: ZonelistForm): Observable<any> {
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.url + '/zone', { params: reqOpts });
  }

  // ZOne list

  public zoneList(params: ZonelistForm): Observable<any> {
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.url + '/zone', { params: reqOpts });
  }

  // Zone delete
  public deleteZone(param: any, Id: number): Observable<any> {
    return this.http.delete(this.url + '/zone/' + Id, param);
  }

  // new zone
  addZone(param: ZoneForm): Observable<any> {
    return this.http.post(this.url + '/zone', param);
  }

  // update zone
  updateZone(params) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: { zoneId: params.zoneId }
    };
    return this.http.put(
      this.url + '/zone/' + params.zoneId,
      params
    );
  }
}
