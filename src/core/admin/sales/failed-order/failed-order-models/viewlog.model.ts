/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class ViewLogModel {
    public orderId: Number;
    public orderStatusId: string;
    public createdDate: string;

    constructor(ViewLog: any) {
      this.orderId = ViewLog.orderId || '';
      this.orderStatusId = ViewLog.orderStatusId || '';
      this.createdDate = ViewLog.createdDate || '';
    }
  }
