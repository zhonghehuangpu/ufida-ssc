import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Self Page');
  }

}
