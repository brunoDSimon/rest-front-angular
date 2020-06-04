import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-sum-group-month-companies',
  templateUrl: './sum-group-month-companies.component.html',
  styleUrls: ['./sum-group-month-companies.component.scss']
})
export class SumGroupMonthCompaniesComponent implements OnInit {
  private myChart: any;
  private _filtradosNames: any = [];
  private _filtradosMonth: any [] = [];
  private _filtrados: any = [];
  private response: any = [];
  private _retorno: any;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.getSumGroupMonthCompanies();
  }



  public getSumGroupMonthCompanies(){
    this.dashboardService.sumGroupMonthCompanies().subscribe((res) =>{
      this.response = res.data;
      
      this.response.map((item) =>{this._filtradosNames.push(item.companies.companyName)})
      this.response.map((item) =>{this._filtradosMonth.push(item.month)})
      // console.log(this._filtradosNames, 'filtradosNames')
      // console.log(this._filtradosMonth, 'filtradosMonth')
      let teste = [];
      // teste = response.filter(x => x.month == '3' )
       this.response.map((res) => {
        if (this._filtrados.length) {
          const index = this._filtrados.findIndex((t)=>t.companyName == res.companies.companyName)
          if(index != -1){
            this._filtrados[index].valores.push(res.resultGroup);
            this._filtrados[index].month.push(res.month)
          } else {
            this._filtrados.push({companyName: res.companies.companyName, valores: [res.resultGroup], month: [res.month]});
          }
        }else {
          this._filtrados.push({companyName: res.companies.companyName, valores: [res.resultGroup], month: [res.month]});
        }
      }); 
      this.callback(this._filtrados)
      // response.map((res) => {
      // if (this._filtrados.indexOf(res.month) === -1) {
      //     this._filtrados.push(res.month);
      //   }
      // });
      console.log(this._filtrados)
      console.log(this._filtrados.map(res => res.valores))
    this.render()

    },(error) =>{
      console.log(error)
    })
  }
  public callback(res){
    const retorno = {
      companies: {
        month: this._filtrados.month,
        value: this._filtrados.valores,
        name: this._filtrados.companyName
      }
    }
    console.log(retorno)
  }
  public render(){
    this.myChart =new Chart(document.getElementById("bar-chart-grouped"), {
      type: 'bar',
      data: {
        labels: this._filtrados.companyName,
        datasets: [
          {
            label: 'Soma de ganhos por mes por empresa',
            backgroundColor: "#3e95cd",
            data: this._filtrados.map(res => res.valores)
          },
        ]
      },
      options: {
        title: {
          display: false,
          text: 'Population growth (millions)'
        }
      }
   });
  }
}
