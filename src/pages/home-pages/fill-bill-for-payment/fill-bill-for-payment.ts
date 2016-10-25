import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FillBillForPayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fill-bill-for-payment',
  templateUrl: 'fill-bill-for-payment.html'
})
export class FillBillForPayment {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FillBillForPayment Page');
  }

}
