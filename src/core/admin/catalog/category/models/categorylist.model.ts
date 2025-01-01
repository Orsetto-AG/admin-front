/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class CategorylistForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public status: string;
  public name: string;
  constructor(categorylistForm: any) {
    this.limit = categorylistForm.limit || 0;
    this.offset = categorylistForm.offset || 0;
    this.keyword = categorylistForm.keyword || '';
    this.sortOrder = categorylistForm.sortOrder || 0;
    this.status = categorylistForm.status || '';
    this.name = categorylistForm.name || '';
  }
}
