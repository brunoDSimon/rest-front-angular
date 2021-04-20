import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Chart from 'chart.js';
import { ReaisPipe } from 'src/app/shared/pipe/reais.pipe';

@Component({
  selector: 'app-sum-group-companies',
  templateUrl: './sum-group-companies.component.html',
  styleUrls: ['./sum-group-companies.component.scss']
})
export class SumGroupCompaniesComponent implements OnInit {
  private myChart: any;
  private _valueTotal: any = [];
  private _namesCompanies: any = [];
  private _response: any = [];
  private _listYears: any[] = [];
  private _currentYear;
  private _dateAtual = new Date()
  constructor(
   private dashboardService: DashboardService,
   private reais:ReaisPipe
  ) { }

  ngOnInit() {
    console.log(this._currentYear)
    this.changeFilter();
  }

  get response(){
    return this._response;
  }
  get years() {
    return this._listYears;
  }
  get currentYear() {
    return this._currentYear
  }

  public changeFilter() {
   for (let index = 0; index < 5; index++) {
     this._listYears.push(new Date(new Date().setFullYear(new Date().getFullYear() -index)).getFullYear())
   }
   this.setYear(this._listYears[0])
  }

  public setYear(aux) {
    this._currentYear = aux;
    this.getSumTotalGroupCompanies(aux);
  }

  public getSumTotalGroupCompanies(periodo){
    this._valueTotal     = [];
    this._namesCompanies = [];
    this.dashboardService.sumTotalGroupCompanies(periodo).subscribe((res)=>{
      // console.log(res.data.beadSumGroup, 'getSumTotalGroupCompanies');
      this._response = res.data.beadSumGroup;
      res.data.beadSumGroup.map((item) =>{this._valueTotal.push(item.resultGroup.toFixed(2))})
      res.data.beadSumGroup.map((item) =>{this._namesCompanies.push(item.companies.companyName)})
      this.render()
    },(err) => {
      console.log(err)
    })
  }

  public render(){
    this.myChart = new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: this._namesCompanies,
        datasets: [{
          // label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: this._valueTotal
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Porcentagem de ganhos por empresa'
        },
        tooltips: {
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#999',
          displayColors: false,
          mode: 'point',
          titleFontColor: 'black',
          callbacks: {
            title: () => {
              return '';
            },
            label: (t, c) => {
              // const label = c.datasets[t.datasetIndex].label[t.index];
              const valor = this.reais.transform(c.datasets[t.datasetIndex].data[t.index]);
              return `   ${valor}  `;
            },
            labelTextColor: (tooltipItem, chart) => {
              return 'black';
            }
          }
        },
      }
  });
  }
}
