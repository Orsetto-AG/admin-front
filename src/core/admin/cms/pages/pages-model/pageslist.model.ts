/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class PageslistModel {
  public limit: number;
  public offset: number;
  public keyword: string;

  constructor(PagesListForm: any) {
    this.limit = PagesListForm.limit || 0;
    this.offset = PagesListForm.offset || 0;
    this.keyword = PagesListForm.keyword || '';
  }
}
