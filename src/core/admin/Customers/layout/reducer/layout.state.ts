/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface CustomerLayoutState extends Map<string, any> {

  customerCount: any;
  customerCountLoading: boolean;
  customerCountLoaded: boolean;
  customerCountFailed: boolean;
}

export const CustomerLayoutStateRecord = Record({

  customerCount: {},
  customerCountLoading: false,
  customerCountLoaded: false,
  customerCountFailed: false,
});
