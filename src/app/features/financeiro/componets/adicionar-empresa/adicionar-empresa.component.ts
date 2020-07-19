import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {CustomValidators} from '../../../../shared/validators/custom-validators';
@Component({
  selector: 'app-adicionar-empresa',
  templateUrl: './adicionar-empresa.component.html',
  styleUrls: ['./adicionar-empresa.component.css']
})
export class AdicionarEmpresaComponent implements OnInit {
  public formGroup: FormGroup
  private _nextCreateCompanies: any;
  private _messeger: any;
  private _createCompany: boolean = false;
  private _listCompanies: any = [];
  constructor(
    private financeiroService: FinanceiroService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.getCompanies();
    this.formGroup = this.formBuilder.group({
      cnpj: ['' ,Validators.compose([Validators.required,Validators.min(11) ,CustomValidators.patternValidator(/^[0-9.]/, { hasNumber: true })])],
      companyName: ['', Validators.required],
      telephone: ['', Validators.compose([Validators.min(11), CustomValidators.patternValidator(/^[0-9.]/, { hasNumber: true }) ])],
      address: ['', Validators.required],
      number: ['', Validators.required],
      zipCode: ['', Validators.required]
    })
  }


  get nextCreateCompanies(){
    return this._nextCreateCompanies
  }
  get messeger(){
    return this._messeger;
  }
  get createCompany(){
    return this._createCompany;
  }
  get listCompanies(){
    return this._listCompanies
  }
  public openCreate(){
    this._createCompany = !this._createCompany;
  }
  public verificarCNPJ(){
    let cnpj = this.formGroup.get('cnpj').value;
    this.financeiroService.checkCompanie(cnpj).subscribe((response) =>{
      this._nextCreateCompanies = response.data;
      this._messeger = response.messege
    })
  }

  public createCompanies(){
    const body: any={
      "companyName": this.formGroup.get('companyName').value, 
      "cnpj": this.formGroup.get('cnpj').value, 
      "telephone": this.formGroup.get('telephone').value, 
      "address": this.formGroup.get('address').value, 
      "zipCode": this.formGroup.get('zipCode').value,
      "number": this.formGroup.get('number').value
    }
    this.financeiroService.createCompany(body).subscribe((res) =>{

    },(err) =>{

    }
    )
  }

  public getCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.data
    },(err) =>{
      alert('erro ao enviar')
    })
  }

}
