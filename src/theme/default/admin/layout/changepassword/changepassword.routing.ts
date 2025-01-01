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
import { ChangePasswordComponent } from './changepassword.component';

const changePasswordRoutes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent, data: {
      urls: [{ title: 'breadcrumbs.Settings', url: '' },
      { title: 'breadcrumbs.Change Password', url: '' },
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(changePasswordRoutes)],
  exports: [RouterModule]
})
export class ChangePasswordRouting { }
