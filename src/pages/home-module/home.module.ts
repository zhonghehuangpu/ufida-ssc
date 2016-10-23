import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {FillBillForTravel} from "./fill-bill-for-travel/fill-bill-for-travel";
/**
 * Created by zhaojunming on 16/10/23.
 */

@NgModule({
    declarations: [FillBillForTravel],
    imports: [IonicModule],
    exports: [FillBillForTravel],
    providers: [],
    entryComponents: [FillBillForTravel]

})
export default class HomeModule {

}
