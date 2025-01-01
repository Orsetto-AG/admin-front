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
import { SocialComponent } from './social.components';
import { AuthGuard } from '../../../../../../../core/admin/providers/auth.guard';

// Component

const socialRoutes: Routes = [{ path: '', component: SocialComponent}];

@NgModule({
  imports: [RouterModule.forChild(socialRoutes)],
  exports: [RouterModule]
})
export class SocialRouting {}
