import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './componets/dashboard.component';
import { SumGroupMonthComponent } from './componets/sum-group-month/sum-group-month.component';


const routes: Routes = [
 {path: '', component: DashboardComponent},
 {path: 'soma-agrupada-mes', component:SumGroupMonthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
