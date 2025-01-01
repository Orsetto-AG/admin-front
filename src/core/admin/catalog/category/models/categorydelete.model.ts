/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CategorydeleteForm {
  public categoryId: number;

  constructor(categorydeleteForm: any) {
    this.categoryId = categorydeleteForm.categoryId || '';
  }
}
