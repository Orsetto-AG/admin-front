/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface QuotationRequestState extends Map<string, any> {

  quotationList: any;
  quotationListLoading: boolean;
  quotationListLoaded: boolean;
  quotationListFailed: boolean;

  quotationListCount: any;
  quotationListCountLoading: boolean;
  quotationListCountLoaded: boolean;
  quotationListCountFailed: boolean;


}

export const QuotationRequestStateRecord = Record({

  quotationList: [],
  quotationListLoading: false,
  quotationListLoaded: false,
  quotationListFailed: false,

  quotationListCount: '',
  quotationListCountLoading: false,
  quotationListCountLoaded: false,
  quotationListCountFailed: false,

});
