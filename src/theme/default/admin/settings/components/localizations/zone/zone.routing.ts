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
import {
    RouterModule,
    Routes
} from '@angular/router';

// Component
import { ZoneListComponent } from './list/list.component';
import { AuthGuard } from '../../../../../../../core/admin/providers/auth.guard';
const zoneRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: 'list', component: ZoneListComponent, canActivate: [AuthGuard],
        data: { permission: 'list-zone' }
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(zoneRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ZoneRoutingModule {
}
