/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class ChangePasswordForm {
  public oldPassword: String;
  public newPassword: String;

  constructor(changePasswordForm: any) {
    this.oldPassword = changePasswordForm.oldpsw || '';
    this.newPassword = changePasswordForm.newpsw || '';
  }
}
