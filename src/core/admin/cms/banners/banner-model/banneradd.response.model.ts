/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/

export class BanneraddResponseModel {
  public bannerId: number;
  public position: number;
  public content: string;
  public image: string;
  public imagePath: string;
  public link: string;
  public title: string;
  public createdDate: string;
  public active: any;

  constructor(banneraddResponse: any) {
    this.bannerId = banneraddResponse?.bannerId || 0;
    this.position = banneraddResponse.position || 0;
    this.content = banneraddResponse.content || '';
    this.image = banneraddResponse.image || '';
    this.imagePath = banneraddResponse.imagePath || '';
    this.link = banneraddResponse.link || '';
    this.title = banneraddResponse.title || '';
    this.createdDate = banneraddResponse.createdDate || '';
    this.active = banneraddResponse.isActive;
  }
}
