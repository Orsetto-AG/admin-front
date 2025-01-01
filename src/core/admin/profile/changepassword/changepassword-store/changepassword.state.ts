/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface ChangePasswordState extends Map<string, any> {
  changePasword: any;
  changepasswordResponse: boolean;
  changepasswordRequestLoading: boolean;
  changepasswordRequestLoaded: boolean;
  changepasswordRequestFailed: boolean;
}

export const ChangePasswordRecordState = Record({
  changePasword: [],
  changepasswordResponse: false,
  changepasswordRequestLoading: false,
  changepasswordRequestLoaded: false,
  changepasswordRequestFailed: false
});
