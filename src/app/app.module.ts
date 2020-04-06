import { PipeModule } from './shared/modules/pipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxWebstorageModule} from 'ngx-webstorage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanceiroComponent } from './features/financeiro/financeiro.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { AdicionarModeloComponent } from './features/financeiro/adicionar-modelo/adicionar-modelo.component';
import { ListarProducaoComponent } from './features/financeiro/listar-producao/listar-producao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";


@NgModule({
  declarations: [
    AppComponent,
    FinanceiroComponent,
    HeaderComponent,
    FooterComponent,
    AdicionarModeloComponent,
    ListarProducaoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NgxCurrencyModule,
    PipeModule,
    NgxWebstorageModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
