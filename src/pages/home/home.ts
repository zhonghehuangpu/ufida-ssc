import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FillBillForTravel} from "../home-module/fill-bill-for-travel/fill-bill-for-travel";

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

    fillBillForTravel = FillBillForTravel


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
