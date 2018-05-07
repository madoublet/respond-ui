import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class FormFieldService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/forms/fields/list';
  private _addUrl = 'api/forms/fields/add';
  private _editUrl = 'api/forms/fields/edit';
  private _removeUrl = 'api/forms/fields/remove';
  private _updateOrderUrl = 'api/forms/fields/order';

  /**
   * Lists fields
   *
   */
  list (id) {

    let url = this._listUrl + '/' + encodeURI(id);

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    // data
    let data = {};

    return this.http.get(url, options);
  }

  /**
   * Adds a form filed
   *
   * @param {string} label
   * @param {string} type
   * @param {boolean} required
   * @param {string} options
   * @param {string} helperText
   * @param {string} placeholder
   * @param {string} cssClass
   * @return {Observable}
   */
  add (id: string, label: string, type: string, required: boolean, options: string, helperText: string, placeholder: string, cssClass: string) {

    // options
    let _options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, label, type, required, options, helperText, placeholder, cssClass };

    return this.http.post(this._addUrl, data, _options);

  }

  /**
   * Edits a form field
   *
   * @param {string} id
   * @param {number} index
   * @param {string} label
   * @param {string} type
   * @param {boolean} required
   * @param {string} options
   * @param {string} helperText
   * @param {string} placeholder
   * @param {string} cssClass
   * @return {Observable}
   */
  edit (id: string, index: number, label: string, type: string, required: boolean, options: string, helperText: string, placeholder: string, cssClass: string) {

    // options
    let _options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, index, label, type, required, options, helperText, placeholder, cssClass };

    return this.http.post(this._editUrl, data, _options);

  }

  /**
   * Removes a form field
   *
   * @param {string} name
   * @param {string} index
   * @return {Observable}
   */
  remove (id: string, index: number) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, index };


    return this.http.post(this._removeUrl, data, options);

  }

  /**
   * Updates the order of fields
   *
   * @param {string} name
   * @param {string} priority
   * @return {Observable}
   */
  updateOrder (id, fields) {

    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, fields };

    return this.http.post(this._updateOrderUrl, data, options);

  }

}