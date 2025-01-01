/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
  loginSuccess: any;
  loginRequestLoading: boolean;
  loginRequestLoaded: boolean;
  loginRequestFailed: boolean;
  forgotPasswordResponse: boolean;
  forgotPasswordRequestLoading: boolean;
  forgotPasswordRequestLoaded: boolean;
  forgotPasswordRequestFailed: boolean;

  gettoken: any;
  gettokenLoading: boolean;
  gettokenLoaded: boolean;
  gettokenFailed: boolean;

  setpassword: any;
  setpasswordLoading: boolean;
  setpasswordLoaded: boolean;
  setpasswordFailed: boolean;
}

export const AuthStateRecord = Record({
  // Initialize Default State Values

  loginSuccess: {},
  loginRequestLoading: false,
  loginRequestLoaded: false,
  loginRequestFailed: false,
  forgotPasswordResponse: false,
  forgotPasswordRequestLoading: false,
  forgotPasswordRequestLoaded: false,
  forgotPasswordRequestFailed: false,

  gettoken: {},
  gettokenLoading: false,
  gettokenLoaded: false,
  gettokenFailed: false,

  setpassword: {},
  setpasswordLoading: false,
  setpasswordLoaded: false,
  setpasswordFailed: false,
});
