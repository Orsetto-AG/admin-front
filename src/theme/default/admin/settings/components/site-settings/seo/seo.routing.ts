/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../../../../../core/admin/providers/auth.guard';

// Component
import { SeoComponent } from './seo.component';

const seoRoutes: Routes = [{ path: '', component: SeoComponent ,
canActivate: [AuthGuard],
  data: {permission: 'edit-seo-url'} }];

@NgModule({
  imports: [RouterModule.forChild(seoRoutes)],
  exports: [RouterModule]
})
export class SeoRouting {}
