/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface SalesLayoutState extends Map<string, any> {

  salesCount: any;
  salesCountLoading: boolean;
  salesCountLoaded: boolean;
  salesCountFailed: boolean;

}

export const SalesLayoutStateRecord = Record({

  salesCount: {},
  salesCountLoading: false,
  salesCountLoaded: false,
  salesCountFailed: false,

});
