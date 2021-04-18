import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public urlDestinos: any = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const URL = this.router.url.split(`/`);
    URL.forEach((i) => {
      this.urlDestinos.push({label: i.replace(/-/g, ' '), url: i})
    });
  }

  public redirect(index) {
    let url = '';
    this.urlDestinos.forEach((element, chave) => {
      if (typeof element.url !== 'undefined') {
        url = element.url
      }
      if (index == chave) {
        if (typeof element.urlNova !== 'undefined') {
          this.router.navigate([element.urlNova]);
        } else {
          this.router.navigate([url])
        }
      }
    });
  }

}
