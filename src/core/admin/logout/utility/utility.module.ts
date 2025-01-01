/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders<UtilityModule> {
    return {
      ngModule: UtilityModule,

      providers: []
    };
  }
}
