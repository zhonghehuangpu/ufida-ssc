import {NgModule} from "@angular/core";
import {BillViewFilterPopover} from "./bill-view-filter-popover/bill-view-filter-popover";
import {IonicModule} from "ionic-angular";
/**
 * Created by zhaojunming on 16/10/23.
 */



@NgModule({
    declarations: [BillViewFilterPopover],
    imports: [IonicModule],
    exports: [BillViewFilterPopover],
    providers: [],
    entryComponents: [BillViewFilterPopover]

})
export default class BillModule {

}