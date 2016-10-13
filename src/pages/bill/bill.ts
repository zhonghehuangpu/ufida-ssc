import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the Bill page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-bill',
    templateUrl: 'bill.html'
})
export class Bill {


    filterDate: string = "2016-10";

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Bill Page');
    }

    openDataTime(datetime: Element) {

        datetime.open();

    }

}
