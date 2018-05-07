import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class SiteService {
  constructor (private http: HttpClient) {}

  private _addUrl = 'api/sites/add';
  private _updateUrl = 'api/sites/update';
  private _createUrl = 'api/sites/create';
  private _listUrl = 'api/sites/list';
  private _subscribeUrl = 'api/payment/subscribe';
  private _unsubscribeUrl = 'api/payment/unsubscribe';
  private _reloadUrl = 'api/sites/reload';
  private _reindexUrl = 'api/sites/reindex';
  private _sitemapUrl = 'api/sites/sitemap';
  private _migrateUrl = 'api/sites/migrate';
  private _templateUrl = 'api/sites/republish/templates';
  private _listTemplatesUrl = 'api/templates/list';
  private _listPluginsUrl = 'api/plugins/list';
  private _updatePluginsUrl = 'api/sites/update/plugins';
  private _removePluginUrl = 'api/plugins/remove';
  private _retrieveSubscriptionUrl = 'api/payment/subscription/retrieve';
  private _syncUrl = 'api/sites/sync';
  private _zipUrl = 'api/sites/zip';
  private _switchUrl = 'api/sites/switch';

  /**
   * Create to the application
   *
   * @param {string} name The site id
   * @param {string} theme theme of site
   * @param {string} email The user's login email
   * @param {string} password The user's login password
   * @param {string} passcode
   * @param {string} recaptcahResponse
   * @return {Observable}
   */
  create (name: string, theme: string, email: string, password: string, passcode: string, recaptchaResponse: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    // data
    let data = { name, theme, email, password, passcode, recaptchaResponse };

    return this.http.post(this._createUrl, data, options);

  }

  /**
   * Adds a site
   *
   * @param {string} name The site id
   * @param {string} theme theme of site
   * @return {Observable}
   */
  add (name: string, theme: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    let data = { name, theme };

    return this.http.post(this._addUrl, data, options);

  }

  /**
   * Update sites
   *
   * @param {string} id The site id
   * @param {string} name
   * @param {string} email
   * @param {string} status
   * @param {string} messageColor
   * @param {string} messageText
   * @param {string} messageLink
   * @return {Observable}
   */
  update (id: string, name: string, email: string, status: string, messageColor: string, messageText: string, messageLink: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id, name, email, status, messageColor, messageText, messageLink };

    return this.http.post(this._updateUrl, data, options);

  }

  /**
   * Switch sites
   *
   * @param {string} id The site id
   * @return {Observable}
   */
  switch (id: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    let data = { id };

    return this.http.post(this._switchUrl, data, options);

  }

  /**
   * Lists sites for a user
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
   * Subscribes a site
   *
   * @param {string} token
   * @param {string} email
   * @return {Observable}
   */
  subscribe (token: string, email: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    let data = { token, email };

    return this.http.post(this._subscribeUrl, data, options);

  }

  /**
   * Unsubscribes a site
   *
   * @return {Observable}
   */
  unsubscribe () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    let data = { };

    return this.http.post(this._unsubscribeUrl, data, options);

  }

  /**
   * Retrieve subscription
   *
   */
  retrieveSubscription () {
    
    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._retrieveSubscriptionUrl, options);
  }

  /**
   * Reloads the system files
   *
   * @return {Observable}
   */
  reload () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._reloadUrl, options);

  }

  /**
   * Reindexes pages in the site
   *
   * @return {Observable}
   */
  reindex () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._reindexUrl, options);

  }

  /**
   * Republishes the sitemap
   *
   * @return {Observable}
   */
  sitemap () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._sitemapUrl, options);

  }

  /**
   * Republishes templates
   *
   * @return {Observable}
   */
  republishTemplates () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._templateUrl, options);

  }

  /**
   * Lists templates
   *
   */
  listTemplates () {
    
    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._listTemplatesUrl, options);
  }

  /**
   * Lists plugins
   *
   */
  listPlugins () {
    
    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._listPluginsUrl, options);
  }

  /**
   * Updates plugins
   *
   * @return {Observable}
   */
  updatePlugins () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._updatePluginsUrl, options);

  }

  /**
   * Removes the plugin
   *
   * @param {string} selector
   * @return {Observable}
   */
  removePlugin (selector: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    let data = { selector };

    return this.http.post(this._removePluginUrl, data, options);

  }

  /**
   * Syncs the site to an external provider
   *
   * @return {Observable}
   */
  sync () {
    
    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};
  
      return this.http.get(this._syncUrl, options);
  
  }

  /**
   * Downloads the site as a zip file
   *
   * @return {Observable}
   */
  zip () {
    
    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._zipUrl, options);

  }


}