/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CustomersGroupAdd {
    public name: string;
    public description: string;
    public colorcode: string;
    public status: number;

    constructor(customersGroupAdd: any) {

      this.name = customersGroupAdd.name || '';
      this.description = customersGroupAdd.description || '';
      this.colorcode = customersGroupAdd.colorcode || '';
      this.status = customersGroupAdd.status ||  '';
    }
  }
