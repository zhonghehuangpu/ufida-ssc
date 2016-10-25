import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

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

    findType: string = 'phone';
    findTypeView = {
        name: '现金',
        icon: 'logo-yen'
    }
    isFindTypeOpened: boolean = false;

    dateTime: string = '2016-09-09'

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForPayment Page');
    }


    triggerFindTypeCard() {
        this.isFindTypeOpened = !this.isFindTypeOpened;
    }

    findTypeChoice(name, icon) {
        this.triggerFindTypeCard();
        this.findTypeView.name = name;
        this.findTypeView.icon = icon;
    }

}
