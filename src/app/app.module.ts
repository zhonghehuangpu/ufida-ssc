import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {Tabs} from "../pages/tabs/tabs";
import {Home} from "../pages/home/home";
import {Bill} from "../pages/bill/bill";
import {Self} from "../pages/self/self";

@NgModule({
    declarations: [
        MyApp,
        Tabs,
        Home,
        Bill,
        Self
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
        Self
    ],
    providers: []
})
export class AppModule {
}
