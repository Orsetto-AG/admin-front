/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { AppState } from '../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromSalesLayout from './layout.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getSalesLayoutState = (state: AppState) => state.salesLayout;

export const salesCount = createSelector(
  getSalesLayoutState,
  fromSalesLayout.salesCount
);
export const salesCountLoading = createSelector(
  getSalesLayoutState,
  fromSalesLayout.salesCountLoading
);
export const salesCountLoaded = createSelector(
  getSalesLayoutState,
  fromSalesLayout.salesCountLoaded
);
export const salesCountFailed = createSelector(
  getSalesLayoutState,
  fromSalesLayout.salesCountFailed
);
