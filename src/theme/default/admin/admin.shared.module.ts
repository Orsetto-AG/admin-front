/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AdminModule } from './admin.module';
@NgModule({})
export class AdminSharedModule {
  static forRoot(): ModuleWithProviders<AdminModule> {
    return {
      ngModule: AdminModule,
      providers: []
    };
  }
}
