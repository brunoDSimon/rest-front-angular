import { PipeModule } from './shared/modules/pipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MomentModule,DateFormatPipe } from 'ngx-moment';
import { WebStorageModule } from 'ngx-store-9';

import { NgxMaskModule} from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { LoginService } from './features/login/service/login.service';
import { TokenInterceptor } from './features/login/interceptor/token.interceptor';
import { RefrashTokenInterceptor } from './features/login/interceptor/RefrashToken.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxCurrencyModule,
    PipeModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot(),
    MomentModule,
    WebStorageModule


  ],
  providers: [
    DateFormatPipe,
    LoginService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: RefrashTokenInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
