import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-refrash-page',
  templateUrl: './refrash-page.component.html',
  styleUrls: ['./refrash-page.component.scss'],
})
export class RefrashPageComponent implements OnInit {
  @Output() reload: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  doRefresh(event) {
    this.reload.emit(window.location.reload());
    console.log('Begin async operation');

    setTimeout(() => {

    }, 2000);
  }
}
