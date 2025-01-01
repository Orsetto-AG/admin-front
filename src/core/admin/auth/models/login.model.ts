/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class LoginForm {
  // Declare Default Params

  public username: String;
  public password: String;
  constructor(loginForm: any) {
    this.username = loginForm.userName || '';
    this.password = loginForm.password || '';
  }
}
