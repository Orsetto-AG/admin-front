/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class ProductListModel {
    public limit: number;
    public offset: number;
    public keywords: string;
    public status: number;
    public price: string;
    public count: number;
    public manufacturerId: number;
    public vendorId: number;

    constructor(fromProductList: any) {
      this.limit = fromProductList.limit || 0;
      this.offset = fromProductList.offset || 0;
      this.keywords = fromProductList.keywords || '';
      this.status = fromProductList.status || 0;
      this.price = fromProductList.price || 0;
      this.count = fromProductList.count || false;
      this.manufacturerId = fromProductList.manufacturerId || '';
      this.vendorId = fromProductList.vendorId || '';
    }
  }
