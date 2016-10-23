import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {PLATFORMS_CONSTANT} from "./config/platform.config";
import {Tabs} from "../pages/tabs/tabs";
import {Home} from "../pages/home/home";
import {Bill} from "../pages/bill/bill";
import {Self} from "../pages/self/self";
import HomeModule from "../pages/home-module/home.module";
import BillModule from "../pages/bill-module/bill.module";
import SelfModule from "../pages/self-module/self.module";
import PersonalSettingModule from "../pages/personal-setting-module/personal-setting.module";


@NgModule({
    declarations: [
        MyApp,
        Tabs,
        Home,
        Bill,
        Self,
    ],
    imports: [
        IonicModule.forRoot(MyApp, PLATFORMS_CONSTANT),
        HomeModule,
        BillModule,
        SelfModule,
        PersonalSettingModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Tabs,
        Home,
        Bill,
        Self,
    ],
    providers: []
})
export class AppModule {
}
