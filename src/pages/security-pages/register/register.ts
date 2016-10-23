import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the Register page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class Register {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Register Page');
    }

    goLogin() {
        this.navCtrl.pop();
    }

}
