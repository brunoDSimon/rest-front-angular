import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './componets/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PipeModule } from 'src/app/shared/modules/pipe.module';
import { NgxCurrencyModule } from 'ngx-currency';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CustomFormsModule } from 'ngx-custom-validators';
import { SumGroupMonthComponent } from './componets/sum-group-month/sum-group-month.component';
import { SumGroupCompaniesComponent } from './componets/sum-group-companies/sum-group-companies.component';
import { SumGroupMonthCompaniesComponent } from './componets/sum-group-month-companies/sum-group-month-companies.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PipeModule,
    NgxCurrencyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    CustomFormsModule,
  ],
  declarations: [
    DashboardComponent,
    SumGroupMonthComponent,
    SumGroupCompaniesComponent,
    SumGroupMonthCompaniesComponent
  ]
})
export class DashboardModule { }
