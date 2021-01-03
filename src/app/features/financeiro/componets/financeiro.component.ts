import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/shared/service/UsersData.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private userData:UsersDataService
  ) { }

  ngOnInit(): void {
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
