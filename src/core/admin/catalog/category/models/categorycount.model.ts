/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CategorycountForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public count: string;
  public status: boolean;
  public name: string;
  
  constructor(categorycountForm: any) {
    this.limit = categorycountForm.limit || 0;
    this.offset = categorycountForm.offset || 0;
    this.keyword = categorycountForm.keyword || '';
    this.sortOrder = categorycountForm.sortOrder || 0;
    this.count = categorycountForm.count || 1;
    this.status = categorycountForm.status || '';
    this.name = categorycountForm.name || '';

  }
}
