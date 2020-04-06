import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/shared/modules/pipe.module';
import { FinanceiroRoutingModule } from './financeiro-routing.module';

import {FinanceiroComponent} from './componets/financeiro.component'
import {ListarProducaoComponent} from './componets/listar-producao/listar-producao.component'
import {AdicionarModeloComponent} from './componets/adicionar-modelo/adicionar-modelo.component'
@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    FinanceiroRoutingModule
  ],
  declarations: [
    FinanceiroComponent,
    ListarProducaoComponent,
    AdicionarModeloComponent
  ]
})
export class FinanceiroModule { }
