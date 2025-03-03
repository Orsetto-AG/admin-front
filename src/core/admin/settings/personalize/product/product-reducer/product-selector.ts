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
import * as fromproductsettings from './product-reducer';

export const getPersonalizeProductState = (state: AppState) =>
  state.personalizeProduct;
export const getNewPersonalizeProduct = createSelector(
  getPersonalizeProductState,
  fromproductsettings.getnewPersonalizeProduct
);
export const getPersonalizeProduct = createSelector(
  getPersonalizeProductState,
  fromproductsettings.getPersonalizeProduct
);
export const getSettingLoading = createSelector(
  getPersonalizeProductState,
  fromproductsettings.getSettingLoading
);
