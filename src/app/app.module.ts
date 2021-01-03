import { LoaderComponent } from './shared/componets/loader/loader.component';
import { PipeModule } from './shared/modules/pipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MomentModule,DateFormatPipe } from 'ngx-moment';
import { WebStorageModule } from 'ngx-store-9';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { RefrashPageComponent } from './shared/componets/refrash-page/refrash-page.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    RefrashPageComponent
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
    WebStorageModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    IonicModule.forRoot()
  ],
  entryComponents: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    RefrashPageComponent
  ],
  providers: [
    DateFormatPipe,
    LoginService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: RefrashTokenInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt'},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
