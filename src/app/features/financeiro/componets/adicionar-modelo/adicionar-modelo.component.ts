import { FinanceiroService } from '../../service/financeiro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-adicionar-modelo',
  templateUrl: './adicionar-modelo.component.html',
  styleUrls: ['./adicionar-modelo.component.scss']
})
export class AdicionarModeloComponent implements OnInit {
  public formGroup: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private financeiroService: FinanceiroService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      patch: ['', Validators.required],
      amount: ['', Validators.required],
      value: ['', Validators.required],
      dateEntry: ['', Validators.required],
      companyID: [ '1', Validators.required],
      userID: ['1', Validators.required]
    })
  }


  public enviartalao(){
    let body: any= {
      "reference": this.formGroup.get('reference').value,
      "value": this.formGroup.get('value').value, 
      "amount": this.formGroup.get('amount').value, 
      "patch": this.formGroup.get('patch').value,
      "dateEntry": this.formGroup.get('dateEntry').value,
      "companyID":this.formGroup.get('companyID').value,
      "userID":this.formGroup.get('userID').value
    }
    this.financeiroService.criarTalao(body).subscribe((res) =>{
      console.log(res)
      return res
    })
  }
}
