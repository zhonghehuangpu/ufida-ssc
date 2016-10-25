import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FillBillForReceivables page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fill-bill-for-receivables',
  templateUrl: 'fill-bill-for-receivables.html'
})
export class FillBillForReceivables {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FillBillForReceivables Page');
  }

}
