import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

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
    findTypeView = {
        name: '手机验证',
        icon: 'ios-phone-portrait-outline'
    }
    isFindTypeOpened: boolean = false;

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

}
