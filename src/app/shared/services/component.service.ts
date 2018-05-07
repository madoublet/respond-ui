import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ComponentService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/components/list';
  private _addUrl = 'api/components/add';
  private _removeUrl = 'api/components/remove';

  /**
   * Lists components
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
   * Adds a component
   *
   * @param {string} url
   * @return {Observable}
   */
  add (name: string, url: string, codeOnly: boolean) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { name, url, codeOnly };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Removes the component
   *
   * @param {string} url
   * @return {Observable}
   */
  remove (url: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { url };

    return this.http.post(this._removeUrl, data, options);

  }

}