/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class PagesupdateModel {
  public title: string;
  public content: string;
  public active: number;
  public count: number;
  public pageId: number;
  public metaTagTitle: string;
  public metaTagContent: string;
  public metaTagKeyword: string;

  constructor(PagesUpdateForm: any) {
    this.title = PagesUpdateForm.title || '';
    this.content = PagesUpdateForm.content || '';
    this.active = PagesUpdateForm.active || 0;
    this.pageId = PagesUpdateForm.pageId || 0;
    this.metaTagTitle = PagesUpdateForm.metaTagTitle || '';
    this.metaTagContent = PagesUpdateForm.metaTagContent || '';
    this.metaTagKeyword = PagesUpdateForm.metaTagKeyword || '';
    if (PagesUpdateForm.bannerId) {
      this.pageId = PagesUpdateForm.pageId || 0;
    }
  }
}
