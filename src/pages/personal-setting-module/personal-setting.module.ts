import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {OptionIntroduce} from "./option-introduce/option-introduce";
import {LabelManager} from "./label-manager/label-manager";
import {ComplaintSuggest} from "./complaint-suggest/complaint-suggest";
import {BeginnerHelp} from "./beginner-help/beginner-help";

@NgModule({
    declarations: [OptionIntroduce, BeginnerHelp, LabelManager, ComplaintSuggest],
    imports: [IonicModule],
    exports: [OptionIntroduce, BeginnerHelp, LabelManager, ComplaintSuggest],
    providers: [],
    entryComponents: [OptionIntroduce, BeginnerHelp, LabelManager, ComplaintSuggest]
})
export default class PersonalSettingModule {

}