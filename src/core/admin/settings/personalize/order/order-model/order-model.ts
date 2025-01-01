/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class OrderModel {
  public invoicePrefix: string;
  public orderStatus: number;
  public settingId: number;
  public siteUrl: number;
  constructor(generalsettingForm: any) {
    this.invoicePrefix = generalsettingForm.invoicePrefix || '';
    this.orderStatus = generalsettingForm.orderStatus || 0;
    this.settingId = generalsettingForm.settingId || 0;
    this.siteUrl = generalsettingForm.siteUrl || 0;
  }
}
