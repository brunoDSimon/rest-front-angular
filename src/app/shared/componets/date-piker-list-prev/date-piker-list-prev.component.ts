import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import {DateStruct} from '../../models/date-struct.model';
import * as moment from 'moment';

@Component({
  selector: 'app-date-piker-list-prev',
  templateUrl: './date-piker-list-prev.component.html',
  styleUrls: ['./date-piker-list-prev.component.scss']
})
export class DatePikerListPrevComponent implements OnInit {
  private _numberDisplay: number = 2;
  private sizeWidth: any;
  private _valuesDates: any = [
    {label: '7 Dias', value: 7},
    {label: '15 Dias', value: 15},
    {label: '30 Dias', value: 30},
    {label: '45 Dias', value: 55}
  ];
  private _currentPeriodo: string = '';

  @Input('init') valoresIniciais: DateStruct;
  @Output() alterarPeriodo = new EventEmitter();

  ngOnInit() {
    this.sizeWidth  = window.innerWidth;
    this.setNumber(this.sizeWidth);
    this._date;
    console.log(this._date)
  }
  get valuesDates() {
    return this._valuesDates;
  }

  get date(): DateStruct {
    return this._date;
  }

  get currentPeriodo() {
    return this._currentPeriodo;
  }

  get numberDisplay() {
    return this._numberDisplay;
  }

  hoveredDate: NgbDate = null;
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate(),
    period: 1,
    custom: false,
    label: ''
  }

  public fromDate: NgbDate;
  public toDate: NgbDate;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
    ) {

    // this.fromDate = calendar.getToday();
    // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this._date.fromDate = this.convertData(date)
     }
     else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
      this._date.toDate = this.convertData(date)

    } else {
      this.toDate = null;
      this.fromDate = date;
      this._date.fromDate = this.convertData(date)

    }
    console.log(date)
    this.alterarPeriodo.emit(this._date);

  }
  convertData(data: NgbDate){
    return new Date(data.year, data.month -1, data.day)
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }



  public periodoHoje(valor) {
    valor.preventDefault();
    const hoje ={
     fromDate: moment().toDate(),
     toDate:   moment().toDate(),
     periodo:  1,
     custom:   false,
     label:    'HOJE'
    }
    this.alterarPeriodo.emit(hoje);
    this._date = hoje;
  }
  public alterar7dias(valor) {
    valor.preventDefault();
    const ultimos7ias ={
      fromDate: moment(moment().toDate()).subtract(6, 'days').toDate(),
      toDate:   moment().toDate(),
      periodo:  1,
      custom:   false,
      label:    '7 DIAS'
     }
     this.alterarPeriodo.emit(ultimos7ias);
     this._date = ultimos7ias;
  }

  public alterar15dias(valor) {
    valor.preventDefault();
    const periodo15dias ={
      fromDate: moment(moment().toDate()).subtract(14, 'days').toDate(),
      toDate:   moment().toDate(),
      periodo:  1,
      custom:   false,
      label:    '15 DIAS'
     }
     this.alterarPeriodo.emit(periodo15dias);
     this._date = periodo15dias;
  }

  public alterar30dias(valor) {
    valor.preventDefault();
    const periodo30dias ={
      fromDate: moment(moment().toDate()).subtract(29, 'days').toDate(),
      toDate:   moment().toDate(),
      periodo:  1,
      custom:   false,
      label:    '30 DIAS'
     }
     this.alterarPeriodo.emit(periodo30dias);
     this._date = periodo30dias;
  }
  public setNumber(i) {
    if (i >= 700) {
      this._numberDisplay = 2;
    } else {
      this._numberDisplay = 1;
    }
  }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.sizeWidth  = window.innerWidth;
      this.setNumber(this.sizeWidth);
    }


}


