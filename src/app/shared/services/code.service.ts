import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CodeService {
  constructor (private http: HttpClient) {}

  private _retrieveUrl = 'api/code/retrieve';
  private _saveUrl = 'api/code/save';
  private _listUrl = 'api/code/list';
  private _listFilesUrl = 'api/code/listFiles';
  private _addUrl = 'api/code/add';

  /**
   * List files by type
   *
   */
  listFiles (dir: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._listFilesUrl + '?dir=' + dir, options);
  }

  /**
   * List code by type
   *
   */
  list (type: string) {
    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    // data
    let data = {};

    return this.http.get(this._listUrl + '/' + type, options);
  }

  /**
   * Retrieves code from a URL
   *
   * @param {string} url
   * @return {Observable}
   */
  retrieve (url: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    return this.http.get(this._retrieveUrl + '?url=' + url, options);

  }

  /**
   * Saves code
   *
   * @param {string} name
   * @param {string} cssClass
   * @return {Observable}
   */
  save (value: string, url: string) {

     // options
     let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { value, url };

    return this.http.post(this._saveUrl, data, options);

  }

  /**
   * Add code
   *
   * @param {string} type
   * @param {string} name
   * @return {Observable}
   */
  add (type: string, name: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { type, name };

    return this.http.post(this._addUrl, data, options);

  }



}