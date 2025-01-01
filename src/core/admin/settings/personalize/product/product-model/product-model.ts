/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class ProductModel {
  public categoryProductCount: number;
  public itemsPerPage: number;
  public siteUrl: number;
  public settingId: number;
  constructor(generalsettingForm: any) {
    this.categoryProductCount = generalsettingForm.categoryProductCount || 0;
    this.itemsPerPage = generalsettingForm.itemPage || 10;
    this.siteUrl = generalsettingForm.siteUrl || 0;
    this.settingId = generalsettingForm.settingId || 0;
  }
}
