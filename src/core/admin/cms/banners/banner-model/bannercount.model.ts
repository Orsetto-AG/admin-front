/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class BannercountModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: string;

  constructor(bannercountForm: any) {
    this.limit = bannercountForm.limit || 0;
    this.offset = bannercountForm.offset || 0;
    this.keyword = bannercountForm.keyword || '';
    this.count = bannercountForm.count || '';
  }
}
