/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface PersonalizeProductState extends Map<string, any> {
  newPersonalizeProduct: any;
  getPersonalizeProduct: any;
  getSettingLoading:boolean;
}

export const PersonalizeProductRecordState = Record({
  newPersonalizeProduct: {},
  getPersonalizeProduct: {},
  getSettingLoading:false
});
