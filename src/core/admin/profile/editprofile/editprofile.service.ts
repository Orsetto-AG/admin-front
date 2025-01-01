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
import { EditprofileForm } from './models/editprofile.model';
import { Api } from '../../providers/api/api';

@Injectable()
export class EditprofileService extends Api {
  public subject = new Subject<any>();

  private url = this.getBaseUrl();

  // change psw
  public editProfile(param: EditprofileForm): Observable<any> {
    return this.http.post(this.url + '/auth/edit-profile', param);
  }

  public getProfileDetail() {
    return this.http.get(this.url + '/auth/get-profile');
  }

  setemit(val) {
    this.subject.next(val);
  }
}
