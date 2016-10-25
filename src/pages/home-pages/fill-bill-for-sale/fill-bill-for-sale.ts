import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FillBillForSale page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fill-bill-for-sale',
  templateUrl: 'fill-bill-for-sale.html'
})
export class FillBillForSale {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FillBillForSale Page');
  }

}
