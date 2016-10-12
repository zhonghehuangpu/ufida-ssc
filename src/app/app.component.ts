import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {Tabs} from "../pages/tabs/tabs";
import {PersonInfo} from "../pages/menuOptions/person-info/person-info";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;

    rootPage: any = Tabs;

    personInfo = PersonInfo;

    constructor(public platform: Platform) {

        this.initializeApp();

    }

    initializeApp() {
        this.platform.ready().then(() => {

            StatusBar.styleDefault();

            setTimeout(()=> {
                Splashscreen.hide();
            }, 300);

        });
    }

    pushPage(page: any) {
        this.nav.push(page);
    }

}
