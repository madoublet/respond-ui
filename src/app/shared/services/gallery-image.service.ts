import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class GalleryImageService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/galleries/images/list';
  private _addUrl = 'api/galleries/images/add';
  private _editUrl = 'api/galleries/images/edit';
  private _removeUrl = 'api/galleries/images/remove';
  private _updateOrderUrl = 'api/galleries/images/order';

  /**
   * Lists images
   *
   */
  list (galleryId: string) {

    let url = this._listUrl + '/' + encodeURI(galleryId);
    
    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(url, options);
  }

  /**
   * Adds an image
   *
   * @param {string} name
   * @param {string} url
   * @param {string} caption
   * @param {string} galleryId
   * @return {Observable}
   */
  add (name: string, url: string, thumb: string, caption: string, galleryId: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { name, url, thumb, caption, galleryId };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Edits an image
   *
   * @param {string} id
   * @param {string} caption
   * @param {string} galleryId
   * @return {Observable}
   */
  edit (id: string, caption: string, galleryId: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, caption, galleryId };

    return this.http.post(this._editUrl, data, options);

  }

  /**
   * Removes an image
   *
   * @param {string} id
   * @return {Observable}
   */
  remove (id: string, galleryId: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, galleryId };

    return this.http.post(this._removeUrl, data, options);

  }

  /**
   * Updates the order of images
   *
   * @param {string} id
   * @param {array} images
   * @return {Observable}
   */
  updateOrder (images, galleryId: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { images, galleryId };

    return this.http.post(this._updateOrderUrl, data, options);

  }

}