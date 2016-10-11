import { NavController } from 'ionic-angular';
export declare class Home {
    navCtrl: NavController;
    slidesOptions: {
        pager: boolean;
        loop: boolean;
        autoplay: number;
    };
    constructor(navCtrl: NavController);
    ionViewDidLoad(): void;
}
