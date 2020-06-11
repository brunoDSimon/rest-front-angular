import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/shared/modules/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule} from 'ngx-mask'
import { DatePikerComponent } from '../componets/date-piker/date-piker.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    DatePikerComponent
  ],
  exports:[
    DatePikerComponent
  ],
  providers:[

  ]
})
export class SharedModule { }
