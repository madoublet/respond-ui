import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  constructor (private http: Http) {}

  private _listUrl = 'api/products/list';
  private _addUrl = 'api/products/add';
  private _editUrl = 'api/products/edit';
  private _removeUrl = 'api/products/remove';

  /**
   * Lists products for a site
   *
   */
  list () {

    let headers = new Headers();
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this._listUrl, options).map((res:Response) => res.json());
  }

  /**
   * Adds a product
   *
   * @param {string} sku The sku for the product (must be unique)
   * @param {string} name The name of the product
   * @param {boolean} shipped Whether the product is shipped or not
   * @param {number} price The price of the product
   * @param {string} file The location of the file to be downloaded
   * @param {boolean} subscription Whether the product is a subscription
   * @param {string} plan The plan id of the subscription
   * @param {string} planPrice The text representation of the plan price (e.g. $25 /month)
   * @return {Observable}
   */
  add (sku: string, name: string, shipped: boolean, price: number, file: string, subscription: boolean, plan: string, planPrice: string) {

    let body = JSON.stringify({ sku, name, shipped, price, file, subscription, plan, planPrice });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._addUrl, body, options)
                    .map((res:Response) => res.json());

  }

  /**
   * Edits a product
   *
   * @param {string} sku The sku for the product (must be unique)
   * @param {string} name The name of the product
   * @param {boolean} shipped Whether the product is shipped or not
   * @param {number} price The price of the product
   * @param {string} file The location of the file to be downloaded
   * @param {boolean} subscription Whether the product is a subscription
   * @param {string} plan The plan id of the subscription
   * @param {string} planPrice The text representation of the plan price (e.g. $25 /month)
   * @return {Observable}
   */
  edit (sku: string, name: string, shipped: boolean, price: number, file: string, subscription: boolean, plan: string, planPrice: string) {

    let body = JSON.stringify({ sku, name, shipped, price, file, subscription, plan, planPrice });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let _options = new RequestOptions({ headers: headers });

    return this.http.post(this._editUrl, body, _options);

  }

  /**
   * Removes a product
   *
   * @param {string} name
   * @param {string} index
   * @return {Observable}
   */
  remove (sku: string) {

    let body = JSON.stringify({ sku });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._removeUrl, body, options);

  }

}