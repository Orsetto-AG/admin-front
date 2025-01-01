/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { ToggleDirective } from './password-show.directive';

@NgModule({
  declarations: [ToggleDirective],
  exports: [ToggleDirective]
})
export class PasswordShowModule {}
