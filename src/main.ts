/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AdminModule } from './theme/default/admin/admin.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  if (window) {
    window.console.log = function() {};
  }
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AdminModule)
    .catch(err => console.log(err));
});
