/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class CatlistForm {
    public limit: number;
    public offset: number;
    public count: number;
    public vendorId: number;
    constructor(catlistForm: any) {
      this.limit = catlistForm.limit || '';
      this.offset = catlistForm.offset || '';
      this.count = catlistForm.count || '';
      this.vendorId = catlistForm.vendorId || '';
    }
  }
