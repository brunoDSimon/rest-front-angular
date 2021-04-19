import { ReaisPipe } from './../pipe/reais.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesAnoPipe } from '../pipe/mes-ano.pipe';
import { CpfCnpjValidatorDirective } from '../directive/CpfCnpjValidatorDirective.directive';
import { PercentageMaskDirective } from '../directive/percentage-mask.directive';


@NgModule({
  declarations: [
    ReaisPipe,
    MesAnoPipe,
    CpfCnpjValidatorDirective,
    PercentageMaskDirective
   ],
  providers:[
    ReaisPipe,
    MesAnoPipe,
    CpfCnpjValidatorDirective,
    PercentageMaskDirective
  ],
  exports:[
    ReaisPipe,
    MesAnoPipe,
    CpfCnpjValidatorDirective,
    PercentageMaskDirective
  ]
})
export class PipeModule { }
