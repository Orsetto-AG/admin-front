/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
// angular imports 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../../../../../core/admin/providers/auth.guard';
// Component
import { LanguageListComponent } from './list/list.component';

const languageRoutes: Routes = [
  { path: '', component: LanguageListComponent, canActivate: [AuthGuard],
  data: { permission: 'list-language' } },

];

@NgModule({
  imports: [RouterModule.forChild(languageRoutes)],
  exports: [RouterModule]
})
export class LanguagesRoutingModule {}
