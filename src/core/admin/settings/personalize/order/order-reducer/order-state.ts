/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface PersonalizeOrderState extends Map<string, any> {
  newPersonalizeOrder: any;
  getPersonalizeOrder: any;
  getSettingLoading:boolean;
}

export const PersonalizeOrderRecordState = Record({
  newPersonalizeOrder: {},
  getPersonalizeOrder: {},
  getSettingLoading:false
});
