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
import * as fromBackorderListRequest from './backorder-list.reducer';
// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */

export const backorderListState = (state: AppState) => state.backorderList;

export const backorderList = createSelector(backorderListState, fromBackorderListRequest.backorderList);
export const backorderListLoading = createSelector(backorderListState, fromBackorderListRequest.backorderListLoading);
export const backorderListLoaded = createSelector(backorderListState, fromBackorderListRequest.backorderListLoaded);

export const backorderListCount = createSelector(backorderListState, fromBackorderListRequest.backorderListCount);
export const backorderListCountLoading = createSelector(backorderListState, fromBackorderListRequest.backorderListCountLoading);
export const backorderListCountLoaded = createSelector(backorderListState, fromBackorderListRequest.backorderListCountLoaded);
