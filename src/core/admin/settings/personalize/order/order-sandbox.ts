/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as personalizeOrdersetting from './order-action/order-action';
import * as store from '../../../../app.state.interface';
import { OrderModel } from './order-model/order-model';
import {
  getPersonalizeOrder,getSettingLoading
} from './order-reducer/order-selector';

@Injectable()
export class PersonalizeOrderSandbox {
  public getPersonalizeOrder$ = this.appState.select(getPersonalizeOrder);
  public getSettingLoading$ = this.appState.select(getSettingLoading);

  constructor(protected appState: Store<store.AppState>) {}

  public createPersonalizeOrder(value) {
    this.appState.dispatch(
      new personalizeOrdersetting.DoNewOrderSettingAction(new OrderModel(value))
    );
  }

  public getPersonalizeOrder() {
    this.appState.dispatch(
      new personalizeOrdersetting.DoGetOrderSettingAction()
    );
  }
}
