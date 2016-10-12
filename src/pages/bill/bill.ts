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


    filterDate: string;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Bill Page');
    }

    openDataTime(datetime: Element) {

        console.log(datetime);

        var e = document.createEvent('MouseEvent');
        e.initEvent('click', false, false);

        datetime._elementRef.nativeElement.click()
        datetime._elementRef.nativeElement.dispatchEvent(e);

    }

}
