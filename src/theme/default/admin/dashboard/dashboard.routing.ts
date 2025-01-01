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

// Component
import { DashboardComponent } from './dashboard.component';
import { StaticPageComponent } from './static-page/static-page.component';

const dashboardRoutes: Routes = 
[
  { path: '', component: DashboardComponent },
  { path: 'static', component: StaticPageComponent }

];


@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
