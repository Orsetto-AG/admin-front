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

// Component
import { GeneralSettingComponent } from './generalsettings/generalsettings.component';
import { AuthGuard } from '../../../../../../core/admin/providers/auth.guard';

const roleRoutes: Routes = [{
  path: '', component: GeneralSettingComponent,
  canActivate: [AuthGuard],
  data:
  {
    permission: 'edit-general-settings',
    urls: [{ title: 'breadcrumbs.Settings', url: '' },
      { title: 'breadcrumbs.General', url: '' },
      { title: 'breadcrumbs.Basic Information', url: '' },
    ]
  }
}];

@NgModule({
  imports: [RouterModule.forChild(roleRoutes)],
  exports: [RouterModule]
})
export class GenaeralSettingsRoutingModule { }
