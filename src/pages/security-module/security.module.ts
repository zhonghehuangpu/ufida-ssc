import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {Login} from "./login/login";
import {Register} from "./register/register";
import {ForgetPassword} from "./forget-password/forget-password";
/**
 * Created by zhaojunming on 16/10/23.
 */



@NgModule({
    declarations: [Login, Register, ForgetPassword],
    imports: [IonicModule],
    exports: [Login, Register, ForgetPassword],
    providers: [],
    entryComponents: [Login, Register, ForgetPassword]

})
export default class SecurityModule {

}