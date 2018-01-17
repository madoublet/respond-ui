import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  constructor (private http: Http) {}

  private _listUrl = 'api/users/list' + environment.urlExtension;
  private _loginUrl = 'api/users/login' + environment.urlExtension;
  private _forgotUrl = 'api/users/forgot' + environment.urlExtension;
  private _resetUrl = 'api/users/reset' + environment.urlExtension;
  private _addUrl = 'api/users/add' + environment.urlExtension;
  private _editUrl = 'api/users/edit' + environment.urlExtension;
  private _removeUrl = 'api/users/remove' + environment.urlExtension;
  private _countUrl = 'api/users/site/count' + environment.urlExtension;

  /**
   * Lists users
   *
   */
  list () {
    
    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });
  
    return this.http.get(this._listUrl, options).map((res:Response) => res.json());
  }

  /**
   * Login to the application
   *
   * @param {string} id The site id
   * @param {string} email The user's login email
   * @param {string} password The user's login password
   * @return {Observable}
   */
  login (id: string, email: string, password: string) {

    let body = JSON.stringify({ id, email, password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._loginUrl, body, options)
                    .map((res:Response) => res.json());

  }

  /**
   * Requests the user's password to be reset
   *
   * @param {string} id The site id
   * @param {string} email The user's login email
   * @return {Observable}
   */
  forgot (id: string, email: string) {

    let body = JSON.stringify({ id, email });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._forgotUrl, body, options);

  }

  /**
   * Resets the password
   *
   * @param {string} id The site id
   * @param {string} token The token needed to reset the password
   * @param {string} password The new password
   * @return {Observable}
   */
  reset (id: string, token: string, password: string) {

    let body = JSON.stringify({ id, token, password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._resetUrl, body, options);

  }

  /**
   * Determines the # of sites associated with an email
   *
   * @param {string} id The site id
   * @param {string} token The token needed to reset the password
   * @param {string} password The new password
   * @return {Observable}
   */
  hasMultipleSites (email: string) {

    let body = JSON.stringify({ email });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._countUrl, body, options);

  }

  /**
   * Adds the user
   *
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} password
   * @param {string} language
   * @return {Observable}
   */
  add (email: string, firstName: string, lastName: string, password: string, language: string) {

    let body = JSON.stringify({ email, firstName, lastName, password, language });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._addUrl, body, options);

  }

  /**
   * Edits the user
   *
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} password
   * @param {string} language
   * @return {Observable}
   */
  edit (email: string, firstName: string, lastName: string, password: string, language: string) {

    let body = JSON.stringify({ email, firstName, lastName, password, language });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._editUrl, body, options);

  }

  /**
   * Removes the user
   *
   * @param {string} email
   * @return {Observable}
   */
  remove (email: string) {

    let body = JSON.stringify({ email });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._removeUrl, body, options);

  }

}