import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgetPasswordForSetPassword} from "../forget-password-for-set-password/forget-password-for-set-password";

/*
 Generated class for the ForgetPassword page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-forget-password',
    templateUrl: 'forget-password.html'
})
export class ForgetPassword {


    findType: string = 'phone';

    findTypeList = [
        {
            name: '手机验证',
            value: 'phone',
            icon: 'ios-phone-portrait-outline'
        }, {
            name: '邮箱验证',
            value: 'email',
            icon: 'ios-mail-outline'
        }
    ];

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello ForgetPassword Page');
    }

    triggerFindTypeCard() {
        this.isFindTypeOpened = !this.isFindTypeOpened;
    }

    findTypeChoice(name, icon) {
        this.triggerFindTypeCard();
        this.findTypeView.name = name;
        this.findTypeView.icon = icon;
    }

    onNext() {
        this.navCtrl.push(ForgetPasswordForSetPassword)
    }

}
