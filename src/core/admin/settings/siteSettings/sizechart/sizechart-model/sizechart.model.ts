/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class SizeChartForm {
  public templateName: string;
  public header: any;

  constructor(chartForm: any) {
    this.templateName = chartForm.templateName || '';
    this.header = chartForm.header || '';
  }
}
