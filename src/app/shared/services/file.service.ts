import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class FileService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/files/list';
  private _removeFileUrl = 'api/files/remove';

  /**
   * Lists files in the application
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
   * Removes the file
   *
   * @param {string} name
   * @return {Observable}
   */
  remove (name: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { name };

    return this.http.post(this._removeFileUrl, data, options);

  }

}