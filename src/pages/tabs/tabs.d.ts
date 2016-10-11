import { NavController } from 'ionic-angular';
import { Home } from "../home/home";
import { Bill } from "../bill/bill";
import { Self } from "../self/self";
export declare class Tabs {
    navCtrl: NavController;
    homeRoot: typeof Home;
    billRoot: typeof Bill;
    selfRoot: typeof Self;
    constructor(navCtrl: NavController);
    ionViewDidLoad(): void;
}
