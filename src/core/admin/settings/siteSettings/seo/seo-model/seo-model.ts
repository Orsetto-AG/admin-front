/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class SeoModel {
  public metaTagTitle: string;
  public metaTagDescription: string;
  public metaTagKeywords: string;
  public settingId:number;
  public siteUrl:number;

  constructor(generalsettingForm: any) {
    this.metaTagTitle = generalsettingForm.metaTagTitle || '';
    this.metaTagDescription = generalsettingForm.metaTagDescription || '';
    this.metaTagKeywords = generalsettingForm.metaTagKeywords || '';
    this.settingId = generalsettingForm.settingId || 0;
    this.siteUrl = generalsettingForm.siteUrl || 0;
  }
}
