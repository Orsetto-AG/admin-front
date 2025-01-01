/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class UserlistForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;

  constructor(userlistForm: any) {
    this.limit = userlistForm.limit || 0;
    this.offset = userlistForm.offset || 0;
    this.keyword = userlistForm.keyword || '';
    this.count = userlistForm.count || 0;
  }
}
