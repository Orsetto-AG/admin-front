/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class OrderstatusForm {
  public name: String;
  public status: number;
  public id: number;
  public colorCode: string;
  public priority: number;

  constructor(OrderstatuForm: any) {
    this.name = OrderstatuForm.name || '';
    this.status = OrderstatuForm.status || 0;
    this.colorCode = OrderstatuForm.colorcode || '';
    if (OrderstatuForm.orderStatusId) {
      this.id = OrderstatuForm.orderStatusId || '';
    }
    this.priority = OrderstatuForm.priority || '';
  }
}
