import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

declare var toast: any;

@Injectable()
export class AppService {
  constructor (private http: HttpClient, private translate: TranslateService) {}

  private _settingsUrl = 'api/app/settings';
  private _themesListUrl = 'api/themes/list';
  private _languagesListUrl = 'api/languages/list';

  // cache the settings
  private _settings;

  /**
   * Retrieve settings for the application
   */
  retrieveSettings () {

    return this.http.get(this._settingsUrl);

  }

  /**
   * Lists themes in the application
   */
  listThemes () {

    return this.http.get(this._themesListUrl);

  }

  /**
   * Lists languages available to the application
   */
  listLanguages () {

    return this.http.get(this._languagesListUrl);

  }

  /**
   * Shows the system toast
   */
  showToast (type: string, text: string) {
    
    if(type == 'failure'  && (text == null || text == '')) {
      text = 'Sorry, you encountered an error. Contact your site administrator if the problem continues.';
    }
    else if(type == 'success' && (text == null || text == '')) {
      text = 'Success!';
    }
    else if(text == null || text == '') {
      text = 'Uncategorized message';
    }
    
    this.translate.get(text).subscribe((res: string) => {
      toast.show(type, res);
    });

  }


}