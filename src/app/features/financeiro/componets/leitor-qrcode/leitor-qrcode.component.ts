import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-leitor-qrcode',
  templateUrl: './leitor-qrcode.component.html',
  styleUrls: ['./leitor-qrcode.component.scss']
})
export class LeitorQrcodeComponent implements OnInit {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private router: Router
    ) { }

  ngOnInit() {
  }


  public barcode(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.router.navigate([`${barcodeData.text}`])
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
