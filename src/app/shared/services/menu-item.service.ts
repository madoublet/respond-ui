import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class MenuItemService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/menus/items/list';
  private _addUrl = 'api/menus/items/add';
  private _editUrl = 'api/menus/items/edit';
  private _removeUrl = 'api/menus/items/remove';
  private _updateOrderUrl = 'api/menus/items/order';

  /**
   * Lists items
   *
   */
  list (id) {

    var url = this._listUrl + '/' + encodeURI(id);

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(url, options);
  }

  /**
   * Adds a menu item
   *
   * @param {string} id
   * @param {string} html
   * @param {string} cssClass
   * @param {string} isNested
   * @param {string} priority
   * @param {string} url
   * @return {Observable}
   */
  add (id: string, html: string, cssClass: string, isNested: boolean, url: string, target: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, html, cssClass, isNested, url, target };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Edits a menu item
   *
   * @param {string} id
   * @param {string} index
   * @param {string} html
   * @param {string} cssClass
   * @param {string} isNested
   * @param {string} priority
   * @param {string} url
   * @return {Observable}
   */
  edit (id: string, index: number, html: string, cssClass: string, isNested: boolean, url: string, target: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, index, html, cssClass, isNested, url, target };

    return this.http.post(this._editUrl, data, options);

  }

  /**
   * Removes a menu item
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
   * Updates the order of a list
   *
   * @param {string} name
   * @param {string} priority
   * @return {Observable}
   */
  updateOrder (id, items) {
    
    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, items };

    return this.http.post(this._updateOrderUrl, data, options);

  }

}