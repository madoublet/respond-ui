import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/products/list';
  private _retrieveUrl = 'api/products/retrieve';
  private _addUrl = 'api/products/add';
  private _editUrl = 'api/products/edit';
  private _removeUrl = 'api/products/remove';

  // images
  private _addImagesUrl = 'api/products/images/add';
  private _editImagesUrl = 'api/products/images/edit';
  private _removeImagesUrl = 'api/products/images/remove';
  private _updateImageOrderUrl = 'api/products/images/order'

  /**
   * Lists products for a site
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
   * Retrieves a specific product for a site
   * 
   * @param {string} id The id for the product (must be unique)
   * @return {Observable}
   */
  retrieve (id: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._retrieveUrl + '/' + id, options);
  }

  /**
   * Adds a product
   *
   * @param {string} id The id for the product (must be unique)
   * @param {string} url The url of the product page.
   * @param {string} name The name of the product
   * @param {string} description The description of the product
   * @param {boolean} shipped Whether the product is shipped or not
   * @param {number} price The price of the product
   * @param {string} file The location of the file to be downloaded
   * @param {boolean} subscription Whether the product is a subscription
   * @param {string} plan The plan id of the subscription
   * @param {string} planPrice The text representation of the plan price (e.g. $25 /month)
   * @return {Observable}
   */
  add (id: string, url: string, name: string, description: string, shipped: boolean, price: number, file: string, subscription: boolean, plan: string, planPrice: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, url, name, description, shipped, price, file, subscription, plan, planPrice };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Edits a product
   *
   * @param {string} id The id for the product (must be unique)
   * @param {string} name The name of the product
   * @param {boolean} shipped Whether the product is shipped or not
   * @param {number} price The price of the product
   * @param {string} file The location of the file to be downloaded
   * @param {boolean} subscription Whether the product is a subscription
   * @param {string} plan The plan id of the subscription
   * @param {string} planPrice The text representation of the plan price (e.g. $25 /month)
   * @return {Observable}
   */
  edit (id: string, name: string, description: string, shipped: boolean, price: number, file: string, subscription: boolean, plan: string, planPrice: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, name, description, shipped, price, file, subscription, plan, planPrice };

    return this.http.post(this._editUrl, data, options);

  }

  /**
   * Removes a product
   *
   * @param {string} id The ID of the product
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

  /**
   * Adds an image
   *
   * @param {string} name
   * @param {string} url
   * @param {string} caption
   * @param {string} productId
   * @return {Observable}
   */
  addImage (id: string, name: string, url: string, thumb: string, caption: string, productId: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, name, url, thumb, caption, productId };

    return this.http.post(this._addImagesUrl, data, options);

  }

  /**
   * Updates the order of images
   *
   * @param {string} id
   * @param {array} images
   * @return {Observable}
   */
  updateImageOrder (images, productId: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { images, productId };

    return this.http.post(this._updateImageOrderUrl, data, options);

  }

  /**
   * Removes an image from a product
   *
   * @param {string} id The ID of the product
   * @return {Observable}
   */
  removeImage (id: string, productId: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, productId };

    return this.http.post(this._removeImagesUrl, data, options);

  }

  /**
   * Edits the caption for an image
   *
   * @param {string} id The ID of the product
   * @return {Observable}
   */
  editImage (id: string, caption: string, productId: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, caption, productId };

    return this.http.post(this._editImagesUrl, data, options);

  }

}