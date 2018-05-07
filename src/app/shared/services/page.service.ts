import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class PageService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/pages/list';
  private _addUrl = 'api/pages/add';
  private _updateSettingsUrl = 'api/pages/settings';
  private _removePageUrl = 'api/pages/remove';

  /**
   * Lists pages
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
   * Adds a page
   *
   * @param {string} url
   * @param {string} title
   * @param {string} description
   * @return {Observable}
   */
  add (url: string, title: string, description: string, template: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { url, title, description, template };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Updates the settings for a page
   *
   * @param {string} url
   * @param {string} title
   * @param {string} description
   * @param {string} keywords
   * @param {string} callout
   * @param {string} layout
   * @param {string} language
   * @param {string} direction
   * @param {string} template
   * @param {string} customHeader
   * @param {string} customFooter
   * @return {Observable}
   */
  updateSettings (url: string, title: string, description: string, keywords: string, tags: string, callout: string, language: string, direction: string, template: string, customHeader: string, customFooter: string, photo: string, thumb: string, location: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { url, title, description, keywords, tags, callout, language, direction, template, customHeader, customFooter, photo, thumb, location };

    return this.http.post(this._updateSettingsUrl, data, options);

  }

  /**
   * Removes the page
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
    let data = { url  };

    return this.http.post(this._removePageUrl, data, options);

  }

}