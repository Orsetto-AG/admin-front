/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class CategoryupdateForm {
  public vendorId: number;
  public categoryId: number;
  public commission: number;
  public vendorCategoryId: number;

  constructor(categoryupdateForm: any) {
    this.vendorId = categoryupdateForm.vendorId || '';
    this.categoryId = categoryupdateForm.categoryId || '';
    this.commission = categoryupdateForm.commission || '';
    this.vendorCategoryId = categoryupdateForm.vendorCategoryId || '';
  }
}
