/*
 * OrsettoCommerce
 * version 4.3
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { OnlyNumberDirective } from './only-number.directive';
import { TwoDigitDecimaNumberDirective } from './two-digit-decimal-number.directive';
import { CommonSearchPipe } from './common-search.pipe';
import { NoLeadingSpaceDirective } from './no-leading-space.directive';
import { NumbersAllowedDirective } from './numbers-allowed.directive';

@NgModule({
  declarations: [OnlyNumberDirective, TwoDigitDecimaNumberDirective, CommonSearchPipe, NoLeadingSpaceDirective, NumbersAllowedDirective],
  exports: [OnlyNumberDirective, TwoDigitDecimaNumberDirective,CommonSearchPipe,NoLeadingSpaceDirective,NumbersAllowedDirective]
})
export class NumberAcceptModule { }
