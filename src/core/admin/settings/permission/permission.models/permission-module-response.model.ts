/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class PermissionModuleModel {
  public moduleGroupId: number;
  public name: string;
  public sortOrder: number;
  public slugName: string;
  public selected: boolean;
  public moduleId: number;
  constructor(listResponse: any) {
    this.moduleGroupId = listResponse.moduleGroupId || 0;
    this.name = listResponse.name || '';
    this.sortOrder = listResponse.isActive || 0;
    this.slugName = listResponse.slugName || '';
    this.selected = false;
    this.moduleId = listResponse.moduleId || '';
}
}
