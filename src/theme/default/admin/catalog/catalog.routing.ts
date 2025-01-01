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
import { CatalogLayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from '../../../../core/admin/providers/auth.guard';



const catalogRoutes: Routes = [
  { path: '', redirectTo: 'manage-products', pathMatch: 'full', canActivate: [AuthGuard]},
  {
    path: '',
    component: CatalogLayoutComponent,
    children: [
      {
        path: 'import',
        loadChildren: () => import('./components/import/import.module').then(m => m.ImportModule),
        canActivate: [AuthGuard],
        data: {permissionForHeader: 'catalog-import', root:'catalog'}
      },

    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(catalogRoutes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
