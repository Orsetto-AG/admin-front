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
  public count: number;

  constructor(categorylistForm: any) {
    this.limit = categorylistForm.limit || 0;
    this.offset = categorylistForm.offset || 0;
    this.count = categorylistForm.count || 0;
  }
}
