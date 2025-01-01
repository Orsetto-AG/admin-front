/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class CustomersGroupListResponseModel {

    public limit: number;
    public offset: number;
    public keyword: number;
    public groupName: string;
    public count: string;
    public status: string;


    constructor(customersGroupListResponseModel: any) {
        this.limit = customersGroupListResponseModel.limit || '';
        this.offset = customersGroupListResponseModel.offset || '';
        this.keyword = customersGroupListResponseModel.keyword || '';
        this.count = customersGroupListResponseModel.count || '';
        this.groupName = customersGroupListResponseModel.groupName || '';
        this.status = '';
    }
}
