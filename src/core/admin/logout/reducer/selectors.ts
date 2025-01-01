/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { AppState } from '../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromCommon from './common.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getCommonState = (state: AppState) => state.common;
export const getlogOut = createSelector(
  getCommonState,
  fromCommon.getlogout
);
