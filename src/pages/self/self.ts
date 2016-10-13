import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonInfo} from "../menuOptions/person-info/person-info";
import {PersonalSetting} from "../billOptions/personal-setting/personal-setting";

/*
 Generated class for the Self page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-self',
    templateUrl: 'self.html'
})
export class Self {

    personInfo = PersonInfo;
    personalSetting = PersonalSetting;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Self Page');
    }

    goToView(view: any) {
        this.navCtrl.parent.parent.push(view);
    }

}
