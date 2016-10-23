import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {OptionIntroduce} from "../../personal-setting-pages/option-introduce/option-introduce";
import {BeginnerHelp} from "../../personal-setting-pages/beginner-help/beginner-help";
import {LabelManager} from "../../personal-setting-pages/label-manager/label-manager";
import {ComplaintSuggest} from "../../personal-setting-pages/complaint-suggest/complaint-suggest";
import {PersonInfo} from "../person-info/person-info";
import {Login} from "../../security-pages/login/login";

/*
 Generated class for the PersonalSetting page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-personal-setting',
    templateUrl: 'personal-setting.html'
})
export class PersonalSetting {

    personInfo = PersonInfo;

    optionIntroduce = OptionIntroduce;

    beginnerHelp = BeginnerHelp;

    labelManager = LabelManager;

    complaintSuggest = ComplaintSuggest;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    }

    pushPage(page: any) {
        this.navCtrl.push(page);
    }

    dataSynchronization() {
        let toast = this.toastCtrl.create({
            message: '数据同步成功',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }

    ionViewDidLoad() {
        console.log('Hello PersonalSetting Page');
    }

    logOut() {
        this.navCtrl.setRoot(Login)
    }

}
