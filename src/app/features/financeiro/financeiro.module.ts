import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/shared/modules/pipe.module';
import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { HttpClientModule } from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { NgxMaskModule} from 'ngx-mask'

import {FinanceiroComponent} from './componets/financeiro.component'
import {ListarProducaoComponent} from './componets/listar-producao/listar-producao.component'
import {AdicionarModeloComponent} from './componets/adicionar-modelo/adicionar-modelo.component'
import {AdicionarEmpresaComponent} from './componets/adicionar-empresa/adicionar-empresa.component'
@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    FinanceiroRoutingModule,
    NgxCurrencyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    NgxMaskModule.forRoot()


  ],
  declarations: [
    FinanceiroComponent,
    ListarProducaoComponent,
    AdicionarModeloComponent,
    AdicionarEmpresaComponent
  ]
})
export class FinanceiroModule { }
