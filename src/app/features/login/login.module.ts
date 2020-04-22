import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ngx-custom-validators';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { PipeModule } from 'src/app/shared/modules/pipe.module';

import { LoginComponent } from './componets/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    NgxCurrencyModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    NgxMaskModule.forRoot(),
    SharedModule,
    CustomFormsModule,  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
