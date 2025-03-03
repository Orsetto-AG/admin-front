/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CustomersGroupDelete {
  public groupId: number;
  public id: number;

  constructor(customersGroupDelete: any) {
    this.groupId = customersGroupDelete.groupId || '';
    this.id = customersGroupDelete.id || '';
    if (customersGroupDelete.groupId) {
      this.id = customersGroupDelete.groupId || '';
    }
  }
}
