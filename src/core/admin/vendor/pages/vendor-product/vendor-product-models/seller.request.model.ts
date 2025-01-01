/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class SellerListRequest {


    public limit: number;
    public offset: number;
    public name: string;
    public email: string;
    public status: number;
    public count: number;
    public customerId: number;
    public vendorId: number;
    public approvalFlag: string;


    constructor(sellerListRequest: any) {
        this.limit = sellerListRequest.limit || 0;
        this.offset = sellerListRequest.offset || 0;
        this.name = sellerListRequest.name || '';
        this.email = sellerListRequest.email || '';
        this.status = sellerListRequest.status;
        this.count = sellerListRequest.count || 0;
        this.customerId = sellerListRequest.customerId || '';
        this.vendorId = sellerListRequest.vendorId || '';
        this.approvalFlag = sellerListRequest.approvalFlag || '';
    }
}
