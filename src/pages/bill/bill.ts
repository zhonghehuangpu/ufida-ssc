import {Component} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {BillViewFilterPopover} from "../billOptions/bill-view-filter-popover/bill-view-filter-popover";

/*
 Generated class for the Bill page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-bill',
    templateUrl: 'bill.html'
})
export class Bill {


    filterDate: string = "2016-10";

    billViewFilterType: string = 'date';

    constructor(public navCtrl: NavController, public popoverController: PopoverController) {
    }

    ionViewDidLoad() {
        console.log('Hello Bill Page');
    }

    openDataTime(datetime: Element) {

        datetime.open();

    }

    showBillViewFilterPopover($event) {

        let popover = this.popoverController.create(BillViewFilterPopover, {billViewFilterType: this.billViewFilterType});

        popover.present({
            ev: $event
        });

        popover.onDidDismiss((data)=> {
            if (data && data.billViewFilterType) {
                this.billViewFilterType = data.billViewFilterType;
            }
            console.log(data);
        });

    }

}
