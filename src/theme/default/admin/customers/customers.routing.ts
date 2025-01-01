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
import { CustomerLayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from '../../../../core/admin/providers/auth.guard';


const customersRoutes: Routes = [
  { path: '', redirectTo: 'manage-customers', pathMatch: 'full' },
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: 'manage-customers',
        loadChildren: () => import('./components/manage-customers/manage-customers.module').then(m => m.ManageCustomersModule),
        canActivate: [AuthGuard],
        data: { permissionForHeader: 'buyers-data', root: 'buyers' }
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
