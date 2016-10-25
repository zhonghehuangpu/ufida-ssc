import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

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


    findType: string = 'xj';
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
