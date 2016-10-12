import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {Tabs} from "../pages/tabs/tabs";
import {PersonInfo} from "../pages/menuOptions/person-info/person-info";
import {BeginnerHelp} from "../pages/menuOptions/beginner-help/beginner-help";
import {OptionIntroduce} from "../pages/menuOptions/option-introduce/option-introduce";
import {LabelManager} from "../pages/menuOptions/label-manager/label-manager";
import {ComplaintSuggest} from "../pages/menuOptions/complaint-suggest/complaint-suggest";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;

    rootPage: any = Tabs;

    personInfo = PersonInfo;

    optionIntroduce = OptionIntroduce;

    beginnerHelp = BeginnerHelp;

    labelManager = LabelManager;

    complaintSuggest = ComplaintSuggest;


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
