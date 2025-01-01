/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CountryListResponseModel {
  public countryId: number;
  public name: string;
  public isoCode2: string;
  public postcodeRequired: string;
  public isoCode3: string;
  public isActive: number;

  constructor(listResponse: any) {
    this.countryId = listResponse.countryId || 0;
    this.name = listResponse.name || '';
    this.isoCode2 = listResponse.isoCode2 || '';
    this.postcodeRequired = listResponse.postcodeRequired || 0;
    this.isoCode3 = listResponse.isoCode3 || '';
    this.isActive = listResponse.isActive || 0;
  }
}
