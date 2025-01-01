/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CountryListForm {
    public limit: number;
    public offset: number;
    public keyword: string;
    public sortOrder: string;
    public count: number;
    public status: number;

    constructor(countrylistForm: any) {
      this.limit = countrylistForm.limit || 0;
      this.offset = countrylistForm.offset || 0;
      this.keyword = countrylistForm.keyword || '';
      this.count = countrylistForm.count || 0;
      this.status = countrylistForm.status;

    }
  }
