import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {Tabs} from "../pages/tabs/tabs";
import {Home} from "../pages/home/home";
import {Bill} from "../pages/bill/bill";
import {Self} from "../pages/self/self";
import {PersonInfo} from "../pages/menuOptions/person-info/person-info";
import {OptionIntroduce} from "../pages/menuOptions/option-introduce/option-introduce";
import {ComplaintSuggest} from "../pages/menuOptions/complaint-suggest/complaint-suggest";
import {LabelManager} from "../pages/menuOptions/label-manager/label-manager";
import {BeginnerHelp} from "../pages/menuOptions/beginner-help/beginner-help";
import {BillViewFilterPopover} from "../pages/billOptions/bill-view-filter-popover/bill-view-filter-popover";
import {PersonalSetting} from "../pages/billOptions/personal-setting/personal-setting";
import {Login} from "../pages/security/login/login";
import {Register} from "../pages/security/register/register";
import {ForgetPassword} from "../pages/security/forget-password/forget-password";
import {FillBillForTravel} from "../pages/homeOptions/fill-bill-for-travel/fill-bill-for-travel";


const menuOptionPages = [PersonInfo, OptionIntroduce, BeginnerHelp, LabelManager, ComplaintSuggest];
const billOptionPages = [BillViewFilterPopover];
const homeOptionPages = [FillBillForTravel];
const selfOptionPages = [PersonalSetting];
const securityOptionPages = [Login, Register, ForgetPassword]

@NgModule({
    declarations: [
        MyApp,
        Tabs,
        Home,
        Bill,
        Self,
        ...menuOptionPages,
        ...billOptionPages,
        ...homeOptionPages,
        ...selfOptionPages,
        ...securityOptionPages
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            platforms: {
                ios: {
                    backButtonText: '  ',
                }
            }
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Tabs,
        Home,
        Bill,
        Self,
        ...menuOptionPages,
        ...billOptionPages,
        ...homeOptionPages,
        ...selfOptionPages,
        ...securityOptionPages
    ],
    providers: []
})
export class AppModule {
}
