/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CustomersGroupModel {
    public limit: number;
    public offset: number;
    public keyword: string;
    public count: string;
    public status: number;

    constructor(customersGroupList: any) {

      this.limit = customersGroupList.limit || '';
      this.offset = customersGroupList.offset || '';
      this.count = customersGroupList.count || '';
      this.keyword = customersGroupList.keyword || '';
      if (customersGroupList.status === 0) {
        this.status = customersGroupList.status;
      } else {
        this.status = customersGroupList.status || '';
      }
    }
  }
