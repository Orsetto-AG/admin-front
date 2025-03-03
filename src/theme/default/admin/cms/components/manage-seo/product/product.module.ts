import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DefaultCommonModule } from 'src/theme/default/default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/theme/default/default.material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/theme/default/admin/admin.module';
import { HttpClient } from '@angular/common/http';
import { NumberAcceptModule } from 'src/core/admin/shared/validation-directives/onlyNumber.module';
import { PasswordShowModule } from 'src/core/admin/shared/password-show.directives/passwordShow.module';
import { ProductSeoComponents } from '../../../../../../../../add-ons/add-ons.constant';
import { ComponentsModule } from 'src/theme/default/admin/shared/components';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [...ProductSeoComponents],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentsModule,
    DefaultCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule,
    MatNativeDateModule,
    // matDatepickerFilter,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule, 
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NumberAcceptModule,
    PasswordShowModule
  ]
})
export class ProductModule { }
