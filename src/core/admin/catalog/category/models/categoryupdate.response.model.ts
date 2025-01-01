/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CategoryupdateResponseModel {
  public user: any = {};

  constructor(categoryupdateFormResponse: any) {
    this.user = categoryupdateFormResponse || '';
  }
}
