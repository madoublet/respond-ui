import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/users/list';
  private _loginUrl = 'api/users/login';
  private _forgotUrl = 'api/users/forgot';
  private _resetUrl = 'api/users/reset';
  private _addUrl = 'api/users/add';
  private _editUrl = 'api/users/edit';
  private _removeUrl = 'api/users/remove';
  private _countUrl = 'api/users/site/count';

  /**
   * Lists users
   *
   */
  list () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    // data
    let data = {};

    return this.http.get(this._listUrl, options);
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

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};

    // data
    let data = {id, email, password};
    
    return this.http.post(this._loginUrl, data, options);

  }

  /**
   * Requests the user's password to be reset
   *
   * @param {string} id The site id
   * @param {string} email The user's login email
   * @return {Observable}
   */
  forgot (email: string) {

     // options
     let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { email };

    return this.http.post(this._forgotUrl, data, options);

  }

  /**
   * Resets the password
   *
   * @param {string} id The site id
   * @param {string} token The token needed to reset the password
   * @param {string} password The new password
   * @return {Observable}
   */
  reset (token: string, password: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { token, password };

    return this.http.post(this._resetUrl, data, options);

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

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};

    // data
    let data = { email };

    return this.http.post(this._countUrl, data, options);

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
  add (email: string, role: string, firstName: string, lastName: string, password: string, language: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { email, role, firstName, lastName, password, language };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Edits the user
   *
   * @param {string} email
   * @param {string} role
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} password
   * @param {string} language
   * @return {Observable}
   */
  edit (email: string, role: string, firstName: string, lastName: string, password: string, language: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { email, role, firstName, lastName, password, language };

    let response = this.http.post(this._editUrl, data, options);

    console.log(response);

    return response;

  }

  /**
   * Removes the user
   *
   * @param {string} email
   * @return {Observable}
   */
  remove (email: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { email };

    return this.http.post(this._removeUrl, data, options);

  }

}