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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";

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
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  declarations: [
    DatePikerComponent,
    MessengerDadosComponent
  ],
  exports:[
    DatePikerComponent,
    MessengerDadosComponent
  ],
  providers:[

  ]
})
export class SharedModule { }
