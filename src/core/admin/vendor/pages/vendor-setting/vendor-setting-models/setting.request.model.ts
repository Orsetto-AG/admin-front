/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class SettingListRequest {


    public limit: number;
    public offset: number;
    public name: string;
    public email: string;
    public status: number;
    public count: number;
    public customerId: number;
    public keyUp:boolean;


    constructor(settingListRequest: any) {
        this.limit = settingListRequest.limit || 0;
        this.offset = settingListRequest.offset || 0;
        this.name = settingListRequest.name || '';
        this.email = settingListRequest.email || '';
        this.status = settingListRequest.status;
        this.count = settingListRequest.count || 0;
        this.customerId = settingListRequest.customerId || '';
        this.keyUp = settingListRequest.keyUp
    }
}
