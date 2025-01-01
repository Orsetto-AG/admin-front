/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class RoleListResponseModel {
  public groupId: number;
  public name: string;
  public isActive: number;

  constructor(listResponse: any) {
    this.groupId = listResponse.groupId || 0;
    this.name = listResponse.name || '';
    this.isActive = listResponse.isActive || 0;
  }
}
