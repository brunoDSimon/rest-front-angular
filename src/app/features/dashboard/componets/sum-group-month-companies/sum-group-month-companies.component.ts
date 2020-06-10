import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Chart from 'chart.js';
import { ReaisPipe } from 'src/app/shared/pipe/reais.pipe';

@Component({
  selector: 'app-sum-group-month-companies',
  templateUrl: './sum-group-month-companies.component.html',
  styleUrls: ['./sum-group-month-companies.component.scss']
})
export class SumGroupMonthCompaniesComponent implements OnInit {
  private myChart: any;
  private _monthsChart: any[] = [];
  private _conteudoChart: any[] = [];
  private response: any[] = [];
  private _periodos:any = [];
  private _valor: any[]= []
  private teste: any[] =[];
  private _names: any[] =[];
  private _cores = [
    "#3e95cd",
    "#4c32a8",
    "#DF3A01",
    "#0B4C5F",
    "#8000FF",
    "#CCFFE5",
    "#FF9999",
    "#CCFFCC",
    "#FF3333"
  ];
  private dados:any =[
    {
      "status": {
        "value": "0",
        "messege": "requisição efetuada com sucesso"
      },
      "data": [
        {
          "resultGroup": 3.72,
          "periodo": "2020-01",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 3446.0399999999963,
          "periodo": "2020-03",
          "companies": {
            "companyName": "Arrezo"
          }
        },
        {
          "resultGroup": 40.92,
          "periodo": "2020-03",
          "companies": {
            "companyName": "MCM"
          }
        },
        {
          "resultGroup": 13843.73,
          "periodo": "2020-04",
          "companies": {
            "companyName": "Arrezo"
          }
        },
        {
          "resultGroup": 76.67999999999998,
          "periodo": "2020-04",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 148.26,
          "periodo": "2020-05",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 3.72,
          "periodo": "2020-06",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 3.72,
          "periodo": "2020-07",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 11.16,
          "periodo": "2020-08",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 100.43999999999998,
          "periodo": "2020-08",
          "companies": {
            "companyName": "MCM"
          }
        },
        {
          "resultGroup": 29.759999999999994,
          "periodo": "2020-12",
          "companies": {
            "companyName": "MCM"
          }
        }
      ]
    }
  ]
  constructor(
    private dashboardService: DashboardService,
    private reais:ReaisPipe

  ) { }

  ngOnInit() {
    this.getSumGroupMonthCompanies();
  }

  get conteudoChart() {
    return this._conteudoChart;
  }
  
  get monthsChart() {
    return this._monthsChart;
  }
 get periodo(){
   return this._periodos
 }
 get valor(){
   return this._valor
 }
 get names(){
   return this._names;
 }
  public getSumGroupMonthCompanies(){
    this.dashboardService.sumGroupMonthCompanies().subscribe((res) =>{
      this.response = res.data;
      
      this.response.map((item) =>{if(this._monthsChart.indexOf(item.periodo) ==-1){this._monthsChart.push(item.periodo)}});
      this.response.map((res) => {
        if (this._conteudoChart.length) {
          const index = this._conteudoChart.findIndex((t)=>t.label == res.companies.companyName)
          if(index != -1){
            this._conteudoChart[index].dataValorPeriodo.push({valor:res.resultGroup, periodo: res.periodo});
          } else {
            this._conteudoChart.push({label: res.companies.companyName, dataValorPeriodo:[{valor:res.resultGroup, periodo: res.periodo}] ,backgroundColor:  this._cores[this._conteudoChart.length], data: []})
          }
        } else {
          this._conteudoChart.push({label: res.companies.companyName, dataValorPeriodo: [{valor:res.resultGroup, periodo: res.periodo}], backgroundColor: this._cores[0], data: []});
        }
      }); 
      console.log(this._conteudoChart)
      
      this._conteudoChart.map((aux, i) =>{
        this._monthsChart.map((periodo) => {
          console.log(periodo, 'period')
          console.log(aux.dataValorPeriodo, 'valor periodo')
          let itemEncontrado = aux.dataValorPeriodo.findIndex((item) =>{
            console.log('item periodo', item.periodo);
            console.log('comparacao', item.periodo==periodo);
            return item.periodo == periodo;
          });
          if (itemEncontrado != -1) {
            this._conteudoChart[i].data.push(aux.dataValorPeriodo[itemEncontrado].valor);
          } else {
            this._conteudoChart[i].data.push(0);
          }
        })
        this._valor.push(aux.data) 
      })
      console.log(this._valor)
      this.render()
    },(error) =>{
      console.log(error)
    })
  }
  public split(array, cols) {
    var ret = [];
    if (cols==1 || array.length === 1){
      ret.push(array);
    }else{
      var size = Math.ceil(array.length / cols);
      for (var i = 0; i < cols; i++) {
        var start = i*size;
        ret.push(array.slice(start, start+size));
      }
    }
    console.log(ret)
    return ret;
  }
  public render(){
    new Chart(document.getElementById("bar-chart-grouped"), {
      type: 'bar',
      data: {
        labels: this.monthsChart,
        datasets: this.conteudoChart
    
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Soma total de ganhos por mes'
        },
        // tooltips: {
        //   backgroundColor: '#fff',
        //   borderWidth: 1,
        //   borderColor: '#999',
        //   displayColors: false,
        //   mode: 'point',
        //   titleFontColor: 'black',
        //   callbacks: {
        //     title: () => {
        //       return '';
        //     },
        //     label: (t, c) => {
        //       // const label = c.datasets[t.datasetIndex].label[t.index];
        //       const valor = this.reais.transform(c.datasets[t.datasetIndex].data[t.index]);
        //       return `  ${valor}  `;
        //     },
        //     labelTextColor: (tooltipItem, chart) => {
        //       return 'black';
        //     }
        //   }
        // },
      }
  });
  }
}