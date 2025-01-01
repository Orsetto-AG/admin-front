/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class PermissionForm {
  public refType: number;
  public permission: String;
  public refId: number;

  constructor(permissionForm: any) {
    this.refType = permissionForm.refType || '';
    this.permission = permissionForm.permission;
      this.refId = permissionForm.refId || '';
  }
}
