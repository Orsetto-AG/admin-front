/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit = 1000,
    completeWords = false,
    ellipsis = '....'
  ) {
    if (completeWords) {
      limit = value.substr(0, 20).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)} ${ellipsis}`;
  }
}
