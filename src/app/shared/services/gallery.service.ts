import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class GalleryService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/galleries/list';
  private _addUrl = 'api/galleries/add';
  private _editUrl = 'api/galleries/edit';
  private _removeUrl = 'api/galleries/remove';

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
  
    return this.http.get(this._listUrl, options);
  }

  /**
   * Adds a gallery
   *
   * @param {string} name
   * @param {string} cssClass
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
   * Edits a gallery
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
   * Removes a gallery
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