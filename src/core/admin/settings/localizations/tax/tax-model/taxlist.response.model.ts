/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class TaxListResponseModel {
  public taxId: string;
  public title: string;
  public value: string;
  public isActive: number;

  constructor(listResponse: any) {
    this.taxId = listResponse.taxId || '';
    this.title = listResponse.taxName || '';
    this.value = listResponse.taxPercentage || '';
    this.isActive = listResponse.taxStatus || 0;
  }
}
