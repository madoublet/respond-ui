import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'respond-app',
    templateUrl: 'app.component.html',
    providers: [TranslateService]

})
export class AppComponent {

  constructor(private translate: TranslateService) {

        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    }

}