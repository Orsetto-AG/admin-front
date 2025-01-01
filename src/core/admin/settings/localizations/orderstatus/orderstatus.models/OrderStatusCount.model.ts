/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class OrderStatusCountModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: string;

  constructor(orderstatuslistForm: any) {
    this.limit = orderstatuslistForm.limit || 0;
    this.offset = orderstatuslistForm.offset || 0;
    this.keyword = orderstatuslistForm.keyword || '';
    this.count = orderstatuslistForm.count || '';
  }
}
