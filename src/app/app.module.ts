import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {App} from './app.component';
import {Tabs} from "../pages/tabs/tabs";
import {Home} from "../pages/home/home";
import {Bill} from "../pages/bill/bill";
import {Self} from "../pages/self/self";
import {HOME_PAGES} from "../pages/home-pages/home-pages";
import {BILL_PAGES} from "../pages/bill-pages/bill-pages";
import {SELF_PAGES} from "../pages/self-pages/self-pages";
import {PERSONAL_SETTING_PAGES} from "../pages/personal-setting-pages/personal-setting-pages";
import {SECURITY_PAGES} from "../pages/security-pages/security-pages";
import {PLATFORMS_CONSTANT} from "../config/platform.config";


@NgModule({
    declarations: [
        App,
        Tabs,
        Home,
        Bill,
        Self,
        ...HOME_PAGES,
        ...BILL_PAGES,
        ...SELF_PAGES,
        ...PERSONAL_SETTING_PAGES,
        ...SECURITY_PAGES
    ],
    imports: [
        IonicModule.forRoot(App, PLATFORMS_CONSTANT)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        App,
        Tabs,
        Home,
        Bill,
        Self,
        ...HOME_PAGES,
        ...BILL_PAGES,
        ...SELF_PAGES,
        ...PERSONAL_SETTING_PAGES,
        ...SECURITY_PAGES
    ],
    providers: []
})
export class AppModule {
}
