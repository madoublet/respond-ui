import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class FormService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/forms/list';
  private _addUrl = 'api/forms/add';
  private _editUrl = 'api/forms/edit';
  private _removeUrl = 'api/forms/remove';

  /**
   * Lists forms
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
   * Adds a form
   *
   * @param {string} name
   * @param {string} cssClass
   * @return {Observable}
   */
  add (name: string, cssClass: string, validate: boolean, success: string, error: string, recaptchaError: string, notify: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { name, cssClass, validate, success, error, recaptchaError, notify };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Edits a form
   *
   * @param {string} name
   * @return {Observable}
   */
  edit (id: string, name: string, cssClass: string, validate: boolean, success: string, error: string, recaptchaError: string, notify: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, name, cssClass, validate, success, error, recaptchaError, notify };

    return this.http.post(this._editUrl, data, options);

  }

  /**
   * Removes a form
   *
   * @param {string} id
   * @return {Observable}
   */
  remove (id: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id };

    return this.http.post(this._removeUrl, data, options);

  }

}