import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class MenuService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/menus/list';
  private _listItemsUrl = 'api/menus/items/list';
  private _addUrl = 'api/menus/add';
  private _editUrl = 'api/menus/edit';
  private _removeUrl = 'api/menus/remove';

  /**
   * Lists menus
   *
   */
  list () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._listUrl, options);
  }

  /**
   * Adds a menu
   *
   * @param {string} name
   * @return {Observable}
   */
  add (name: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { name };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Edits a menu
   *
   * @param {string} name
   * @return {Observable}
   */
  edit (id: string, name: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, name };

    return this.http.post(this._editUrl, data, options);

  }

  /**
   * Removes a menu
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