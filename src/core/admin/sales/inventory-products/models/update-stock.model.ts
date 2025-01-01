/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class UpdateStockModel {
  public productId: number;
  public hasStock: string;
  public productStock: any;



  constructor(updateModel: any) {
    this.productId = updateModel.productId || '';
    this.hasStock = updateModel.hasStock || 0;
    this.productStock = updateModel.productStock || [];
  }
}
