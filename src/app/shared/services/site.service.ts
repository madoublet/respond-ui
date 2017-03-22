import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class SiteService {
  constructor (private http: Http) {}

  private _createUrl = environment.apiUrl + '/api/sites/create';
  private _reloadUrl = environment.apiUrl + '/api/sites/reload';
  private _reindexUrl = environment.apiUrl + '/api/sites/reindex';
  private _sitemapUrl = environment.apiUrl + '/api/sites/sitemap';
  private _migrateUrl = environment.apiUrl + '/api/sites/migrate';
  private _templateUrl = environment.apiUrl + '/api/sites/republish/templates';
  private _listTemplatesUrl = environment.apiUrl + '/api/templates/list';
  private _listPluginsUrl = environment.apiUrl + '/api/plugins/list';
  private _updateUrl = environment.apiUrl + '/api/sites/update/plugins';
  private _removePluginUrl = environment.apiUrl + '/api/plugins/remove';

  /**
   * Login to the application
   *
   * @param {string} id The site id
   * @param {string} email The user's login email
   * @param {string} password The user's login password
   * @return {Observable}
   */
  create (name: string, theme: string, email: string, password: string, passcode: string) {

    let body = JSON.stringify({ name, theme, email, password, passcode });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._createUrl, body, options)
                    .map((res:Response) => res.json());

  }

  /**
   * Reloads the system files
   *
   * @return {Observable}
   */
  reload () {

    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._reloadUrl, options);

  }

  /**
   * Reindexes pages in the site
   *
   * @return {Observable}
   */
  reindex () {

    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._reindexUrl, options);

  }

  /**
   * Republishes the sitemap
   *
   * @return {Observable}
   */
  sitemap () {

    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._sitemapUrl, options);

  }

  /**
   * Migrates a R5 site to R6
   *
   * @return {Observable}
   */
  migrate () {

    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._migrateUrl, options);

  }

  /**
   * Republishes templates
   *
   * @return {Observable}
   */
  republishTemplates () {

    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._templateUrl, options);

  }

  /**
   * Lists templates
   *
   */
  listTemplates () {
    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._listTemplatesUrl, options).map((res:Response) => res.json());
  }

  /**
   * Lists plugins
   *
   */
  listPlugins () {
    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._listPluginsUrl, options).map((res:Response) => res.json());
  }

  /**
   * Updates plugins
   *
   * @return {Observable}
   */
  updatePlugins () {

    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._updateUrl, options);

  }

  /**
   * Removes the plugin
   *
   * @param {string} selector
   * @return {Observable}
   */
  removePlugin (selector: string) {

    let body = JSON.stringify({ selector });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._removePluginUrl, body, options);

  }


}