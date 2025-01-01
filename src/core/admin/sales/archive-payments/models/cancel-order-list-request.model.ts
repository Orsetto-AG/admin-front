/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class CancelOrderListRequestModel {
    public limit: number;
    public offset: number;
    public keyword: string;
    public count: string;

    constructor(cancelOrderListForm: any) {
      this.limit = cancelOrderListForm.limit || '';
      this.offset = cancelOrderListForm.offset || '';
      this.keyword = cancelOrderListForm.keyword || '';
      this.count = cancelOrderListForm.count || '';
    }
  }
