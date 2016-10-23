import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FillBillForTravel} from "../home-pages/fill-bill-for-travel/fill-bill-for-travel";
import {FillBillForCommunication} from "../home-pages/fill-bill-for-communication/fill-bill-for-communication";
import {FillBillForHotel} from "../home-pages/fill-bill-for-hotel/fill-bill-for-hotel";
import {FillBillForOther} from "../home-pages/fill-bill-for-other/fill-bill-for-other";
import {FillBillForPayment} from "../home-pages/fill-bill-for-payment/fill-bill-for-payment";
import {FillBillForPurchase} from "../home-pages/fill-bill-for-purchase/fill-bill-for-purchase";
import {FillBillForReceivables} from "../home-pages/fill-bill-for-receivables/fill-bill-for-receivables";
import {FillBillForRestaurant} from "../home-pages/fill-bill-for-restaurant/fill-bill-for-restaurant";
import {FillBillForSale} from "../home-pages/fill-bill-for-sale/fill-bill-for-sale";

/*
 Generated class for the Home page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class Home {

    fillBillForTravel = FillBillForTravel;
    fillBillForCommunication = FillBillForCommunication;
    fillBillForHotel = FillBillForHotel;
    fillBillForOther = FillBillForOther;
    fillBillForPayment = FillBillForPayment;
    fillBillForPurchase = FillBillForPurchase;
    fillBillForReceivables = FillBillForReceivables;
    fillBillForRestaurant = FillBillForRestaurant;
    fillBillForSale = FillBillForSale;


    slidesOptions = {pager: true, loop: true, autoplay: 3000};

    constructor(public navCtrl: NavController) {

    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter');
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }

    goToView(page) {
        this.navCtrl.parent.parent.push(page);
    }


}
