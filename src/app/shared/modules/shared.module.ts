import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/shared/modules/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule} from 'ngx-mask'
import { DatePikerComponent } from '../componets/date-piker/date-piker.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MessengerDadosComponent } from '../componets/messenger-dados/messenger-dados.component';
import { MessengerErrorComponent } from '../componets/messenger-error/messenger-error.component';
import { DatePikerListPrevComponent } from '../componets/date-piker-list-prev/date-piker-list-prev.component'
import { BreadcrumbComponent } from '../componets/breadcrumb/breadcrumb.component';
import { ListaProducaoComponent } from '../componets/lista-producao/lista-producao.component';
import { ListaProducaoResponsiveComponent } from '../componets/lista-producao-responsive/lista-producao-responsive.component';
@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    NgxCurrencyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgbModule,
  ],
  declarations: [
    DatePikerComponent,
    MessengerDadosComponent,
    MessengerErrorComponent,
    DatePikerListPrevComponent,
    BreadcrumbComponent,
    ListaProducaoComponent,
    ListaProducaoResponsiveComponent
  ],
  exports:[
    DatePikerComponent,
    MessengerDadosComponent,
    MessengerErrorComponent,
    DatePikerListPrevComponent,
    BreadcrumbComponent,
    ListaProducaoComponent,
    ListaProducaoResponsiveComponent

  ],
  providers:[

  ]
})
export class SharedModule { }
