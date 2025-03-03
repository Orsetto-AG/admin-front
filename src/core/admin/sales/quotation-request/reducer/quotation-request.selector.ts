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
import * as fromQuotationRequest from './quotation-request.reducer';
// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */

export const quotationState = (state: AppState) => state.quotationRequest;

export const quotationList = createSelector(quotationState, fromQuotationRequest.quotationList);
export const quotationListLoading = createSelector(quotationState, fromQuotationRequest.quotationListLoading);
export const quotationListLoaded = createSelector(quotationState, fromQuotationRequest.quotationListLoaded);

export const quotationListCount = createSelector(quotationState, fromQuotationRequest.quotationListCount);
export const quotationListCountLoading = createSelector(quotationState, fromQuotationRequest.quotationListCountLoading);
export const quotationListCountLoaded = createSelector(quotationState, fromQuotationRequest.quotationListCountLoaded);
