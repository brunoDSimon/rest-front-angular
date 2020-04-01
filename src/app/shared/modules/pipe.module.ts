import { ReaisPipe } from './../pipe/reais.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ReaisPipe
  ],
  providers:[
    ReaisPipe
  ],
  exports:[
    ReaisPipe
  ]
})
export class PipeModule { }
