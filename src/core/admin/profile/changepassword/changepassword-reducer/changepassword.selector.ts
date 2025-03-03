/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { createSelector } from 'reselect';
import * as fromChangepassword from './changepassword.reducer';
import { AppState } from '../../../../app.state.interface';
// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getChangePasswordState = (state: AppState) => state.changepassword;

export const getChangePassword = createSelector(
  getChangePasswordState,
  fromChangepassword.getChangePassword
);
export const getChangePasswordResponse = createSelector(
  getChangePasswordState,
  fromChangepassword.getChangePasswordResponse
);
export const getChangePasswordRequestLoading = createSelector(
  getChangePasswordState,
  fromChangepassword.getChangePasswordRequestLoading
);
export const getChangePasswordRequestLoaded = createSelector(
  getChangePasswordState,
  fromChangepassword.getChangePasswordRequestLoaded
);
export const getChangePasswordRequestFailed = createSelector(
  getChangePasswordState,
  fromChangepassword.getChangePasswordRequestFailed
);
