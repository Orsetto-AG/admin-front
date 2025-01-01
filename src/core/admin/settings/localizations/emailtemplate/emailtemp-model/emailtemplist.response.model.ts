/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class EmailTempListResponseModel {
  public emailTemplateId: number;
  public title: string;
  public subject: string;
  public content: string;
  public isActive: number;
  dynamicFieldsRef: any;

  constructor(listResponse: any) {
    this.emailTemplateId = listResponse.emailTemplateId || 0;
    this.title = listResponse.title || '';
    this.subject = listResponse.subject || '';
    this.content = listResponse.content || '';
    this.emailTemplateId = listResponse.emailTemplateId || 0;
    this.isActive = listResponse.isActive || 0;
    this.dynamicFieldsRef = listResponse.dynamicFieldsRef || '';
  }
}
