import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FinanceiroComponent} from './componets/financeiro.component'
import {ListarProducaoComponent} from './componets/listar-producao/listar-producao.component'
import {AdicionarModeloComponent} from './componets/adicionar-modelo/adicionar-modelo.component'
import {AdicionarEmpresaComponent} from './componets/adicionar-empresa/adicionar-empresa.component'

const routes: Routes = [
  {path: '', component: FinanceiroComponent},
  {path: 'adicionar-modelo', component:AdicionarModeloComponent},
  {path: 'list-producao', component:ListarProducaoComponent },
  {path: 'adicionar-empresa', component: AdicionarEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceiroRoutingModule { }
