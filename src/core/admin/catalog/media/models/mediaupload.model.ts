/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class MediauploadForm {
  public image: String;
  public path: string;
  public fileName: string;

  constructor(mediaupload: any) {
    this.image = mediaupload.imageName || '';
    this.path = mediaupload.path || '';
  
    this.fileName = mediaupload.fileName || '';
  }
}
