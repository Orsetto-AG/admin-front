/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class ApprovalRequest {


    public vendorId: number;
    public approvalFlag: number;

     constructor(approvalRequest: any) {
         this.vendorId = approvalRequest.vendorId || '';
         this.approvalFlag = approvalRequest.approvalFlag || 1;
     }
 }
