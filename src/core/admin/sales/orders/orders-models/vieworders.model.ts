/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class ViewordersModel {
  public orderId: Number;
  public orderStatusId: string;


  constructor(Vieworders: any) {
    this.orderId = Vieworders.orderId || '';
    this.orderStatusId = Vieworders.orderStatusId || '';
  }
}
