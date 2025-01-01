/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {NotfoundComponent} from './404/not-found.component';
import {ServerErrorComponent} from './500/server.error.component';

const errorRoutes: Routes = [
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: '500',
    component: ServerErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(errorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorRoutingModule {
}
