import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-adicionar-empresa',
  templateUrl: './adicionar-empresa.component.html',
  styleUrls: ['./adicionar-empresa.component.css']
})
export class AdicionarEmpresaComponent implements OnInit {
  public formGroup: FormGroup;
  private _nextCreateCompanies: any;
  private _messeger: any;
  private _createCompany: boolean = false;
  private _listCompanies: any = [];
  private _sucessoCriar: boolean = false;
  private _idCompany: number = null;
  constructor(
    private financeiroService: FinanceiroService,
    private formBuilder: FormBuilder,
    private config: NgbModalConfig,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getCompanies();
    this.crieFormulario()
  }

  public crieFormulario(){
    this.formGroup = this.formBuilder.group({
      cnpj: ['' ,Validators.required],
      companyName: ['', Validators.required],
      telephone: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      zipCode: ['', Validators.required]
    })
  }
  public crieFormularioEditar(aux){
    this.formGroup.get('cnpj').setValue(aux.cnpj);
    this.formGroup.get('companyName').setValue(aux.companyName);
    this.formGroup.get('telephone').setValue(aux.telephone);
    this.formGroup.get('address').setValue(aux.address);
    this.formGroup.get('number').setValue(aux.number);
    this.formGroup.get('zipCode').setValue(aux.zipCode);
  }
  get sucessoCriar(){
    return this._sucessoCriar
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

  public open(content, aux) {
    console.log(aux)
    this.modalService.open(content);
    this.crieFormularioEditar(aux)
    this._idCompany = aux.id;
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
    console.log(body)
    this.financeiroService.createCompany(body).subscribe((res) =>{
      console.log(res)
      this._sucessoCriar = true;
      setTimeout((sucessoCriar) => {
        this.formGroup.get('companyName').setValue('')
        this.formGroup.get('cnpj').setValue('')
        this.formGroup.get('telephone').setValue('')
        this.formGroup.get('address').setValue('')
        this.formGroup.get('zipCode').setValue('')
        this.formGroup.get('number').setValue('')
        this._sucessoCriar = false
      }, 10000);
    },(err) =>{
      console.log(err)
    })
  }

  public updateCompania(){
    const body: any={
      "companyName": this.formGroup.get('companyName').value,
      "cnpj": this.formGroup.get('cnpj').value,
      "telephone": this.formGroup.get('telephone').value,
      "address": this.formGroup.get('address').value,
      "zipCode": this.formGroup.get('zipCode').value,
      "number": this.formGroup.get('number').value
    }
    console.log(body)
    this.financeiroService.updateCompany(this._idCompany,body).subscribe((res) =>{
      console.log(res)
      this._sucessoCriar = true;
      setTimeout((sucessoCriar) => {
        this.formGroup.get('companyName').setValue('')
        this.formGroup.get('cnpj').setValue('')
        this.formGroup.get('telephone').setValue('')
        this.formGroup.get('address').setValue('')
        this.formGroup.get('zipCode').setValue('')
        this.formGroup.get('number').setValue('')
        this._sucessoCriar = false
        this._idCompany = null;
        this.modalService.dismissAll()
      }, 10000);
    },(err) =>{
      console.log(err)
    })
  }
  public getCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.data.companies
    },(err) =>{
      alert('erro ao enviar')
    })
  }

}
