import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateStruct } from 'src/app/shared/models/date-struct.model';
import * as moment from 'moment';
import { FinanceiroService } from '../../service/financeiro.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { DateFormatPipe } from 'ngx-moment';
import { CustomValidators } from 'ngx-custom-validators';
import { EventEmitterService } from 'src/app/shared/service/event-emitter.service';
import { ToastrService } from 'ngx-toastr';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-producao-funcionario',
  templateUrl: './producao-funcionario.component.html',
  styleUrls: ['./producao-funcionario.component.scss']
})
export class ProducaoFuncionarioComponent implements OnInit {
  public formGroup: FormGroup;
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate(),
    period: 30,
    custom: true,
    label: ''
  };
  private _listUser: any =[];
  private _listCompanies: any =[];
  private _listProducao: any =[];
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYear: any[] = [];
  private _name: any;
  private _nameCompany: any;
  private _error: any;
  private _valorTotal: any;
  private _totalBolsas: any;
  private _totalDescont: any;

  constructor(
    private financeiroService: FinanceiroService,
    private companiesData: CompaniesDataService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,
    private toastr: ToastrService,
    private file: File,
    private platform: Platform,
    private fileOpener: FileOpener
  ) {
    this._date ={
      fromDate: moment(moment().toDate()).subtract(30, 'days').toDate(),
      toDate: moment(moment().toDate()).subtract(1, 'days').toDate(),
      period: 30,
      custom: true,
      label: '30 dias'
    }
   }

  ngOnInit(){
    this.crieFormulario();
    this.getListUser();
    this.getListCompanies();
  }

  get init(): any {
    return this._date;
  }

  get totalDescont(){
    return this._totalDescont;
  }


  get listUser(){
    return this._listUser
  }

  get name(){
    return this._name;
  }

  get nameCompany(){
    return this._nameCompany
  }

  get listCompanies(){
    return this._listCompanies;
  }

  get listProducao(){
    return this._listProducao;
  }

  get totalBolsas(){
    return this._totalBolsas
  }

  get valorTotal(){
    return this._valorTotal;
  }

  get error(){
    return this._error;
  }

  get valueFormat (){
    if (this.formGroup.get('dateFinalNotNul').value) {
      return 'Itens em aberto'
    } else {
      return 'Itens fechados'
    }
  }

  public alterarPeriodo(datas){
    this._date = datas
  }


  public crieFormulario(){
    this.formGroup = this.formBuilder.group({
      userID: new FormControl(this._listUser,Validators.required),
      descont: ['',[ Validators.required]],
      dateFinalNotNul: [false,[]]
    })
  }


  public getListUser(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUser = res.user;
      EventEmitterService.get('hideLoader').emit();
    }, (err) => {
      this.toastr.error(`Falha interna`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public getListCompanies(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.companies;
      EventEmitterService.get('hideLoader').emit();
    }, (err: Error) => {
      this.toastr.error(`Falha interna`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public getProducao(){
    EventEmitterService.get('showLoader').emit();
    this._listProducao = [];
    this._valorTotal = null;
    this._totalBolsas = null;
    this._totalDescont = null;

    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const userID = this.formGroup.get('userID').value.id;
    const descont = this.formGroup.get('descont').value;
    console.log(this.formGroup.get('descont').value)
    const dateFinalNotNul = this.formGroup.get('dateFinalNotNul').value;
    console.log(dateEntry, dateFinal, userID, descont)

    this.financeiroService.getValoresFuncionario(userID,dateEntry,dateFinal,descont,dateFinalNotNul).subscribe((res) =>{
      this._listProducao = res.data.bead;
      this._valorTotal = res.data.sumValueTotal;
      this._totalBolsas = res.data.sumBags;
      this._totalDescont = res.data.descont;
      EventEmitterService.get('hideLoader').emit();
    }, (err) => {
      this._error = err.message;
      EventEmitterService.get('hideLoader').emit();
      this.toastr.error(`Falha interna`);
    } )
  }

  public pdf(res,dateEntry,dateFinal){

    const linkSource = 'data:application/pdf;base64,' +`${res}`;
    const downloadLink = document.createElement("a");
    const fileName =`${dateEntry}_a_+${dateFinal}.pdf`;
    if(this.platform.is('desktop')) {
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    } else {
      this.saveAndOpenPdf(linkSource, fileName)
    }

    EventEmitterService.get('hideLoader').emit();
  }

  public geratePaymentUser(){
    EventEmitterService.get('showLoader').emit();
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const userID = this.formGroup.get('userID').value.id;
    const descont = this.formGroup.get('descont').value;
    console.log(dateEntry,dateFinal,userID,descont)
    this.financeiroService.geratePaymentUser(userID,dateEntry, dateFinal,descont).subscribe((res) =>{
     this.pdf(res.data.base64,dateEntry,dateFinal);
    },(error) =>{
      console.log(error);
      EventEmitterService.get('hideLoader').emit();
      this.toastr.error(`Não foi possivel gerar o pdf ${error}`);
    })
  }
  convertBase64ToBlob(b64Data, contentType): Blob {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
         const slice = byteCharacters.slice(offset, offset + sliceSize);
         const byteNumbers = new Array(slice.length);
         for (let i = 0; i < slice.length; i++) {
             byteNumbers[i] = slice.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
         byteArrays.push(byteArray);
    }
   return new Blob(byteArrays, {type: contentType});
  }

  saveAndOpenPdf(pdf: string, filename: string) {
    const writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
    this.file.writeFile(writeDirectory, filename, this.convertBase64ToBlob(pdf, 'data:application/pdf;base64'), {replace: true})
      .then(() => {
        this.fileOpener.open(writeDirectory + filename, 'application/pdf')
            .catch(() => {
                this.toastr.error('Error opening pdf file');
            });
      })
      .catch(() => {
        this.toastr.error('Error writing pdf file');
      });
  }
}
