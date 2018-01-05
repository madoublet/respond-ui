import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';

declare var toast: any;

@Injectable()
export class AppService {
  constructor (private http: Http, private translate: TranslateService) {}


  private _settingsUrl = 'api/app/settings' + environment.urlExtension;
  private _themesListUrl = 'api/themes/list' + environment.urlExtension;
  private _languagesListUrl = 'api/languages/list' + environment.urlExtension;

  // cache the settings
  private _settings;

  /**
   * Retrieve settings for the application
   */
  retrieveSettings () {

    return this.http.get(this._settingsUrl).map((res:Response) => res.json());

  }

  /**
   * Lists themes in the application
   */
  listThemes () {

    return this.http.get(this._themesListUrl).map((res:Response) => res.json());

  }

  /**
   * Lists languages available to the application
   */
  listLanguages () {

    return this.http.get(this._languagesListUrl).map((res:Response) => res.json());

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