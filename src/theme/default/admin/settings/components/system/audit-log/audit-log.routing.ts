/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditLogComponent } from './audit-log.component';
import { AuthGuard } from '../../../../../../../core/admin/providers/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list', component: AuditLogComponent,
    canActivate: [AuthGuard],
    data: {
      permission: 'audit-log',
      urls: [{ title: 'breadcrumbs.Reports', url: '' },
      { title: 'breadcrumbs.Audit Logs', url: '' },
      { title: 'breadcrumbs.List', url: '' }]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditLogRoutingModule { }
