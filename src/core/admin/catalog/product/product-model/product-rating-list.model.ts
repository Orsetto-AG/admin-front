/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class ProductRatingListModel {
  public limit: number;
  public offset: number;
  public productId: number;
  public count: string;

  constructor(fromProductRatingList: any) {
    this.limit = fromProductRatingList.limit || 0;
    this.offset = fromProductRatingList.offset || 0;
    this.productId = fromProductRatingList.productId || 0;
    this.count = fromProductRatingList.count || 0;
  }
}
