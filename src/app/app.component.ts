import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ToastController} from 'ionic-angular';
// import {StatusBar, Splashscreen} from 'ionic-native';
import {Tabs} from "../pages/tabs/tabs";

@Component({
    templateUrl: 'app.html'
})
export class App {

    @ViewChild(Nav) nav: Nav;

    rootPage: any = Tabs;

    constructor(public platform: Platform, public toastCtrl: ToastController) {

        this.initializeApp();

    }

    initializeApp() {
        this.platform.ready().then(() => {

            // StatusBar.styleDefault();
            //
            // setTimeout(()=> {
            //     Splashscreen.hide();
            // }, 300);

        });
    }

}
