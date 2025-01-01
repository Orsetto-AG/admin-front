/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class BucketlistForm {
  public limit: number;
  public folderName: string;
  public marker: string;


  constructor(bucketlistForm: any) {
    this.limit = bucketlistForm.limit || 0;
    this.folderName = bucketlistForm.folderName || '';
    this.marker = bucketlistForm.marker || '';
  }
}
