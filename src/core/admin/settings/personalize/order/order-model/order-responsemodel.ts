/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class PersonalizeOrderResponseModel {
  public invoicePrefix: string;
  public orderStatus: number;
  public settingsId: number;
  public siteUrl:number;
  constructor(Sitesettingresponse: any) {
    this.invoicePrefix = Sitesettingresponse.invoicePrefix || '';
    this.orderStatus = Sitesettingresponse.orderStatus || 0;
    this.settingsId = Sitesettingresponse.settingsId || 0;
    this.siteUrl = Sitesettingresponse.siteUrl || 0;
    this.settingsId = Sitesettingresponse.settingsId || 0;
    this.siteUrl = Sitesettingresponse.siteUrl || 0;
  }
}
