import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppService {
  constructor (private http: Http) {}


  private _settingsUrl = environment.apiUrl + '/api/app/settings';
  private _themesListUrl = environment.apiUrl + '/api/themes/list';
  private _languagesListUrl = environment.apiUrl + '/api/languages/list';

  // cache the settings
  private _settings;

  /**
   * Retrieve settings for the application
   *
   */
  retrieveSettings () {

    return this.http.get(this._settingsUrl).map((res:Response) => res.json());

  }

  /**
   * Lists themes in the application
   *
   */
  listThemes () {

    return this.http.get(this._themesListUrl).map((res:Response) => res.json());

  }

  /**
   * Lists languages available to the application
   *
   */
  listLanguages () {

    return this.http.get(this._languagesListUrl).map((res:Response) => res.json());

  }


}