/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class UserResponseModel {
  public userId: number;
  public userGroupId: number;
  public isActive: number;
  public createdDate: string;
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(userFormResponse: any) {
    this.userId = userFormResponse.userId || 0;
    this.userGroupId = userFormResponse.userGroupId || 0;
    this.isActive = userFormResponse.isActive || 0;
    this.createdDate = userFormResponse.createdDate || '';
    this.username = userFormResponse.username || '';
    this.password = userFormResponse.password || '';
    this.firstName = userFormResponse.firstName || '';
    this.lastName = userFormResponse.lastName || '';
    this.email = userFormResponse.email || '';
  }
}
