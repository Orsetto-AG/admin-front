/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface SeosettingState extends Map<string, any> {
  newSeo: any;
  getSeo: any;
  getSettingLoading: boolean;
}

export const SeosettingRecordState = Record({
  newSeo: {},
  getSeo: {},
  getSettingLoading:false
});
