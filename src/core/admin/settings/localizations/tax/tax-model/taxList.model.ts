/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class TaxListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public status: number;
  public count: number;

  constructor(taxlistForm: any) {
    this.limit = taxlistForm.limit || 0;
    this.offset = taxlistForm.offset || 0;
    this.keyword = taxlistForm.keyword || '';
    this.count = taxlistForm.count || 0;
    this.status = taxlistForm.status || '';
  }
}
