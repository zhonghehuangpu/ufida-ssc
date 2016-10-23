import {Component} from '@angular/core';
import {NavController, Tabs as IonicTabs} from 'ionic-angular';
import {Home} from "../home/home";
import {Bill} from "../bill/bill";
import {Self} from "../self/self";
import {ViewChild} from "@angular/core/src/metadata/di";

/*
 Generated class for the Tabs page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'tabs.html'
})
export class Tabs {

    @ViewChild(IonicTabs) tabRef: IonicTabs;

    homeRoot = Home;
    billRoot = Bill;
    selfRoot = Self;


    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        console.log('Hello Tabs Page');
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter');
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }

}
