import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import {DateStruct} from '../../models/date-struct.model';
import * as moment from 'moment';

@Component({
  selector: 'app-date-piker-list-prev',
  templateUrl: './date-piker-list-prev.component.html',
  styleUrls: ['./date-piker-list-prev.component.scss']
})
export class DatePikerListPrevComponent implements OnInit {
  private _valuesDates: any = [
    {label: '7 Dias', value: 7},
    {label: '15 Dias', value: 15},
    {label: '30 Dias', value: 30},
    {label: '45 Dias', value: 55}
  ];
  private _currentPeriodo: string = '';

  @Input('init') valoresIniciais: DateStruct;
  @Output() alterarPeriodo: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
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


  hoveredDate: NgbDate = null;
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate()
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

  public alterar15dias(event) {
    event.preventDefault();
    this._currentPeriodo = '15 Dias'
    this._date.fromDate = moment(moment().toDate()).subtract(15, 'days').toDate();
    this._date.toDate = moment(moment().toDate()).subtract(1, 'days').toDate();
    this.alterarPeriodo.emit(this._date);
    this._date;
  }

  public periodo(i) {
    console.log(i.value)
    this._date.fromDate = moment(moment().toDate()).subtract(i.value, 'days').toDate();
    this._date.toDate = moment(moment().toDate()).subtract(1, 'days').toDate();
    console.log(this._date);
  }

}


