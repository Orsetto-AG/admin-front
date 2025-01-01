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
import { SalesReportListComponent } from './list/list.component';
import { AuthGuard } from 'src/core/admin/providers/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list', component: SalesReportListComponent,
    canActivate: [AuthGuard],
    data: {
      permission: 'sales-report-list',
      urls: [{ title: 'breadcrumbs.Report', url: '' },
      { title: 'breadcrumbs.Sales Report', url: '' },
      { title: 'breadcrumbs.List', url: '' }]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesReportRoutingModule { }
