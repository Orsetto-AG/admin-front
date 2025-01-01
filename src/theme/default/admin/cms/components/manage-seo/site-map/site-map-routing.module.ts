import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteSeoRoutes } from '../../../../../../../../add-ons/add-ons.constant';

const routes: Routes = [...SiteSeoRoutes];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteMapRoutingModule { }
