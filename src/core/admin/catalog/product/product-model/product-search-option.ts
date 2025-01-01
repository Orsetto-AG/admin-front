/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class ProductSearchOptionModel {
  public name: string;
  public optionId: number;

  constructor(productSearchResponse: any) {
    this.name = productSearchResponse.name || '';
    this.optionId = productSearchResponse.optionId || 0;
  }
}
