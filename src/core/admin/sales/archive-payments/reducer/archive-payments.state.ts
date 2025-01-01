import { exportExcelLoading } from './../../payments/payments-reducer/payments.selector';
/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Map, Record } from 'immutable';

export interface ArchivePaymentState extends Map<string, any> {
  
  archivePaymentList: any;
  archivePaymentListLoading: boolean;
  archivePaymentListLoaded: boolean;
  archivePaymentListFailed: boolean;

  archivePaymentListCount: any;
  archivePaymentListCountLoading: boolean;
  archivePaymentListCountLoaded: boolean;
  archivePaymentListCountFailed: boolean;

  exportExcel: any;
  exportExcelLoading: boolean;
  exportExcelLoaded: boolean;
  exportExcelFailed: boolean;
}

export const ArchivePaymentStateRecord = Record({

  archivePaymentList: [],
  archivePaymentListLoading: false,
  archivePaymentListLoaded: false,
  archivePaymentListFailed: false,

  archivePaymentListCount: '',
  archivePaymentListCountLoading: false,
  archivePaymentListCountLoaded: false,
  archivePaymentListCountFailed: false,

  exportExcel: '',
  exportExcelLoading: false,
  exportExcelLoaded: false,
  exportExcelFailed: false,
});
