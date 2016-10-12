import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {Tabs} from "../pages/tabs/tabs";
import {Home} from "../pages/home/home";
import {Bill} from "../pages/bill/bill";
import {Self} from "../pages/self/self";
import {PersonInfo} from "../pages/menuOptions/person-info/person-info";


const menuOptionPages = [PersonInfo];

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
