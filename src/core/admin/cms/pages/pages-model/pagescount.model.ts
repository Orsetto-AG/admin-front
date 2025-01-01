/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class PagescountModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;

  constructor(PagesCountForm: any) {
    this.limit = PagesCountForm.limit || 0;
    this.offset = PagesCountForm.offset || 0;
    this.keyword = PagesCountForm.keyword || '';
    this.count = PagesCountForm.count || 0;
  }
}
