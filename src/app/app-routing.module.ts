import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  {
    path: 'financeiro',
    loadChildren: () => import('./features/financeiro/financeiro.module').then(m => m.FinanceiroModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
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
