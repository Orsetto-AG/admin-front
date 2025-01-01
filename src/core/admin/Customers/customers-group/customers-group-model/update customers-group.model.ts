/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class UpdateCustomersGroup {
    public name: string;
    public description: string;
    public colorcode: string;
    public status: number;
    public id: number;

    constructor(updateCustomersGroup: any) {

      this.name = updateCustomersGroup.name || '';
      this.description = updateCustomersGroup.description || '';
      this.colorcode = updateCustomersGroup.colorcode || '';
      this.status = updateCustomersGroup.status || '';
      this.id = updateCustomersGroup.id || '';
    }
  }
