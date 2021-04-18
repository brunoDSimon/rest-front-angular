import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { CpfCnpjValidator } from 'src/app/shared/validators/cpf-cnpj.validator.ts';
import { ToastrService } from 'ngx-toastr';
import { EventEmitterService } from 'src/app/shared/service/event-emitter.service';
@Component({
  selector: 'app-adicionar-empresa',
  templateUrl: './adicionar-empresa.component.html',
  styleUrls: ['./adicionar-empresa.component.css']
})
export class AdicionarEmpresaComponent implements OnInit {
  private _nextCreateCompanies: boolean = false;
  private _messeger: any;
  private _createCompany: boolean = false;
  private _listCompanies: any = [];
  private _sucessoCriar: boolean = false;
  private _idCompany: number = null;

  public ngbAlert = {type: null, msg: null}
  public formGroup: FormGroup;

  constructor(
    private financeiroService: FinanceiroService,
    private formBuilder: FormBuilder,
    private config: NgbModalConfig,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) {
    this.crieFormulario();
  }

  ngOnInit() {
    this.getCompanies();
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

  public crieFormulario(){
    this.formGroup = this.formBuilder.group({
      cnpj: ['' ,[Validators.required, CpfCnpjValidator.validate] ],
      companyName: ['', [Validators.required]],
      telephone: ['', [Validators.required, Validators.min(10)]],
      address: ['', [Validators.required]],
      number: ['', [Validators.required]],
      zipCode: ['', [Validators.required]]
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

  public openCreate(){
    this._createCompany = !this._createCompany;
  }

  public verificarCNPJ(){
    EventEmitterService.get('showLoader').emit();
    let cnpj = this.formGroup.get('cnpj').value;
    this.financeiroService.checkCompanie(cnpj).subscribe((response) =>{
      console.log(response)
      if (response) {
        this._nextCreateCompanies = true;
        this.formGroup.get('cnpj').disable();
      } else {
        this.toastr.error(`CNPJ EXISTENTE`);
      }
      EventEmitterService.get('hideLoader').emit();
    },(error) =>{
      this.toastr.error(`Não foi possivel verificar o CNPJ/CPF`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public open(content, aux) {
    this.formGroup.reset();
    this.modalService.open(content,{
        centered: true,
        size: 'md',
        windowClass: 'dark-modal',
      });
    this.crieFormularioEditar(aux)
    this._idCompany = aux.id;
  }

  public createCompanies(){
    EventEmitterService.get('showLoader').emit();
    const body: any = {
      "companyName": this.formGroup.get('companyName').value,
      "cnpj": this.formGroup.get('cnpj').value,
      "telephone": this.formGroup.get('telephone').value,
      "address": this.formGroup.get('address').value,
      "zipCode": this.formGroup.get('zipCode').value,
      "number": this.formGroup.get('number').value
    };
    this.financeiroService.createCompany(body).subscribe((res) =>{
      this.toastr.success(`Empresa cadastrada com sucesso`);
      this.getCompanies();
      EventEmitterService.get('hideLoader').emit();
      this.resetAll();
    },(err) =>{
      this.toastr.error(`Não foi possivel cadastrar a empresa!`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public updateCompania(){
    EventEmitterService.get('showLoader').emit();
    const body: any={
      "companyName": this.formGroup.get('companyName').value,
      "cnpj": this.formGroup.get('cnpj').value,
      "telephone": this.formGroup.get('telephone').value,
      "address": this.formGroup.get('address').value,
      "zipCode": this.formGroup.get('zipCode').value,
      "number": this.formGroup.get('number').value
    }
    this.financeiroService.updateCompany(this._idCompany,body).subscribe((res) =>{
      this.toastr.success(`Alterado com sucesso`);
      EventEmitterService.get('hideLoader').emit();
      setTimeout(() => { this.modalService.dismissAll()}, 500);
      this.getCompanies();
      this.resetAll();
    },(err) =>{
      this.toastr.error(`Não foi possivel alterar`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public getCompanies(){
    this._listCompanies = [];
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.companies;
      EventEmitterService.get('hideLoader').emit();
    },(err) =>{
      this.toastr.error(`Não foi possivel consultar as empresas`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public resetAll() {
    this._nextCreateCompanies = false;
    this.formGroup.get('cnpj').enable();
    this.formGroup.reset();
  }

  public close(){
    this.ngbAlert = {type: null, msg: null}
  }

}
