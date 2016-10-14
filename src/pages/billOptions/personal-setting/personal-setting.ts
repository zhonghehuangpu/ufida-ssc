import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {PersonInfo} from "../../menuOptions/person-info/person-info";
import {OptionIntroduce} from "../../menuOptions/option-introduce/option-introduce";
import {BeginnerHelp} from "../../menuOptions/beginner-help/beginner-help";
import {LabelManager} from "../../menuOptions/label-manager/label-manager";
import {ComplaintSuggest} from "../../menuOptions/complaint-suggest/complaint-suggest";

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

}
