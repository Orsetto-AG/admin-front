/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { AppState } from '../../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromordersettings from './order-reducer';

export const getPersonalizeOrderState = (state: AppState) =>
  state.personalizeOrder;
export const getNewPersonalizeOrder = createSelector(
  getPersonalizeOrderState,
  fromordersettings.getnewPersonalizeOrder
);
export const getPersonalizeOrder = createSelector(
  getPersonalizeOrderState,
  fromordersettings.getPersonalizeOrder
);
export const getSettingLoading = createSelector(
  getPersonalizeOrderState,
  fromordersettings.getSettingLoading
);
