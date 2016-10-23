import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Tabs} from "../../tabs/tabs";
import {ForgetPassword} from "../forget-password/forget-password";
import {Register} from "../register/register";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class Login {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Login Page');
    }

    login() {
        this.navCtrl.setRoot(Tabs);
    }

    forgetPassword() {
        this.navCtrl.push(ForgetPassword)
    }

    register() {
        this.navCtrl.push(Register)
    }

}
