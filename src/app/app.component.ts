import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ToastController} from 'ionic-angular';
// import {StatusBar, Splashscreen} from 'ionic-native';
import {Tabs} from "../pages/tabs/tabs";
import {Login} from "../pages/security-pages/login/login";

@Component({
    templateUrl: 'app.html'
})
export class App {

    @ViewChild(Nav) nav: Nav;

    rootPage: any = Login;

    constructor(public platform: Platform, public toastCtrl: ToastController) {

        this.initializeApp();

    }

    initializeApp() {
        this.platform.ready().then(() => {

            // this.rootPage = Tabs;

            // StatusBar.styleDefault();
            //
            // setTimeout(()=> {
            //     Splashscreen.hide();
            // }, 300);

        });
    }

}
