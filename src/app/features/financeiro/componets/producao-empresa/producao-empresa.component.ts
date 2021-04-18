import { Component, OnInit,Input, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormatPipe } from 'ngx-moment';
import * as moment from 'moment';
import { DateStruct } from 'src/app/shared/models/date-struct.model';
import html2canvas from 'html2canvas';
import html2PDF from 'jspdf-html2canvas';
import { EventEmitterService } from 'src/app/shared/service/event-emitter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producao-empresa',
  templateUrl: './producao-empresa.component.html',
  styleUrls: ['./producao-empresa.component.scss']
})
export class ProducaoEmpresaComponent implements OnInit {
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  public formGroup: FormGroup;
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate(),
    period: 30,
    custom: true,
    label: ''
  };
  private _listUser: any = [];
  private _listCompanies: any = [];
  private _listProducao: any = [];
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYear: any[] = [];
  private _name: any;
  private _nameCompany: any;
  private _error: any;
  private _valorTotal: number;
  private _totalBolsas: number;
  private _openCompany: boolean = true;
  private _openFuncionario: boolean = false;
  private _url: any;
  private sizeWidth: any;
  private sizeHeigth: any ;
  private _showSize: boolean = false;
  public ngbAlert = {type: null, msg: null}
  constructor(
    private financeiroService: FinanceiroService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,
    private toastr: ToastrService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) {
    this.crieFormulario();
    this._date ={
      fromDate: moment(moment().toDate()).subtract(30, 'days').toDate(),
      toDate: moment(moment().toDate()).subtract(1, 'days').toDate(),
      period: 30,
      custom: true,
      label: '30 dias'
    }
  }

  ngOnInit() {
    this.sizeWidth  = window.innerWidth;
    this.sizeHeigth = window.innerHeight;
    this.getListCompanies();
    this.getListUser();
  }
  get init(): any { return this._date; }

  get openCompany(){
    return this._openCompany;
  }

  get openFuncionario(){
    return this._openFuncionario
  }

  get year(){
    return this._listYear;
  }

  get currentYear(){
    return this._currentYear
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

  get value(){
    return this.formGroup.get('dateFinalNotNul').value
  }

  get valueFormat (){
    if (this.formGroup.get('dateFinalNotNul').value) {
      return 'Itens em aberto'
    } else {
      return 'Itens fechados'
    }
  }

  get showSize() {
    return this._showSize;
  }

  public alterarPeriodo(datas){
    console.log(datas)
    this._date = datas
  }

  public crieFormulario(){
    this.formGroup = this.formBuilder.group({
      companyID: new FormControl(this._listCompanies, Validators.required),
      dateFinalNotNul: [false,[]]
    })
  }

  public changeFilterName(name){
    this._name = name;
  }
  public changeFilterCompanyName(companyName){
    this._nameCompany = companyName
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
      this._listCompanies =res.companies;
      EventEmitterService.get('hideLoader').emit();
    }, (err) => {
      this.toastr.error(`Falha interna`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public getProducao(){
    EventEmitterService.get('showLoader').emit();
    this._listProducao = [];
    this._valorTotal = null;
    this._totalBolsas = null;
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const companyID = this.formGroup.get('companyID').value.id;
    const dateFinalNotNul = this.formGroup.get('dateFinalNotNul').value;
    // console.log(dateEntry, dateFinal, userID, companyID)
    this.financeiroService.getTalao(dateEntry,dateFinal,companyID,dateFinalNotNul).subscribe((res) =>{
      this._listProducao = res.data.bead;
      this._valorTotal = res.data.sumValueTotal;
      this._totalBolsas = res.data.sumBags;
      EventEmitterService.get('hideLoader').emit();
    }, (err) => {
      this.toastr.error(`Falha interna`);
      EventEmitterService.get('hideLoader').emit();
    } )
  }


  public gerarPdf(){
    EventEmitterService.get('showLoader').emit();
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const companyID = this.formGroup.get('companyID').value.id;

    this.financeiroService.getPdf(dateEntry, dateFinal,companyID).subscribe((res) =>{

     const linkSource = 'data:application/pdf;base64,' +`${res.base64}`;
     const downloadLink = document.createElement("a");
     const fileName = 'relatorio_de_pagamento.pdf';
     downloadLink.href = linkSource;
     downloadLink.download = fileName;
     downloadLink.click();
     EventEmitterService.get('hideLoader').emit();

    },(error) =>{
      this.ngbAlert.msg = error
      this.ngbAlert.type = 'danger';
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public close(){
    this.ngbAlert = {type: null, msg: null}
  }

  public url(aux){
    let url = `/financeiro/saida/${aux}`
    return url
  }

  public setWidth() {
    this._showSize = true;
    console.log(this._showSize)
    setTimeout(() => { this.downloadImage()}, 200);
  }

  public downloadImage() {
    const defaultOptions = {
      jsPDF: {
        unit: 'px',
        format: 'a4',
      },
      html2canvas: {
        imageTimeout: 15000,
        logging: true,
        useCORS: false,
      },
      imageType: 'image/jpeg',
      imageQuality: 1,
      margin: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 5,
      },
      output: 'jspdf-generate.pdf',
      init: function() {},
      success: function(pdf) {
        var blob = pdf.output();
        window.open(URL.createObjectURL(blob));
        // pdf.save(this.output);
      }
    }
    EventEmitterService.get('showLoader').emit();
    // html2canvas(this.screen.nativeElement,{
    //   scale:3,
    //   width: 800
    // }).then(canvas => {
    //   const parts = canvas.toDataURL('image/png').split(',')
    //   const linkSource = 'data:image/png;base64,' +`${parts[1]}`;
    //   const downloadLink = document.createElement("a");
    //   const fileName = `teste.png`;
    //   downloadLink.href = linkSource;
    //   downloadLink.download = fileName;
    //   downloadLink.click();
    //   EventEmitterService.get('hideLoader').emit();
    // });
    html2PDF(this.screen.nativeElement, {
      defaultOptions
    });
    EventEmitterService.get('hideLoader').emit();
    this._showSize = false;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sizeWidth  = window.innerWidth;
    this.sizeHeigth = window.innerHeight;
  }

  getCustomeWidth() {
    const customeWidth = '1200px';
    return customeWidth;
  }
}


