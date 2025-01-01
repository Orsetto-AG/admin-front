/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class EmailTempForm {
  public title: String;
  public subject: string;
  public content: String;
  public status: number;
  public Id: number;
  public dynamicFieldsRef:string;

  constructor(emailtempForm: any) {
    this.title = emailtempForm.title || '';
    this.subject = emailtempForm.subject || '';
    this.content = emailtempForm.content || '';
    this.status = emailtempForm.status || 0;
    this.dynamicFieldsRef = emailtempForm.dynamicFieldsRef || '';
    if (emailtempForm && emailtempForm.id) {
      this.Id = emailtempForm.id || 0;
    }
  }
}
