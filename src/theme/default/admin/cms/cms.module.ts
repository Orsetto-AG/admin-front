/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCommonModule } from '../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { CMSLayoutComponent } from './components/layout/layout.component';
import { CMSHeaderComponent } from './components/header/header.component';
// Routing Module
import { CMSRoutingModule } from './cms.routing';

// Shared Module
import { MaterialModule } from '../../default.material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../shared/components';


@NgModule({
    declarations: [CMSLayoutComponent, CMSHeaderComponent],
    imports: [
        CommonModule,
        CMSRoutingModule,
        DefaultCommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        ComponentsModule
    ],
    providers: [],
    bootstrap: []
})
export class CMSModule {}
