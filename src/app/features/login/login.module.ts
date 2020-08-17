import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ngx-custom-validators';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { PipeModule } from 'src/app/shared/modules/pipe.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { LoginComponent } from './componets/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    NgxCurrencyModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    CustomFormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
<<<<<<< HEAD

=======
>>>>>>> a705155c9025ad5ba59932deb759f6435af80891
})
export class LoginModule { }
