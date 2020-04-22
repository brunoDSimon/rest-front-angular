import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'financeiro',
    loadChildren: () => import('./features/financeiro/financeiro.module').then(m => m.FinanceiroModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    redirectTo: 'financeiro',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'financeiro',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
