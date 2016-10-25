import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the ForgetPasswordForSetPassword page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-forget-password-for-set-password',
    templateUrl: 'forget-password-for-set-password.html'
})
export class ForgetPasswordForSetPassword {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello ForgetPasswordForSetPassword Page');
    }

    onComplete() {
        this.navCtrl.popToRoot()
    }
}
