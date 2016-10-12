import {Component, OnInit} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

/*
 Generated class for the Home page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class Home {


    slidesOptions = {pager: true, loop: true, autoplay: 3000};

    constructor(public navCtrl: NavController, public menuController: MenuController) {

    }

    ionViewWillEnter() {
        this.menuController.enable(true);
        console.log('ionViewWillEnter');
    }

    ionViewWillLeave() {
        this.menuController.enable(false);
        console.log('ionViewWillLeave');
    }


}
