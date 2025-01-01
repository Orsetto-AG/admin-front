/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

import { Map, Record } from 'immutable';

export interface CatalogLayoutState extends Map<string, any> {

  catalogCount: any;
  catalogCountLoading: boolean;
  catalogCountLoaded: boolean;
  catalogCountFailed: boolean;
}

export const CatalogLayoutStateRecord = Record({

  catalogCount: {},
  catalogCountLoading: false,
  catalogCountLoaded: false,
  catalogCountFailed: false,
});
