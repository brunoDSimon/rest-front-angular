import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/shared/modules/pipe.module';
import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { HttpClientModule } from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { NgxMaskModule} from 'ngx-mask'
import { CustomFormsModule } from 'ngx-custom-validators';

import {FinanceiroComponent} from './componets/financeiro.component'
import {ListarProducaoComponent} from './componets/listar-producao/listar-producao.component'
import {AdicionarModeloComponent} from './componets/adicionar-modelo/adicionar-modelo.component'
import {AdicionarEmpresaComponent} from './componets/adicionar-empresa/adicionar-empresa.component'
import { SharedModule } from 'src/app/shared/modules/shared.module';
import {GeneratePdfEmpresaComponent} from './componets/generate-pdf-empresa/generate-pdf-empresa.component'
import { CardTotalizadorComponent } from './componets/card-totalizador/card-totalizador.component';
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
    NgxMaskModule.forRoot(),
    SharedModule,
    CustomFormsModule,
  ],
  declarations: [
    FinanceiroComponent,
    ListarProducaoComponent,
    AdicionarModeloComponent,
    AdicionarEmpresaComponent,
    GeneratePdfEmpresaComponent,
    CardTotalizadorComponent
  ]
})
export class FinanceiroModule { }
