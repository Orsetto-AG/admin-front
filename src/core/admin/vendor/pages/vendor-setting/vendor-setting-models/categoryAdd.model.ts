/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CategoryAddForm {
    public vendorId: number;
    public categoryId: number;
    public commission: number;

    constructor(categoryAddForm: any) {
      this.vendorId = categoryAddForm.vendorId || '';
      this.categoryId = categoryAddForm.categoryId || '';
      this.commission = categoryAddForm.commission || '';

    }
  }
