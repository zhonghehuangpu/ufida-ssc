import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the FillBillForRestaurant page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-fill-bill-for-restaurant',
    templateUrl: 'fill-bill-for-restaurant.html'
})
export class FillBillForRestaurant {

    dateTime: string = '2016-09-09'

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForRestaurant Page');
    }

}
