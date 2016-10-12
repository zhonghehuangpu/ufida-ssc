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


const menuOptionPages = [PersonInfo, OptionIntroduce, BeginnerHelp, LabelManager, ComplaintSuggest];

@NgModule({
    declarations: [
        MyApp,
        Tabs,
        Home,
        Bill,
        Self,
        ...menuOptionPages
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
        ...menuOptionPages
    ],
    providers: []
})
export class AppModule {
}
