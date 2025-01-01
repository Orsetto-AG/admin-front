/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
// angular imports module 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { CurrencyListComponent } from './list/list.component';
import { AuthGuard } from '../../../../../../../core/admin/providers/auth.guard';

const currencyRoutes: Routes = [
  { path: '', component: CurrencyListComponent, canActivate: [AuthGuard],
  data: { permission: 'list-currency' } },
];

@NgModule({
  imports: [RouterModule.forChild(currencyRoutes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule {}
