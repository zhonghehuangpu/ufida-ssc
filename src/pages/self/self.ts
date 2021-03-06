import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonalSetting} from "../self-pages/personal-setting/personal-setting";
import {PersonInfo} from "../self-pages/person-info/person-info";
import {MyBills} from "../self-pages/my-bills/my-bills";
import {ConsumptioAnalysis} from "../self-pages/consumptio-analysis/consumptio-analysis";

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
    myBills = MyBills;
    consumptioAnalysis = ConsumptioAnalysis;


    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Self Page');
    }

    goToView(view: any) {
        this.navCtrl.parent.parent.push(view);
    }

}
