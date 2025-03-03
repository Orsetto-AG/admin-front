/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CustomersGroupList {
    public limit: number;
    public offset: number;
    public keyword: string;
    public count: string;
    public status: string;
    public groupId: string;
    public id: number;
    public groupName: string;


    constructor(customersGroupList: any) {

      this.limit = customersGroupList.limit || 0;
      this.offset = customersGroupList.offset || 0;
      this.keyword = customersGroupList.keyword || '';
      this.count = customersGroupList.count || 0;
      this.status = customersGroupList.status || '';
      this.groupName = customersGroupList.groupName || '';
      if (customersGroupList.groupId) {
        this.id = customersGroupList.groupId || 0;
      }


    }
  }
