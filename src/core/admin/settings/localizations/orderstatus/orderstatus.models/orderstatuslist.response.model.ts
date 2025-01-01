/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/


export class OrderStatusListResponseModel {
  public orderStatusId: number;
  public name: string;
  public isActive: number;
  public colorCode: string;
  public priority: number;

  constructor(listResponse: any) {
    this.orderStatusId = listResponse.orderStatusId || 0;
    this.name = listResponse.name || '';
    this.isActive = listResponse.isActive || 0;
    this.colorCode = listResponse.colorCode || '';
    this.priority = listResponse.priority || '';
  }
}
