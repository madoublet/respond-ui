import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'respond-app',
    templateUrl: 'app.component.html',
    providers: [TranslateService]

})
export class AppComponent {

  constructor(private _translate: TranslateService) {

        // this language will be used as a fallback when a translation isn't found in the current language
        _translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        _translate.use('en');

    }

}