/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class LogoutResponseModel {
  public user: any = {};

  constructor(logoutFormResponse: any) {
    this.user = logoutFormResponse || '';
  }
}
