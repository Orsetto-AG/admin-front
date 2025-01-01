/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class EmailTempListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;

  constructor(emailtemplistForm: any) {
    this.limit = emailtemplistForm.limit || 0;
    this.offset = emailtemplistForm.offset || 0;
    this.keyword = emailtemplistForm.keyword || '';
    this.count = emailtemplistForm.count || 0;
  }
}
