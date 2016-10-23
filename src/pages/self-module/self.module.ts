import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {PersonalSetting} from "./personal-setting/personal-setting";
import {PersonInfo} from "./person-info/person-info";
/**
 * Created by zhaojunming on 16/10/23.
 */



@NgModule({
    declarations: [PersonalSetting, PersonInfo],
    imports: [IonicModule],
    exports: [PersonalSetting, PersonInfo],
    providers: [],
    entryComponents: [PersonalSetting, PersonInfo]

})
export default class SelfModule {

}