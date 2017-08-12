webpackJsonp([1,5],Array(35).concat([
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this._settingsUrl = 'api/app/settings';
        this._themesListUrl = 'api/themes/list';
        this._languagesListUrl = 'api/languages/list';
    }
    /**
     * Retrieve settings for the application
     *
     */
    AppService.prototype.retrieveSettings = function () {
        return this.http.get(this._settingsUrl).map(function (res) { return res.json(); });
    };
    /**
     * Lists themes in the application
     *
     */
    AppService.prototype.listThemes = function () {
        return this.http.get(this._themesListUrl).map(function (res) { return res.json(); });
    };
    /**
     * Lists languages available to the application
     *
     */
    AppService.prototype.listLanguages = function () {
        return this.http.get(this._languagesListUrl).map(function (res) { return res.json(); });
    };
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], AppService);
    return AppService;
    var _a;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteService = (function () {
    function SiteService(http) {
        this.http = http;
        this._createUrl = 'api/sites/create';
        this._subscribeUrl = 'api/sites/subscribe';
        this._reloadUrl = 'api/sites/reload';
        this._reindexUrl = 'api/sites/reindex';
        this._sitemapUrl = 'api/sites/sitemap';
        this._migrateUrl = 'api/sites/migrate';
        this._templateUrl = 'api/sites/republish/templates';
        this._listTemplatesUrl = 'api/templates/list';
        this._listPluginsUrl = 'api/plugins/list';
        this._updateUrl = 'api/sites/update/plugins';
        this._removePluginUrl = 'api/plugins/remove';
    }
    /**
     * Login to the application
     *
     * @param {string} id The site id
     * @param {string} email The user's login email
     * @param {string} password The user's login password
     * @return {Observable}
     */
    SiteService.prototype.create = function (name, theme, email, password, passcode, recaptchaResponse) {
        var body = JSON.stringify({ name: name, theme: theme, email: email, password: password, passcode: passcode, recaptchaResponse: recaptchaResponse });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._createUrl, body, options)
            .map(function (res) { return res.json(); });
    };
    /**
     * Subscribes a site
     *
     * @param {string} token
     * @param {string} email
     * @return {Observable}
     */
    SiteService.prototype.subscribe = function (token, email) {
        var body = JSON.stringify({ token: token, email: email });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._subscribeUrl, body, options);
    };
    /**
     * Reloads the system files
     *
     * @return {Observable}
     */
    SiteService.prototype.reload = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._reloadUrl, options);
    };
    /**
     * Reindexes pages in the site
     *
     * @return {Observable}
     */
    SiteService.prototype.reindex = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._reindexUrl, options);
    };
    /**
     * Republishes the sitemap
     *
     * @return {Observable}
     */
    SiteService.prototype.sitemap = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._sitemapUrl, options);
    };
    /**
     * Migrates a R5 site to R6
     *
     * @return {Observable}
     */
    SiteService.prototype.migrate = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._migrateUrl, options);
    };
    /**
     * Republishes templates
     *
     * @return {Observable}
     */
    SiteService.prototype.republishTemplates = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._templateUrl, options);
    };
    /**
     * Lists templates
     *
     */
    SiteService.prototype.listTemplates = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listTemplatesUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Lists plugins
     *
     */
    SiteService.prototype.listPlugins = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listPluginsUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Updates plugins
     *
     * @return {Observable}
     */
    SiteService.prototype.updatePlugins = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._updateUrl, options);
    };
    /**
     * Removes the plugin
     *
     * @param {string} selector
     * @return {Observable}
     */
    SiteService.prototype.removePlugin = function (selector) {
        var body = JSON.stringify({ selector: selector });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removePluginUrl, body, options);
    };
    SiteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], SiteService);
    return SiteService;
    var _a;
}());

//# sourceMappingURL=site.service.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._listUrl = 'api/users/list';
        this._loginUrl = 'api/users/login';
        this._forgotUrl = 'api/users/forgot';
        this._resetUrl = 'api/users/reset';
        this._addUrl = 'api/users/add';
        this._editUrl = 'api/users/edit';
        this._removeUrl = 'api/users/remove';
        this._countUrl = 'api/users/site/count';
    }
    /**
     * Lists users
     *
     */
    UserService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Login to the application
     *
     * @param {string} id The site id
     * @param {string} email The user's login email
     * @param {string} password The user's login password
     * @return {Observable}
     */
    UserService.prototype.login = function (id, email, password) {
        var body = JSON.stringify({ id: id, email: email, password: password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._loginUrl, body, options)
            .map(function (res) { return res.json(); });
    };
    /**
     * Requests the user's password to be reset
     *
     * @param {string} id The site id
     * @param {string} email The user's login email
     * @return {Observable}
     */
    UserService.prototype.forgot = function (id, email) {
        var body = JSON.stringify({ id: id, email: email });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._forgotUrl, body, options);
    };
    /**
     * Resets the password
     *
     * @param {string} id The site id
     * @param {string} token The token needed to reset the password
     * @param {string} password The new password
     * @return {Observable}
     */
    UserService.prototype.reset = function (id, token, password) {
        var body = JSON.stringify({ id: id, token: token, password: password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._resetUrl, body, options);
    };
    /**
     * Determines the # of sites associated with an email
     *
     * @param {string} id The site id
     * @param {string} token The token needed to reset the password
     * @param {string} password The new password
     * @return {Observable}
     */
    UserService.prototype.hasMultipleSites = function (email) {
        var body = JSON.stringify({ email: email });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._countUrl, body, options);
    };
    /**
     * Adds the user
     *
     * @param {string} email
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} password
     * @param {string} language
     * @return {Observable}
     */
    UserService.prototype.add = function (email, firstName, lastName, password, language) {
        var body = JSON.stringify({ email: email, firstName: firstName, lastName: lastName, password: password, language: language });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
    /**
     * Edits the user
     *
     * @param {string} email
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} password
     * @param {string} language
     * @return {Observable}
     */
    UserService.prototype.edit = function (email, firstName, lastName, password, language) {
        var body = JSON.stringify({ email: email, firstName: firstName, lastName: lastName, password: password, language: language });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, options);
    };
    /**
     * Removes the user
     *
     * @param {string} email
     * @return {Observable}
     */
    UserService.prototype.remove = function (email) {
        var body = JSON.stringify({ email: email });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this._listUrl = 'api/pages/list';
        this._addUrl = 'api/pages/add';
        this._updateSettingsUrl = 'api/pages/settings';
        this._removePageUrl = 'api/pages/remove';
    }
    /**
     * Lists pages
     *
     */
    PageService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Adds a page
     *
     * @param {string} url
     * @param {string} title
     * @param {string} description
     * @return {Observable}
     */
    PageService.prototype.add = function (url, title, description, template) {
        var body = JSON.stringify({ url: url, title: title, description: description, template: template });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
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
    PageService.prototype.updateSettings = function (url, title, description, keywords, tags, callout, language, direction, template, customHeader, customFooter, photo, thumb, location) {
        var body = JSON.stringify({ url: url, title: title, description: description, keywords: keywords, tags: tags, callout: callout, language: language, direction: direction, template: template, customHeader: customHeader, customFooter: customFooter, photo: photo, thumb: thumb, location: location });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._updateSettingsUrl, body, options);
    };
    /**
     * Removes the page
     *
     * @param {string} url
     * @return {Observable}
     */
    PageService.prototype.remove = function (url) {
        var body = JSON.stringify({ url: url });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removePageUrl, body, options);
    };
    PageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], PageService);
    return PageService;
    var _a;
}());

//# sourceMappingURL=page.service.js.map

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormFieldService = (function () {
    function FormFieldService(http) {
        this.http = http;
        this._listUrl = 'api/forms/fields/list';
        this._addUrl = 'api/forms/fields/add';
        this._editUrl = 'api/forms/fields/edit';
        this._removeUrl = 'api/forms/fields/remove';
        this._updateOrderUrl = 'api/forms/fields/order';
    }
    /**
     * Lists fields
     *
     */
    FormFieldService.prototype.list = function (id) {
        var url = this._listUrl + '/' + encodeURI(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    /**
     * Adds a form filed
     *
     * @param {string} label
     * @param {string} type
     * @param {boolean} required
     * @param {string} options
     * @param {string} helperText
     * @param {string} placeholder
     * @param {string} cssClass
     * @return {Observable}
     */
    FormFieldService.prototype.add = function (id, label, type, required, options, helperText, placeholder, cssClass) {
        var body = JSON.stringify({ id: id, label: label, type: type, required: required, options: options, helperText: helperText, placeholder: placeholder, cssClass: cssClass });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, _options);
    };
    /**
     * Edits a form field
     *
     * @param {string} id
     * @param {number} index
     * @param {string} label
     * @param {string} type
     * @param {boolean} required
     * @param {string} options
     * @param {string} helperText
     * @param {string} placeholder
     * @param {string} cssClass
     * @return {Observable}
     */
    FormFieldService.prototype.edit = function (id, index, label, type, required, options, helperText, placeholder, cssClass) {
        var body = JSON.stringify({ id: id, index: index, label: label, type: type, required: required, options: options, helperText: helperText, placeholder: placeholder, cssClass: cssClass });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, _options);
    };
    /**
     * Removes a form field
     *
     * @param {string} name
     * @param {string} index
     * @return {Observable}
     */
    FormFieldService.prototype.remove = function (id, index) {
        var body = JSON.stringify({ id: id, index: index });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    /**
     * Updates the order of fields
     *
     * @param {string} name
     * @param {string} priority
     * @return {Observable}
     */
    FormFieldService.prototype.updateOrder = function (id, fields) {
        var body = JSON.stringify({ id: id, fields: fields });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._updateOrderUrl, body, options);
    };
    FormFieldService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], FormFieldService);
    return FormFieldService;
    var _a;
}());

//# sourceMappingURL=form-field.service.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormService = (function () {
    function FormService(http) {
        this.http = http;
        this._listUrl = 'api/forms/list';
        this._addUrl = 'api/forms/add';
        this._editUrl = 'api/forms/edit';
        this._removeUrl = 'api/forms/remove';
    }
    /**
     * Lists forms
     *
     */
    FormService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Adds a form
     *
     * @param {string} name
     * @param {string} cssClass
     * @return {Observable}
     */
    FormService.prototype.add = function (name, cssClass, validate, success, error, recaptchaError, notify) {
        var body = JSON.stringify({ name: name, cssClass: cssClass, validate: validate, success: success, error: error, recaptchaError: recaptchaError, notify: notify });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
    /**
     * Edits a form
     *
     * @param {string} name
     * @return {Observable}
     */
    FormService.prototype.edit = function (id, name, cssClass, validate, success, error, recaptchaError, notify) {
        var body = JSON.stringify({ id: id, name: name, cssClass: cssClass, validate: validate, success: success, error: error, recaptchaError: recaptchaError, notify: notify });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, options);
    };
    /**
     * Removes a form
     *
     * @param {string} id
     * @return {Observable}
     */
    FormService.prototype.remove = function (id) {
        var body = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    FormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], FormService);
    return FormService;
    var _a;
}());

//# sourceMappingURL=form.service.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryService = (function () {
    function GalleryService(http) {
        this.http = http;
        this._listUrl = 'api/galleries/list';
        this._addUrl = 'api/galleries/add';
        this._editUrl = 'api/galleries/edit';
        this._removeUrl = 'api/galleries/remove';
    }
    /**
     * Lists forms
     *
     */
    GalleryService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Adds a gallery
     *
     * @param {string} name
     * @param {string} cssClass
     * @return {Observable}
     */
    GalleryService.prototype.add = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
    /**
     * Edits a gallery
     *
     * @param {string} name
     * @return {Observable}
     */
    GalleryService.prototype.edit = function (id, name) {
        var body = JSON.stringify({ id: id, name: name });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, options);
    };
    /**
     * Removes a gallery
     *
     * @param {string} id
     * @return {Observable}
     */
    GalleryService.prototype.remove = function (id) {
        var body = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    GalleryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], GalleryService);
    return GalleryService;
    var _a;
}());

//# sourceMappingURL=gallery.service.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuItemService = (function () {
    function MenuItemService(http) {
        this.http = http;
        this._listUrl = 'api/menus/items/list';
        this._addUrl = 'api/menus/items/add';
        this._editUrl = 'api/menus/items/edit';
        this._removeUrl = 'api/menus/items/remove';
        this._updateOrderUrl = 'api/menus/items/order';
    }
    /**
     * Lists items
     *
     */
    MenuItemService.prototype.list = function (id) {
        var url = this._listUrl + '/' + encodeURI(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
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
    MenuItemService.prototype.add = function (id, html, cssClass, isNested, url, target) {
        var body = JSON.stringify({ id: id, html: html, cssClass: cssClass, isNested: isNested, url: url, target: target });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
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
    MenuItemService.prototype.edit = function (id, index, html, cssClass, isNested, url, target) {
        var body = JSON.stringify({ id: id, index: index, html: html, cssClass: cssClass, isNested: isNested, url: url, target: target });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, options);
    };
    /**
     * Removes a menu item
     *
     * @param {string} name
     * @param {string} index
     * @return {Observable}
     */
    MenuItemService.prototype.remove = function (id, index) {
        var body = JSON.stringify({ id: id, index: index });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    /**
     * Updates the order of a list
     *
     * @param {string} name
     * @param {string} priority
     * @return {Observable}
     */
    MenuItemService.prototype.updateOrder = function (id, items) {
        var body = JSON.stringify({ id: id, items: items });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._updateOrderUrl, body, options);
    };
    MenuItemService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], MenuItemService);
    return MenuItemService;
    var _a;
}());

//# sourceMappingURL=menu-item.service.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this._listUrl = 'api/menus/list';
        this._listItemsUrl = 'api/menus/items/list';
        this._addUrl = 'api/menus/add';
        this._editUrl = 'api/menus/edit';
        this._removeUrl = 'api/menus/remove';
    }
    /**
     * Lists menus
     *
     */
    MenuService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Adds a menu
     *
     * @param {string} name
     * @return {Observable}
     */
    MenuService.prototype.add = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
    /**
     * Edits a menu
     *
     * @param {string} name
     * @return {Observable}
     */
    MenuService.prototype.edit = function (id, name) {
        var body = JSON.stringify({ id: id, name: name });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, options);
    };
    /**
     * Removes a menu
     *
     * @param {string} id
     * @return {Observable}
     */
    MenuService.prototype.remove = function (id) {
        var body = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    MenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], MenuService);
    return MenuService;
    var _a;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentService = (function () {
    function ComponentService(http) {
        this.http = http;
        this._listUrl = 'api/components/list';
        this._addUrl = 'api/components/add';
        this._removeUrl = 'api/components/remove';
    }
    /**
     * Lists components
     *
     */
    ComponentService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Adds a component
     *
     * @param {string} url
     * @return {Observable}
     */
    ComponentService.prototype.add = function (url) {
        var body = JSON.stringify({ url: url });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
    /**
     * Removes the component
     *
     * @param {string} url
     * @return {Observable}
     */
    ComponentService.prototype.remove = function (url) {
        var body = JSON.stringify({ url: url });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    ComponentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], ComponentService);
    return ComponentService;
    var _a;
}());

//# sourceMappingURL=component.service.js.map

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileService = (function () {
    function FileService(http) {
        this.http = http;
        this._listUrl = 'api/files/list';
        this._removeFileUrl = 'api/files/remove';
    }
    /**
     * Lists files in the application
     *
     */
    FileService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Removes the file
     *
     * @param {string} name
     * @return {Observable}
     */
    FileService.prototype.remove = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeFileUrl, body, options);
    };
    FileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], FileService);
    return FileService;
    var _a;
}());

//# sourceMappingURL=file.service.js.map

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryImageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryImageService = (function () {
    function GalleryImageService(http) {
        this.http = http;
        this._listUrl = 'api/galleries/images/list';
        this._addUrl = 'api/galleries/images/add';
        this._editUrl = 'api/galleries/images/edit';
        this._removeUrl = 'api/galleries/images/remove';
        this._updateOrderUrl = 'api/galleries/images/order';
    }
    /**
     * Lists images
     *
     */
    GalleryImageService.prototype.list = function (galleryId) {
        var url = this._listUrl + '/' + encodeURI(galleryId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    /**
     * Adds an image
     *
     * @param {string} name
     * @param {string} url
     * @param {string} caption
     * @param {string} galleryId
     * @return {Observable}
     */
    GalleryImageService.prototype.add = function (name, url, thumb, caption, galleryId) {
        var body = JSON.stringify({ name: name, url: url, thumb: thumb, caption: caption, galleryId: galleryId });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, _options);
    };
    /**
     * Edits an image
     *
     * @param {string} id
     * @param {string} caption
     * @param {string} galleryId
     * @return {Observable}
     */
    GalleryImageService.prototype.edit = function (id, caption, galleryId) {
        var body = JSON.stringify({ id: id, caption: caption, galleryId: galleryId });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, _options);
    };
    /**
     * Removes an image
     *
     * @param {string} id
     * @return {Observable}
     */
    GalleryImageService.prototype.remove = function (id, galleryId) {
        var body = JSON.stringify({ id: id, galleryId: galleryId });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    /**
     * Updates the order of images
     *
     * @param {string} id
     * @param {array} images
     * @return {Observable}
     */
    GalleryImageService.prototype.updateOrder = function (images, galleryId) {
        var body = JSON.stringify({ images: images, galleryId: galleryId });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._updateOrderUrl, body, options);
    };
    GalleryImageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], GalleryImageService);
    return GalleryImageService;
    var _a;
}());

//# sourceMappingURL=gallery-image.service.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteService = (function () {
    function RouteService(http) {
        this.http = http;
        this._listUrl = 'api/routes/list';
    }
    /**
     * Lists pages in the application
     *
     */
    RouteService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    RouteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], RouteService);
    return RouteService;
    var _a;
}());

//# sourceMappingURL=route.service.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmissionService = (function () {
    function SubmissionService(http) {
        this.http = http;
        this._listUrl = 'api/submissions/list';
        this._removeUrl = 'api/submissions/remove';
    }
    /**
     * Lists submissions in the application
     *
     */
    SubmissionService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Removes the submission
     *
     * @param {string} url
     * @return {Observable}
     */
    SubmissionService.prototype.remove = function (id) {
        var body = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    SubmissionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], SubmissionService);
    return SubmissionService;
    var _a;
}());

//# sourceMappingURL=submission.service.js.map

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvancedComponent = (function () {
    function AdvancedComponent(_siteService, _router) {
        this._siteService = _siteService;
        this._router = _router;
        this.addVisible = false;
        this.removeVisible = false;
        this.drawerVisible = false;
        this.settingsVisible = false;
    }
    /**
     * Init pages
     *
     */
    AdvancedComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.settingsVisible = false;
        this.drawerVisible = false;
        this.list();
    };
    /**
     * Updates the list
     */
    AdvancedComponent.prototype.list = function () {
        this.reset();
    };
    /**
     * Resets an modal booleans
     */
    AdvancedComponent.prototype.reset = function () {
        this.drawerVisible = false;
    };
    /**
     * Sets the list item to active
     *
     * @param {String} option
     */
    AdvancedComponent.prototype.setActive = function (option) {
        this.selectedOption = option;
    };
    /**
     * Shows the drawer
     */
    AdvancedComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Reload system files
     */
    AdvancedComponent.prototype.reload = function () {
        this._siteService.reload()
            .subscribe(function (data) { toast.show('success'); }, function (error) { toast.show('failure'); });
    };
    /**
     * Reindex pages
     */
    AdvancedComponent.prototype.reindex = function () {
        this._siteService.reindex()
            .subscribe(function (data) { toast.show('success'); }, function (error) { toast.show('failure'); });
    };
    /**
     * Republish site
     */
    AdvancedComponent.prototype.sitemap = function () {
        this._siteService.sitemap()
            .subscribe(function (data) { toast.show('success'); }, function (error) { toast.show('failure'); });
    };
    /**
     * Migrate R5 site
     */
    AdvancedComponent.prototype.migrate = function () {
        this._siteService.migrate()
            .subscribe(function (data) { toast.show('success'); }, function (error) { toast.show('failure'); });
    };
    /**
     * Republish Templates
     */
    AdvancedComponent.prototype.templates = function () {
        this._siteService.republishTemplates()
            .subscribe(function (data) { toast.show('success'); }, function (error) { toast.show('failure'); });
    };
    /**
     * Updates Plugins (re-syncs them with the latest version from the theme)
     */
    AdvancedComponent.prototype.update = function () {
        this._siteService.updatePlugins()
            .subscribe(function (data) { toast.show('success'); }, function (error) { toast.show('failure'); });
    };
    /**
     * handles error
     */
    AdvancedComponent.prototype.failure = function (obj) {
        console.log(obj);
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    AdvancedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-advanced',
            template: __webpack_require__(436),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AdvancedComponent);
    return AdvancedComponent;
    var _a, _b;
}());

//# sourceMappingURL=advanced.component.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_code_service__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeComponent = (function () {
    function CodeComponent(_route, _router, _codeService) {
        this._route = _route;
        this._router = _router;
        this._codeService = _codeService;
        this.codeType = 'not-specified';
        this.addVisible = false;
    }
    /**
     * init
     */
    CodeComponent.prototype.ngOnInit = function () {
        var id, codeUrl;
        id = localStorage.getItem('respond.siteId');
        this.codeUrl = localStorage.getItem('respond.codeUrl');
        this.codeType = localStorage.getItem('respond.codeType');
        this.showMenu = true;
        this.addVisible = false;
        // get types
        this.pages = [];
        this.templates = [];
        this.stylesheets = [];
        this.scripts = [];
        this.plugins = [];
        this.components = [];
        // set expanded
        this.isPagesExpanded = false;
        this.isTemplatesExpanded = false;
        this.isStylesheetsExpanded = false;
        this.isScriptsExpanded = false;
        this.isPluginsExpanded = false;
        this.isComponentsExpanded = false;
        if (this.codeType == 'page' || this.codeType == 'component') {
            this.showMenu = false;
        }
        else {
            this.list();
        }
        this.retrieve();
        this.setExpanded();
    };
    /**
     * determines which area is expanded by default
     */
    CodeComponent.prototype.setExpanded = function () {
        if (this.codeType == 'page') {
            this.isPagesExpanded = true;
        }
        else if (this.codeType == 'template') {
            this.isTemplatesExpanded = true;
        }
        else if (this.codeType == 'stylesheet') {
            this.isStylesheetsExpanded = true;
        }
        else if (this.codeType == 'script') {
            this.isScriptsExpanded = true;
        }
        else if (this.codeType == 'plugin') {
            this.isPluginsExpanded = true;
        }
        else if (this.codeType == 'component') {
            this.isComponentsExpanded = true;
        }
    };
    /**
    * determines which area is expanded by default
    */
    CodeComponent.prototype.expand = function (codeType) {
        if (codeType == 'page') {
            this.isPagesExpanded = !this.isPagesExpanded;
        }
        else if (codeType == 'template') {
            this.isTemplatesExpanded = !this.isTemplatesExpanded;
        }
        else if (codeType == 'stylesheet') {
            this.isStylesheetsExpanded = !this.isStylesheetsExpanded;
        }
        else if (codeType == 'script') {
            this.isScriptsExpanded = !this.isScriptsExpanded;
        }
        else if (codeType == 'plugin') {
            this.isPluginsExpanded = !this.isPluginsExpanded;
        }
        else if (codeType == 'component') {
            this.isComponentsExpanded = !this.isComponentsExpanded;
        }
    };
    /**
     * Resets modal booleans
     */
    CodeComponent.prototype.reset = function () {
        this.addVisible = false;
    };
    /**
     * navigates back
     */
    CodeComponent.prototype.back = function () {
        history.go(-1);
    };
    /**
     * Updates the list
     */
    CodeComponent.prototype.retrieve = function () {
        var _this = this;
        this._codeService.retrieve(this.codeUrl, this.codeType)
            .subscribe(function (data) { _this.setupEditor(data); }, function (error) { _this.failure(error); });
    };
    /**
     * Views a code block
     */
    CodeComponent.prototype.view = function (type, url) {
        this.codeType = type;
        this.codeUrl = url;
        this.retrieve();
    };
    /**
     * Updates the list
     */
    CodeComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._codeService.list('page')
            .subscribe(function (data) { _this.pages = data; }, function (error) { _this.failure(error); });
        this._codeService.list('template')
            .subscribe(function (data) { _this.templates = data; }, function (error) { _this.failure(error); });
        this._codeService.list('stylesheet')
            .subscribe(function (data) { _this.stylesheets = data; }, function (error) { _this.failure(error); });
        this._codeService.list('script')
            .subscribe(function (data) { _this.scripts = data; }, function (error) { _this.failure(error); });
        this._codeService.list('plugin')
            .subscribe(function (data) { _this.plugins = data; }, function (error) { _this.failure(error); });
        this._codeService.list('component')
            .subscribe(function (data) { _this.components = data; }, function (error) { _this.failure(error); });
    };
    /**
     * setup the ace editor
     */
    CodeComponent.prototype.setupEditor = function (data) {
        this.editor = ace.edit("editor");
        if (this.codeType == "page") {
            this.editor.getSession().setMode("ace/mode/html");
        }
        else if (this.codeType == "stylesheet") {
            this.editor.getSession().setMode("ace/mode/css");
        }
        else if (this.codeType == "script") {
            this.editor.getSession().setMode("ace/mode/javascript");
        }
        else if (this.codeType == "plugin") {
            this.editor.getSession().setMode("ace/mode/php");
        }
        else {
            this.editor.getSession().setMode("ace/mode/html");
        }
        this.editor.setValue(data);
        this.editor.setTheme("ace/theme/chrome");
        this.editor.blur();
        this.editor.session.selection.clearSelection();
    };
    /**
     * handles error
     */
    CodeComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            //  this._router.navigate( ['/login'] );
        }
    };
    /**
     * Handles a successful save
     */
    CodeComponent.prototype.success = function () {
        toast.show('success');
    };
    /**
     * Save the code
     */
    CodeComponent.prototype.save = function () {
        var _this = this;
        // save code from the editor
        this._codeService.save(this.editor.getValue(), this.codeUrl, this.codeType)
            .subscribe(function (data) { _this.success(); _this.list(); }, function (error) { _this.failure(error); });
    };
    /**
     * Save the code and go back
     */
    CodeComponent.prototype.saveAndExit = function () {
        var _this = this;
        // save code from the editor
        this._codeService.save(this.editor.getValue(), this.codeUrl, this.codeType)
            .subscribe(function (data) { _this.success(); history.go(-1); }, function (error) { _this.failure(error); });
    };
    /**
     * Shows the add dialog
     */
    CodeComponent.prototype.showAdd = function () {
        this.addVisible = true;
    };
    CodeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-code',
            template: __webpack_require__(438),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_code_service__["a" /* CodeService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_code_service__["a" /* CodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_code_service__["a" /* CodeService */]) === "function" && _c || Object])
    ], CodeComponent);
    return CodeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=code.component.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_component_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentsComponent = (function () {
    function ComponentsComponent(_componentService, _router) {
        this._componentService = _componentService;
        this._router = _router;
        this.addVisible = false;
        this.removeVisible = false;
        this.drawerVisible = false;
    }
    /**
     * Init
     *
     */
    ComponentsComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.addVisible = false;
        this.removeVisible = false;
        this.drawerVisible = false;
        this.component = {};
        this.components = [];
        this.list();
    };
    /**
     * Updates the list
     */
    ComponentsComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._componentService.list()
            .subscribe(function (data) { _this.components = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Resets modal booleans
     */
    ComponentsComponent.prototype.reset = function () {
        this.removeVisible = false;
        this.addVisible = false;
        this.drawerVisible = false;
        this.component = {};
    };
    /**
     * Sets the list item to active
     *
     * @param {Any} component
     */
    ComponentsComponent.prototype.setActive = function (component) {
        this.selectedComponent = component;
    };
    /**
     * Shows the drawer
     */
    ComponentsComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the add dialog
     */
    ComponentsComponent.prototype.showAdd = function () {
        this.addVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     * @param {Any} component
     */
    ComponentsComponent.prototype.showRemove = function (component) {
        this.removeVisible = true;
        this.component = component;
    };
    /**
     * Edits a component
     *
     * @param {Any} component
     */
    ComponentsComponent.prototype.edit = function (component) {
        localStorage.setItem('respond.pageUrl', 'components/' + component.url);
        localStorage.setItem('respond.editMode', 'component');
        var id = Math.random().toString(36).substr(2, 9);
        this._router.navigate(['/edit', id]);
    };
    /**
     * Edits code for a component
     *
     * @param {Any} component
     */
    ComponentsComponent.prototype.editCode = function (component) {
        localStorage.setItem('respond.codeUrl', 'components/' + component.url);
        localStorage.setItem('respond.codeType', 'component');
        var id = Math.random().toString(36).substr(2, 9);
        this._router.navigate(['/code', id]);
    };
    /**
     * handles error
     */
    ComponentsComponent.prototype.failure = function (obj) {
        console.log(obj);
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    ComponentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-components',
            template: __webpack_require__(439),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_component_service__["a" /* ComponentService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_component_service__["a" /* ComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_component_service__["a" /* ComponentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], ComponentsComponent);
    return ComponentsComponent;
    var _a, _b;
}());

//# sourceMappingURL=components.component.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_site_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateComponent = (function () {
    function CreateComponent(_siteService, _appService, _router, _translate) {
        this._siteService = _siteService;
        this._appService = _appService;
        this._router = _router;
        this._translate = _translate;
        window['verifyCallback'] = this.verifyCallback.bind(this);
    }
    /**
     * Init pages
     */
    CreateComponent.prototype.ngOnInit = function () {
        // init
        this.themes = [];
        this.visible = false;
        this.selectedTheme = null;
        this.selectedThemeIndex = 0;
        this.hasPasscode = true;
        this.logoUrl = '';
        this.themesLocation = '';
        this.recaptchaSiteKey = '';
        this.recaptchaResponse = '';
        this.acknowledgement = '';
        // set model
        this.model = {
            name: '',
            theme: '',
            email: '',
            password: '',
            passcode: ''
        };
        // list themes
        this.list();
        // retrieve settings
        this.settings();
    };
    /**
     * Create the site
     *
     */
    CreateComponent.prototype.submit = function () {
        var _this = this;
        this._siteService.create(this.model.name, this.selectedTheme.location, this.model.email, this.model.password, this.model.passcode, this.recaptchaResponse)
            .subscribe(function (data) { _this.site = data; _this.success(); }, function (error) { _this.failure(error); });
    };
    /**
     * Get settings
     */
    CreateComponent.prototype.settings = function () {
        var _this = this;
        // list themes in the app
        this._appService.retrieveSettings()
            .subscribe(function (data) {
            _this.hasPasscode = data.hasPasscode;
            _this.logoUrl = data.logoUrl;
            _this.acknowledgement = data.acknowledgement;
            _this.themesLocation = data.themesLocation;
            _this.recaptchaSiteKey = data.recaptchaSiteKey;
            _this.defaultLanguage = data.defaultLanguage;
            _this.setLanguage(_this.defaultLanguage);
        }, function (error) { _this.failure(error); });
    };
    /**
     * Updates the list
     */
    CreateComponent.prototype.list = function () {
        var _this = this;
        // list themes in the app
        this._appService.listThemes()
            .subscribe(function (data) {
            _this.themes = data;
            _this.selectedTheme = _this.themes[0];
            _this.selectedThemeIndex = 0;
            _this.visible = false;
        }, function (error) { _this.failure(error); });
    };
    /**
     * Cycles through themes
     */
    CreateComponent.prototype.next = function () {
        // increment or cycle
        if ((this.selectedThemeIndex + 1) < this.themes.length) {
            this.selectedThemeIndex = this.selectedThemeIndex + 1;
        }
        else {
            this.selectedThemeIndex = 0;
        }
        // set new theme
        this.selectedTheme = this.themes[this.selectedThemeIndex];
    };
    /**
     * Selects a theme
     */
    CreateComponent.prototype.select = function (index) {
        this.selectedThemeIndex = index;
        this.selectedTheme = this.themes[this.selectedThemeIndex];
        window.scrollTo(0, 0);
    };
    /**
     * Uses the selected theme
     */
    CreateComponent.prototype.useTheme = function () {
        // set new theme
        this.visible = true;
    };
    /**
     * Hides the create modal
     */
    CreateComponent.prototype.hide = function () {
        // set new theme
        this.visible = false;
    };
    /**
     * Handles a successful create
     *
     */
    CreateComponent.prototype.success = function () {
        toast.show('success');
        this._router.navigate(['/login', this.site.id]);
        // clear model
        this.model = {
            name: '',
            theme: '',
            email: '',
            password: '',
            passcode: ''
        };
    };
    /**
     * handles errors
     */
    CreateComponent.prototype.failure = function (obj) {
        toast.show('failure');
    };
    /**
     * Verifies the reCAPTCHA response
     */
    CreateComponent.prototype.verifyCallback = function (response) {
        this.recaptchaResponse = response;
    };
    /**
     * Sets the language for the app
     */
    CreateComponent.prototype.setLanguage = function (language) {
        localStorage.setItem('user_language', language);
        // set language
        this._translate.use(language);
    };
    CreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-create',
            template: __webpack_require__(440),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_site_service__["a" /* SiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object])
    ], CreateComponent);
    return CreateComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=create.component.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditComponent = (function () {
    function EditComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Init pages
     *
     */
    EditComponent.prototype.ngOnInit = function () {
        var id, pageUrl, editMode;
        id = localStorage.getItem('respond.siteId');
        pageUrl = localStorage.getItem('respond.pageUrl');
        editMode = localStorage.getItem('respond.editMode');
        this.url = this._sanitizer.bypassSecurityTrustResourceUrl('/edit?q=' + id + '/' + pageUrl + '&mode=' + editMode);
    };
    EditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-edit',
            template: __webpack_require__(441)
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], EditComponent);
    return EditComponent;
    var _a;
}());

//# sourceMappingURL=edit.component.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_file_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilesComponent = (function () {
    function FilesComponent(_fileService, _router) {
        this._fileService = _fileService;
        this._router = _router;
    }
    /**
     * Init files
     *
     */
    FilesComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.removeVisible = false;
        this.drawerVisible = false;
        this.file = {};
        this.files = [];
        // list files
        this.list();
    };
    /**
     * Updates the list
     */
    FilesComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._fileService.list()
            .subscribe(function (data) { _this.files = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Resets an modal booleans
     */
    FilesComponent.prototype.reset = function () {
        this.removeVisible = false;
        this.drawerVisible = false;
        this.file = {};
    };
    /**
     * Sets the list item to active
     *
     * @param {File} file
     */
    FilesComponent.prototype.setActive = function (file) {
        this.selectedFile = file;
    };
    /**
     * Shows the drawer
     */
    FilesComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the remove dialog
     *
     * @param {File} file
     */
    FilesComponent.prototype.showRemove = function (file) {
        this.removeVisible = true;
        this.file = file;
    };
    /**
     * handles error
     */
    FilesComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    FilesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-files',
            template: __webpack_require__(442),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_file_service__["a" /* FileService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_file_service__["a" /* FileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], FilesComponent);
    return FilesComponent;
    var _a, _b;
}());

//# sourceMappingURL=files.component.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = (function () {
    function ForgotComponent(_userService, _appService, _route) {
        this._userService = _userService;
        this._appService = _appService;
        this._route = _route;
        this.hasMultipleSites = false;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logoUrl = '';
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // retrieve settings
        this.settings();
    };
    /**
     * Get settings
     */
    ForgotComponent.prototype.settings = function () {
        var _this = this;
        // list themes in the app
        this._appService.retrieveSettings()
            .subscribe(function (data) {
            _this.logoUrl = data.logoUrl;
        }, function (error) { _this.failure(error); });
    };
    /**
     * Submit forgot request
     */
    ForgotComponent.prototype.forgot = function (event, email, site) {
        var _this = this;
        event.preventDefault();
        var id = undefined;
        if (this.id != undefined) {
            id = this.id;
        }
        if (site != '') {
            id = site;
        }
        alert(id);
        this._userService.forgot(id, email)
            .subscribe(function () { toast.show('success'); }, function (error) { _this.failure(error); });
    };
    /**
     * handles errors
     */
    ForgotComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 409) {
            this.hasMultipleSites = true;
        }
    };
    ForgotComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-forgot',
            template: __webpack_require__(443),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
    ], ForgotComponent);
    return ForgotComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=forgot.component.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_form_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_form_field_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormsComponent = (function () {
    function FormsComponent(_formService, _formFieldService, _router) {
        this._formService = _formService;
        this._formFieldService = _formFieldService;
        this._router = _router;
    }
    /**
     * Init
     *
     */
    FormsComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.addVisible = false;
        this.editVisible = false;
        this.removeVisible = false;
        this.addFieldVisible = false;
        this.editFieldVisible = false;
        this.removeFieldVisible = false;
        this.drawerVisible = false;
        this.overflowVisible = false;
        this.forms = [];
        this.fields = [];
        this.list();
    };
    /**
     * Updates the list
     */
    FormsComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._formService.list()
            .subscribe(function (data) { _this.forms = data; _this.success(); }, function (error) { _this.failure(error); });
    };
    /**
     * handles the list successfully updated
     */
    FormsComponent.prototype.success = function () {
        var x, flag = false;
        // check if selected form is set
        if (this.forms.length > 0 && this.forms != undefined) {
            if (this.selectedForm !== undefined && this.selectedForm !== null) {
                for (x = 0; x < this.forms.length; x++) {
                    if (this.forms[x].id === this.selectedForm.id) {
                        flag = true;
                    }
                }
            }
            // check if id is in array
            if (flag === false) {
                this.selectedForm = this.forms[0];
            }
        }
        // update fields
        if (this.selectedForm !== null) {
            this.listFields();
        }
    };
    /**
     * list fields in the form
     */
    FormsComponent.prototype.listFields = function () {
        var _this = this;
        this._formFieldService.list(this.selectedForm.id)
            .subscribe(function (data) { _this.fields = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Resets screen
     */
    FormsComponent.prototype.reset = function () {
        this.addVisible = false;
        this.editVisible = false;
        this.removeVisible = false;
        this.addFieldVisible = false;
        this.editFieldVisible = false;
        this.removeFieldVisible = false;
        this.drawerVisible = false;
        this.overflowVisible = false;
    };
    /**
     * Sets the form to active
     *
     * @param {Form} form
     */
    FormsComponent.prototype.setActive = function (form) {
        this.selectedForm = form;
        this.listFields();
    };
    /**
     * Sets the list field to active
     *
     * @param {FormField} field
     */
    FormsComponent.prototype.setFieldActive = function (field) {
        this.selectedField = field;
        this.selectedIndex = this.fields.indexOf(field);
    };
    /**
     * Shows the drawer
     */
    FormsComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the overflow menu
     */
    FormsComponent.prototype.toggleOverflow = function () {
        this.overflowVisible = !this.overflowVisible;
    };
    /**
     * Shows the add dialog
     */
    FormsComponent.prototype.showAdd = function () {
        this.addVisible = true;
    };
    /**
     * Shows the edit dialog
     */
    FormsComponent.prototype.showEdit = function () {
        this.editVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     * @param {Form} form
     */
    FormsComponent.prototype.showRemove = function () {
        this.removeVisible = true;
    };
    /**
     * Shows the add dialog
     */
    FormsComponent.prototype.showAddField = function () {
        this.addFieldVisible = true;
    };
    /**
     * Shows the edit dialog
     */
    FormsComponent.prototype.showEditField = function () {
        this.editFieldVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     * @param {FormField} field
     */
    FormsComponent.prototype.showRemoveField = function (field) {
        this.removeFieldVisible = true;
    };
    /**
     * Move the field up
     *
     * @param {FormField} field
     */
    FormsComponent.prototype.moveFieldUp = function (field) {
        var i = this.fields.indexOf(field);
        if (i != 0) {
            this.fields.splice(i, 1);
            this.fields.splice(i - 1, 0, field);
        }
        this.updateOrder();
    };
    /**
     * Move the field down
     *
     * @param {FormField} field
     */
    FormsComponent.prototype.moveFieldDown = function (field) {
        var i = this.fields.indexOf(field);
        if (i != (this.fields.length - 1)) {
            this.fields.splice(i, 1);
            this.fields.splice(i + 1, 0, field);
        }
        this.updateOrder();
    };
    /**
     * Updates the order of the field fields
     *
     */
    FormsComponent.prototype.updateOrder = function () {
        var _this = this;
        this._formFieldService.updateOrder(this.selectedForm.id, this.fields)
            .subscribe(function (data) { }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * handles errors
     */
    FormsComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    FormsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-forms',
            template: __webpack_require__(444),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_form_field_service__["a" /* FormFieldService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_form_service__["a" /* FormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_form_field_service__["a" /* FormFieldService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_form_field_service__["a" /* FormFieldService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], FormsComponent);
    return FormsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=forms.component.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_gallery_image_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleriesComponent = (function () {
    function GalleriesComponent(_galleryService, _galleryImageService, _router) {
        this._galleryService = _galleryService;
        this._galleryImageService = _galleryImageService;
        this._router = _router;
    }
    /**
     * Init
     *
     */
    GalleriesComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.addVisible = false;
        this.editVisible = false;
        this.removeVisible = false;
        this.selectVisible = false;
        this.removeImageVisible = false;
        this.drawerVisible = false;
        this.overflowVisible = false;
        this.galleries = [];
        this.images = [];
        this.selectedGallery = null;
        this.selectedImage = null;
        this.list();
    };
    /**
     * Updates the list
     */
    GalleriesComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._galleryService.list()
            .subscribe(function (data) { _this.galleries = data; _this.success(); }, function (error) { _this.failure(error); });
    };
    /**
     * handles the list successfully updated
     */
    GalleriesComponent.prototype.success = function () {
        var x, flag = false;
        // check if selected gallery is set
        if (this.galleries.length > 0 && this.galleries != undefined) {
            if (this.selectedGallery !== undefined && this.selectedGallery !== null) {
                for (x = 0; x < this.galleries.length; x++) {
                    if (this.galleries[x].id === this.selectedGallery.id) {
                        flag = true;
                    }
                }
            }
            // check if id is in array
            if (flag === false) {
                this.selectedGallery = this.galleries[0];
            }
        }
        // update images
        if (this.selectedGallery !== null) {
            this.listImages();
        }
    };
    /**
     * list images for the gallery
     */
    GalleriesComponent.prototype.listImages = function () {
        var _this = this;
        this._galleryImageService.list(this.selectedGallery.id)
            .subscribe(function (data) { _this.images = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Resets screen
     */
    GalleriesComponent.prototype.reset = function () {
        this.addVisible = false;
        this.editVisible = false;
        this.removeVisible = false;
        this.selectVisible = false;
        this.removeImageVisible = false;
        this.editImageVisible = false;
        this.drawerVisible = false;
        this.overflowVisible = false;
    };
    /**
     * Sets the gallery to active
     *
     * @param {Gallery} gallery
     */
    GalleriesComponent.prototype.setActive = function (gallery) {
        this.selectedGallery = gallery;
        this.listImages();
    };
    /**
     * Sets the image to active
     *
     * @param {Image} image
     */
    GalleriesComponent.prototype.setImageActive = function (image) {
        this.selectedImage = image;
        this.selectedIndex = this.images.indexOf(image);
    };
    /**
     * Shows the drawer
     */
    GalleriesComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the overflow menu
     */
    GalleriesComponent.prototype.toggleOverflow = function () {
        this.overflowVisible = !this.overflowVisible;
    };
    /**
     * Shows the add dialog
     */
    GalleriesComponent.prototype.showAdd = function () {
        this.addVisible = true;
    };
    /**
     * Shows the edit dialog
     */
    GalleriesComponent.prototype.showEdit = function () {
        this.editVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     */
    GalleriesComponent.prototype.showRemove = function () {
        this.removeVisible = true;
    };
    /**
     * Shows the select dialog
     */
    GalleriesComponent.prototype.showSelect = function () {
        this.selectVisible = true;
    };
    /**
     * Handles the selection of an image
     */
    GalleriesComponent.prototype.select = function (event) {
        var _this = this;
        var caption = '';
        this._galleryImageService.add(event.name, event.url, event.thumb, caption, this.selectedGallery.id)
            .subscribe(function (data) { _this.listImages(); toast.show('success'); }, function (error) { _this.failure(error); });
        this.selectVisible = false;
    };
    /**
     * Shows the remove dialog
     *
     * @param {Image} image
     */
    GalleriesComponent.prototype.showRemoveImage = function (image) {
        this.selectedImage = image;
        this.removeImageVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     * @param {Image} image
     */
    GalleriesComponent.prototype.showEditImage = function (image) {
        this.selectedImage = image;
        this.editImageVisible = true;
    };
    /**
     * Move the image up
     *
     * @param {Image} image
     */
    GalleriesComponent.prototype.moveImageUp = function (image) {
        var i = this.images.indexOf(image);
        if (i != 0) {
            this.images.splice(i, 1);
            this.images.splice(i - 1, 0, image);
        }
        this.updateOrder();
    };
    /**
     * Move the image down
     *
     * @param {Image} image
     */
    GalleriesComponent.prototype.moveImageDown = function (image) {
        var i = this.images.indexOf(image);
        if (i != (this.images.length - 1)) {
            this.images.splice(i, 1);
            this.images.splice(i + 1, 0, image);
        }
        this.updateOrder();
    };
    /**
     * Updates the order of the field fields
     *
     */
    GalleriesComponent.prototype.updateOrder = function () {
        var _this = this;
        this._galleryImageService.updateOrder(this.images, this.selectedGallery.id)
            .subscribe(function (data) { }, function (error) { _this.failure(error); });
    };
    /**
     * handles error
     */
    GalleriesComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    GalleriesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-galleries',
            template: __webpack_require__(445),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_gallery_image_service__["a" /* GalleryImageService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_gallery_image_service__["a" /* GalleryImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_gallery_image_service__["a" /* GalleryImageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], GalleriesComponent);
    return GalleriesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=galleries.component.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_userService, _appService, _route, _router, _translate) {
        this._userService = _userService;
        this._appService = _appService;
        this._route = _route;
        this._router = _router;
        this._translate = _translate;
        this.usesLDAP = false;
        this.hasMultipleSites = false;
        this.defaultLanguage = 'en';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logoUrl = '';
        this.acknowledgement = '';
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            localStorage.setItem('respond.siteId', _this.id);
        });
        // retrieve settings
        this.settings();
    };
    /**
     * Get settings
     */
    LoginComponent.prototype.settings = function () {
        var _this = this;
        this._appService.retrieveSettings()
            .subscribe(function (data) {
            _this.logoUrl = data.logoUrl;
            _this.acknowledgement = data.acknowledgement;
            _this.usesLDAP = data.usesLDAP;
            _this.defaultLanguage = data.defaultLanguage;
            _this.setLanguage(_this.defaultLanguage);
            // set activation
            _this.setActivation(data.activationMethod, data.activationUrl, data.stripeAmount, data.stripeName, data.stripeDescription, data.stripePublishableKey, data.stripeCurrency);
        }, function (error) { _this.failure(error); });
    };
    /**
     * Login to the app
     *
     * @param {Event} event
     * @param {string} email The user's login email
     * @param {string} password The user's login password
     * @param {string} test The user's site
     */
    LoginComponent.prototype.login = function (event, email, password, site) {
        var _this = this;
        event.preventDefault();
        var id = undefined;
        if (this.id != undefined) {
            id = this.id;
        }
        if (site != '') {
            id = site;
        }
        // login
        this._userService.login(id, email, password)
            .subscribe(function (data) { _this.data = data; _this.success(); }, function (error) { _this.failure(error); });
    };
    /**
     * Handles a successful login
     */
    LoginComponent.prototype.success = function () {
        toast.show('success');
        // set language
        this.setLanguage(this.data.user.language);
        // set token
        this.setToken(this.data.token);
        // set status
        this.setStatus(this.data.user.status, this.data.user.days);
        // set site id
        localStorage.setItem('respond.siteId', this.data.user.siteId);
        // navigate
        this._router.navigate(['/pages']);
    };
    /**
     * Routes to the forgot password screen
     */
    LoginComponent.prototype.forgot = function () {
        if (this.id != undefined) {
            this._router.navigate(['/forgot', this.id]);
        }
        else {
            this._router.navigate(['/forgot']);
        }
    };
    /**
     * Sets the language for the app
     */
    LoginComponent.prototype.setLanguage = function (language) {
        localStorage.setItem('user_language', language);
        // set language
        this._translate.use(language);
    };
    /**
     * Sets the token in local storage
     */
    LoginComponent.prototype.setToken = function (token) {
        localStorage.setItem('id_token', token);
    };
    /**
     * Sets the status
     */
    LoginComponent.prototype.setStatus = function (status, days) {
        // set expired
        if (status == 'Trial' && days < 0) {
            status = 'Expired';
        }
        localStorage.setItem('site_status', status);
        localStorage.setItem('site_trial_days_remaining', days);
    };
    /**
     * Sets the activation
     */
    LoginComponent.prototype.setActivation = function (activationMethod, activationUrl, stripeAmount, stripeName, stripeDescription, stripePublishableKey, stripeCurrency) {
        localStorage.setItem('activation_method', activationMethod);
        localStorage.setItem('activation_url', activationUrl);
        localStorage.setItem('stripe_amount', stripeAmount);
        localStorage.setItem('stripe_name', stripeName);
        localStorage.setItem('stripe_description', stripeDescription);
        localStorage.setItem('stripe_publishable_key', stripePublishableKey);
        localStorage.setItem('stripe_currency', stripeCurrency);
    };
    /**
     * handles error
     */
    LoginComponent.prototype.failure = function (obj) {
        if (obj.status == 409) {
            this.hasMultipleSites = true;
        }
        toast.show('failure');
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-login',
            template: __webpack_require__(446),
            providers: [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_menu_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_menu_item_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenusComponent = (function () {
    function MenusComponent(_menuService, _menuItemService, _router) {
        this._menuService = _menuService;
        this._menuItemService = _menuItemService;
        this._router = _router;
    }
    /**
     * Init
     *
     */
    MenusComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.addVisible = false;
        this.editVisible = false;
        this.removeVisible = false;
        this.addItemVisible = false;
        this.editItemVisible = false;
        this.removeItemVisible = false;
        this.drawerVisible = false;
        this.overflowVisible = false;
        this.menus = [];
        this.items = [];
        this.list();
    };
    /**
     * Updates the list
     */
    MenusComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._menuService.list()
            .subscribe(function (data) { _this.menus = data; _this.success(); }, function (error) { _this.failure(error); });
    };
    /**
     * handles the list successfully updated
     */
    MenusComponent.prototype.success = function () {
        var x, flag = false;
        // check if selected menu is set
        if (this.menus.length > 0 && this.menus != undefined) {
            if (this.selectedMenu !== undefined && this.selectedMenu !== null) {
                for (x = 0; x < this.menus.length; x++) {
                    if (this.menus[x].id === this.selectedMenu.id) {
                        flag = true;
                    }
                }
            }
            // check if id is in array
            if (flag === false) {
                this.selectedMenu = this.menus[0];
            }
        }
        // update items
        if (this.selectedMenu !== null) {
            this.listItems();
        }
    };
    /**
     * list items in the menu
     */
    MenusComponent.prototype.listItems = function () {
        var _this = this;
        this._menuItemService.list(this.selectedMenu.id)
            .subscribe(function (data) { _this.items = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Resets screen
     */
    MenusComponent.prototype.reset = function () {
        this.addVisible = false;
        this.editVisible = false;
        this.removeVisible = false;
        this.addItemVisible = false;
        this.editItemVisible = false;
        this.removeItemVisible = false;
        this.drawerVisible = false;
        this.overflowVisible = false;
    };
    /**
     * Sets the menu to active
     *
     * @param {Menu} menu
     */
    MenusComponent.prototype.setActive = function (menu) {
        this.selectedMenu = menu;
        this.listItems();
    };
    /**
     * Sets the list item to active
     *
     * @param {MenuItem} item
     */
    MenusComponent.prototype.setItemActive = function (item) {
        this.selectedItem = item;
        this.selectedIndex = this.items.indexOf(item);
    };
    /**
     * Shows the drawer
     */
    MenusComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the overflow menu
     */
    MenusComponent.prototype.toggleOverflow = function () {
        this.overflowVisible = !this.overflowVisible;
    };
    /**
     * Shows the add dialog
     */
    MenusComponent.prototype.showAdd = function () {
        this.addVisible = true;
    };
    /**
     * Shows the edit dialog
     */
    MenusComponent.prototype.showEdit = function () {
        this.editVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     * @param {menu} menu
     */
    MenusComponent.prototype.showRemove = function (menu) {
        this.removeVisible = true;
        this.menu = menu;
    };
    /**
     * Shows the add dialog
     */
    MenusComponent.prototype.showAddItem = function () {
        this.addItemVisible = true;
    };
    /**
     * Shows the edit dialog
     */
    MenusComponent.prototype.showEditItem = function () {
        this.editItemVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     * @param {menu} menu
     */
    MenusComponent.prototype.showRemoveItem = function (menu) {
        this.removeItemVisible = true;
    };
    /**
     * Move the item up
     *
     * @param {item} menu
     */
    MenusComponent.prototype.moveItemUp = function (item) {
        var i = this.items.indexOf(item);
        if (i != 0) {
            this.items.splice(i, 1);
            this.items.splice(i - 1, 0, item);
        }
        this.updateOrder();
    };
    /**
     * Move the item down
     *
     * @param {item} menu
     */
    MenusComponent.prototype.moveItemDown = function (item) {
        var i = this.items.indexOf(item);
        if (i != (this.items.length - 1)) {
            this.items.splice(i, 1);
            this.items.splice(i + 1, 0, item);
        }
        this.updateOrder();
    };
    /**
     * Updates the order of the menu items
     *
     */
    MenusComponent.prototype.updateOrder = function () {
        var _this = this;
        this._menuItemService.updateOrder(this.selectedMenu.id, this.items)
            .subscribe(function (data) { }, function (error) { _this.failure(error); });
    };
    /**
     * handles error
     */
    MenusComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    MenusComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-menus',
            template: __webpack_require__(447),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_menu_item_service__["a" /* MenuItemService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_menu_item_service__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_menu_item_service__["a" /* MenuItemService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], MenusComponent);
    return MenusComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=menus.component.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesComponent = (function () {
    function PagesComponent(_pageService, _router) {
        this._pageService = _pageService;
        this._router = _router;
        this.addVisible = false;
        this.removeVisible = false;
        this.drawerVisible = false;
        this.settingsVisible = false;
        this.search = null;
    }
    /**
     * Init pages
     *
     */
    PagesComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.addVisible = false;
        this.removeVisible = false;
        this.settingsVisible = false;
        this.drawerVisible = false;
        this.page = {};
        this.pages = [];
        this.filteredPages = [];
        this.search = null;
        this.list();
    };
    /**
     * Make a copy of the pages
     */
    PagesComponent.prototype.copy = function () {
        this.filteredPages = Object.assign([], this.pages);
    };
    /**
     * Updates the list
     */
    PagesComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._pageService.list()
            .subscribe(function (data) { _this.pages = data; _this.copy(); }, function (error) { _this.failure(error); });
    };
    /**
     * Searches the list
     */
    PagesComponent.prototype.searchList = function () {
        var _this = this;
        var keys = 'title,url';
        // reset when nothing is typed
        if (!this.search) {
            this.copy();
        }
        // filter items
        /*
        this.filteredPages = Object.assign([], this.pages).filter(
          item => item.url.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )*/
        this.filteredPages = Object.assign([], this.pages).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(_this.search, 'gi').test(item[key]); }); });
    };
    /**
     * Resets an modal booleans
     */
    PagesComponent.prototype.reset = function () {
        this.removeVisible = false;
        this.addVisible = false;
        this.settingsVisible = false;
        this.drawerVisible = false;
        this.page = {};
    };
    /**
     * Sets the list item to active
     *
     * @param {Page} page
     */
    PagesComponent.prototype.setActive = function (page) {
        this.selectedPage = page;
    };
    /**
     * Shows the drawer
     */
    PagesComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the add dialog
     */
    PagesComponent.prototype.showAdd = function () {
        this.addVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     * @param {Page} page
     */
    PagesComponent.prototype.showRemove = function (page) {
        this.removeVisible = true;
        this.page = page;
    };
    /**
     * Shows the settings dialog
     *
     * @param {Page} page
     */
    PagesComponent.prototype.showSettings = function (page) {
        this.settingsVisible = true;
        this.page = page;
    };
    /**
     * Edits a page
     *
     * @param {Page} page
     */
    PagesComponent.prototype.edit = function (page) {
        localStorage.setItem('respond.pageUrl', page.url);
        localStorage.setItem('respond.editMode', 'page');
        var id = Math.random().toString(36).substr(2, 9);
        this._router.navigate(['/edit', id]);
    };
    /**
     * Edits code for a page
     *
     * @param {Page} page
     */
    PagesComponent.prototype.editCode = function (page) {
        localStorage.setItem('respond.codeUrl', page.url);
        localStorage.setItem('respond.codeType', 'page');
        var id = Math.random().toString(36).substr(2, 9);
        this._router.navigate(['/code', id]);
    };
    /**
     * handles error
     */
    PagesComponent.prototype.failure = function (obj) {
        console.log(obj);
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    PagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-pages',
            template: __webpack_require__(448),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], PagesComponent);
    return PagesComponent;
    var _a, _b;
}());

//# sourceMappingURL=pages.component.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PluginsComponent = (function () {
    function PluginsComponent(_siteService, _router) {
        this._siteService = _siteService;
        this._router = _router;
    }
    /**
     * Init plugins
     *
     */
    PluginsComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.removeVisible = false;
        this.drawerVisible = false;
        this.plugin = {};
        this.plugins = [];
        // list plugins
        this.list();
    };
    /**
     * Updates the list
     */
    PluginsComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._siteService.listPlugins()
            .subscribe(function (data) { _this.plugins = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Resets an modal booleans
     */
    PluginsComponent.prototype.reset = function () {
        this.drawerVisible = false;
        this.removeVisible = false;
        this.plugin = {};
    };
    /**
     * Sets the list item to active
     *
     * @param {Plugin} plugin
     */
    PluginsComponent.prototype.setActive = function (plugin) {
        this.selectedPlugin = plugin;
    };
    /**
     * Shows the drawer
     */
    PluginsComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the remove dialog
     *
     * @param {Plugin} plugin
     */
    PluginsComponent.prototype.showRemove = function (plugin) {
        this.removeVisible = true;
        this.plugin = plugin;
    };
    /**
     * handles error
     */
    PluginsComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    PluginsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-plugins',
            template: __webpack_require__(449),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], PluginsComponent);
    return PluginsComponent;
    var _a, _b;
}());

//# sourceMappingURL=plugins.component.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = (function () {
    function ResetComponent(_userService, _appService, _route) {
        this._userService = _userService;
        this._appService = _appService;
        this._route = _route;
    }
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logoUrl = '';
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.token = params['token'];
        });
        // retrieve settings
        this.settings();
    };
    /**
     * Get settings
     */
    ResetComponent.prototype.settings = function () {
        var _this = this;
        // list themes in the app
        this._appService.retrieveSettings()
            .subscribe(function (data) {
            _this.logoUrl = data.logoUrl;
        }, function (error) { _this.failure(error); });
    };
    /**
     * Reset the password
     */
    ResetComponent.prototype.reset = function (event, password, retype) {
        var _this = this;
        event.preventDefault();
        if (password !== retype) {
            alert('Password mismatch');
        }
        else {
            this._userService.reset(this.id, this.token, password)
                .subscribe(function () { alert('success'); }, function (error) { _this.failure(error); });
        }
    };
    /**
     * handles error
     */
    ResetComponent.prototype.failure = function (obj) {
        toast.show('failure');
    };
    ResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-reset',
            template: __webpack_require__(450),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
    ], ResetComponent);
    return ResetComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=reset.component.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_setting_service__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(_settingService, _router) {
        this._settingService = _settingService;
        this._router = _router;
    }
    /**
     * Init
     *
     */
    SettingsComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.drawerVisible = false;
        this.selectVisible = false;
        this.settings;
        this.setting = null;
        this.list();
    };
    /**
     * Updates the list
     */
    SettingsComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._settingService.list()
            .subscribe(function (data) { _this.settings = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Handles the form submission
     */
    SettingsComponent.prototype.submit = function () {
        var _this = this;
        this._settingService.edit(this.settings)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.failure(error); });
    };
    /**
     * Shows the select modal
     */
    SettingsComponent.prototype.showSelect = function (setting) {
        this.setting = setting;
        this.selectVisible = true;
    };
    /**
     * Handles the selection of an image
     */
    SettingsComponent.prototype.select = function (event) {
        this.setting.value = event.name;
        this.selectVisible = false;
    };
    /**
     * Handles success
     */
    SettingsComponent.prototype.success = function () {
        toast.show('success');
    };
    /**
     * Resets screen
     */
    SettingsComponent.prototype.reset = function () {
        this.drawerVisible = false;
        this.selectVisible = false;
    };
    /**
     * Sets the setting to active
     *
     * @param {Setting} setting
     */
    SettingsComponent.prototype.setActive = function (setting) {
        this.selectedSetting = setting;
        this.list();
    };
    /**
     * Shows the drawer
     */
    SettingsComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * handles error
     */
    SettingsComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-settings',
            template: __webpack_require__(451),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_setting_service__["a" /* SettingService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_setting_service__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeService = (function () {
    function CodeService(http) {
        this.http = http;
        this._retrieveUrl = 'api/code/retrieve';
        this._saveUrl = 'api/code/save';
        this._listUrl = 'api/code/list';
        this._addUrl = 'api/code/add';
    }
    /**
     * List code by type
     *
     */
    CodeService.prototype.list = function (type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl + '/' + type, options).map(function (res) { return res.json(); });
    };
    /**
     * Retrieves code from a URL
     *
     * @param {string} url
     * @return {Observable}
     */
    CodeService.prototype.retrieve = function (url, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._retrieveUrl + '?type=' + type + '&url=' + url, options).map(function (res) { return res.text(); });
    };
    /**
     * Saves code
     *
     * @param {string} name
     * @param {string} cssClass
     * @return {Observable}
     */
    CodeService.prototype.save = function (value, url, type) {
        var body = JSON.stringify({ value: value, url: url, type: type });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._saveUrl, body, options);
    };
    /**
     * Add code
     *
     * @param {string} type
     * @param {string} name
     * @return {Observable}
     */
    CodeService.prototype.add = function (type, name) {
        var body = JSON.stringify({ type: type, name: name });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
    CodeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], CodeService);
    return CodeService;
    var _a;
}());

//# sourceMappingURL=code.service.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_submission_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmissionsComponent = (function () {
    function SubmissionsComponent(_submissionService, _router) {
        this._submissionService = _submissionService;
        this._router = _router;
    }
    /**
     * Init submissions
     *
     */
    SubmissionsComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.removeVisible = false;
        this.drawerVisible = false;
        this.submission = {};
        this.submissions = [];
        this.list();
    };
    /**
     * Updates the list
     */
    SubmissionsComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._submissionService.list()
            .subscribe(function (data) { _this.submissions = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Resets an modal booleans
     */
    SubmissionsComponent.prototype.reset = function () {
        this.removeVisible = false;
        this.viewVisible = false;
        this.drawerVisible = false;
        this.submission = {};
    };
    /**
     * Sets the list item to active
     *
     * @param {Submission} submission
     */
    SubmissionsComponent.prototype.setActive = function (submission) {
        this.selectedSubmission = submission;
    };
    /**
     * Shows the drawer
     */
    SubmissionsComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the view dialog
     *
     * @param {Submission} submission
     */
    SubmissionsComponent.prototype.showView = function (submission) {
        this.viewVisible = true;
        this.submission = submission;
    };
    /**
     * Shows the remove dialog
     *
     * @param {Submission} submission
     */
    SubmissionsComponent.prototype.showRemove = function (submission) {
        this.removeVisible = true;
        this.submission = submission;
    };
    /**
     * handles error
     */
    SubmissionsComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    SubmissionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-submissions',
            template: __webpack_require__(484),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_submission_service__["a" /* SubmissionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_submission_service__["a" /* SubmissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_submission_service__["a" /* SubmissionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], SubmissionsComponent);
    return SubmissionsComponent;
    var _a, _b;
}());

//# sourceMappingURL=submissions.component.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    /**
     * Init
     *
     */
    UsersComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.addVisible = false;
        this.editVisible = false;
        this.removeVisible = false;
        this.drawerVisible = false;
        this.user = {};
        this.users = [];
        this.list();
    };
    /**
     * Updates the list
     */
    UsersComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._userService.list()
            .subscribe(function (data) { _this.users = data; }, function (error) { _this.failure(error); });
    };
    /**
     * Resets an modal booleans
     */
    UsersComponent.prototype.reset = function () {
        this.addVisible = false;
        this.editVisible = false;
        this.removeVisible = false;
        this.drawerVisible = false;
        this.user = {};
    };
    /**
     * Sets the list item to active
     *
     * @param {User} user
     */
    UsersComponent.prototype.setActive = function (user) {
        this.selectedUser = user;
    };
    /**
     * Shows the drawer
     */
    UsersComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the add dialog
     */
    UsersComponent.prototype.showAdd = function () {
        this.addVisible = true;
    };
    /**
     * Shows the remove dialog
     *
     * @param {User} user
     */
    UsersComponent.prototype.showRemove = function (user) {
        this.removeVisible = true;
        this.user = user;
    };
    /**
     * Shows the edit dialog
     *
     * @param {User} user
     */
    UsersComponent.prototype.showEdit = function (user) {
        this.editVisible = true;
        this.user = user;
    };
    /**
     * handles error
     */
    UsersComponent.prototype.failure = function (obj) {
        toast.show('failure');
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-users',
            template: __webpack_require__(485),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a, _b;
}());

//# sourceMappingURL=users.component.js.map

/***/ }),
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 197;


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-app',
            template: __webpack_require__(437),
            providers: [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_drawer_drawer_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_dropzone_dropzone_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forgot_forgot_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reset_reset_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__create_create_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__advanced_advanced_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__code_code_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_components_code_add_code_add_code_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_edit_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__files_files_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_components_files_remove_file_remove_file_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_components_files_select_file_select_file_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__plugins_plugins_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_components_plugins_remove_plugin_remove_plugin_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__forms_forms_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_components_forms_add_form_add_form_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_components_forms_edit_form_edit_form_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_components_forms_remove_form_remove_form_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_components_forms_add_form_field_add_form_field_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_components_forms_edit_form_field_edit_form_field_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_components_forms_remove_form_field_remove_form_field_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__galleries_galleries_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_components_galleries_add_gallery_add_gallery_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_components_galleries_edit_gallery_edit_gallery_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_components_galleries_remove_gallery_remove_gallery_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_components_galleries_edit_caption_edit_caption_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_components_galleries_remove_gallery_image_remove_gallery_image_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__menus_menus_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_components_menus_add_menu_add_menu_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_components_menus_edit_menu_edit_menu_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_components_menus_remove_menu_remove_menu_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_components_menus_add_menu_item_add_menu_item_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_components_menus_edit_menu_item_edit_menu_item_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_components_menus_remove_menu_item_remove_menu_item_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_pages_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_components_pages_add_page_add_page_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shared_components_pages_page_settings_page_settings_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shared_components_pages_remove_page_remove_page_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_components_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__shared_components_components_add_component_add_component_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__shared_components_components_remove_component_remove_component_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__settings_settings_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__submissions_submissions_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__shared_components_submissions_remove_submission_remove_submission_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__shared_components_submissions_view_submission_view_submission_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__users_users_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__shared_components_users_add_user_add_user_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__shared_components_users_edit_user_edit_user_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__shared_components_users_remove_user_remove_user_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__app_routes__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ngx_translate_http_loader__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__shared_pipes_time_ago_pipe__ = __webpack_require__(254);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// forms

// router

// app component

// http


// common


// logon, forgot, reset, create




// advanced + code



// edit

// files



// plugins


// forms







// galleries






// menus







// pages




// component



// settings

// submissions



// users




// routing

// translate


// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_59__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "assets/i18n/", ".json");
}
// pipes

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_11__reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_12__create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_components_drawer_drawer_component__["a" /* DrawerComponent */], __WEBPACK_IMPORTED_MODULE_8__shared_components_dropzone_dropzone_component__["a" /* DropzoneComponent */],
                __WEBPACK_IMPORTED_MODULE_16__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_13__advanced_advanced_component__["a" /* AdvancedComponent */], __WEBPACK_IMPORTED_MODULE_14__code_code_component__["a" /* CodeComponent */], __WEBPACK_IMPORTED_MODULE_15__shared_components_code_add_code_add_code_component__["a" /* AddCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__files_files_component__["a" /* FilesComponent */], __WEBPACK_IMPORTED_MODULE_18__shared_components_files_remove_file_remove_file_component__["a" /* RemoveFileComponent */], __WEBPACK_IMPORTED_MODULE_19__shared_components_files_select_file_select_file_component__["a" /* SelectFileComponent */], __WEBPACK_IMPORTED_MODULE_20__plugins_plugins_component__["a" /* PluginsComponent */], __WEBPACK_IMPORTED_MODULE_21__shared_components_plugins_remove_plugin_remove_plugin_component__["a" /* RemovePluginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__forms_forms_component__["a" /* FormsComponent */], __WEBPACK_IMPORTED_MODULE_23__shared_components_forms_add_form_add_form_component__["a" /* AddFormComponent */], __WEBPACK_IMPORTED_MODULE_24__shared_components_forms_edit_form_edit_form_component__["a" /* EditFormComponent */], __WEBPACK_IMPORTED_MODULE_25__shared_components_forms_remove_form_remove_form_component__["a" /* RemoveFormComponent */], __WEBPACK_IMPORTED_MODULE_26__shared_components_forms_add_form_field_add_form_field_component__["a" /* AddFormFieldComponent */], __WEBPACK_IMPORTED_MODULE_27__shared_components_forms_edit_form_field_edit_form_field_component__["a" /* EditFormFieldComponent */], __WEBPACK_IMPORTED_MODULE_28__shared_components_forms_remove_form_field_remove_form_field_component__["a" /* RemoveFormFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_29__galleries_galleries_component__["a" /* GalleriesComponent */], __WEBPACK_IMPORTED_MODULE_30__shared_components_galleries_add_gallery_add_gallery_component__["a" /* AddGalleryComponent */], __WEBPACK_IMPORTED_MODULE_31__shared_components_galleries_edit_gallery_edit_gallery_component__["a" /* EditGalleryComponent */], __WEBPACK_IMPORTED_MODULE_32__shared_components_galleries_remove_gallery_remove_gallery_component__["a" /* RemoveGalleryComponent */], __WEBPACK_IMPORTED_MODULE_33__shared_components_galleries_edit_caption_edit_caption_component__["a" /* EditCaptionComponent */], __WEBPACK_IMPORTED_MODULE_34__shared_components_galleries_remove_gallery_image_remove_gallery_image_component__["a" /* RemoveGalleryImageComponent */],
                __WEBPACK_IMPORTED_MODULE_35__menus_menus_component__["a" /* MenusComponent */], __WEBPACK_IMPORTED_MODULE_36__shared_components_menus_add_menu_add_menu_component__["a" /* AddMenuComponent */], __WEBPACK_IMPORTED_MODULE_37__shared_components_menus_edit_menu_edit_menu_component__["a" /* EditMenuComponent */], __WEBPACK_IMPORTED_MODULE_38__shared_components_menus_remove_menu_remove_menu_component__["a" /* RemoveMenuComponent */], __WEBPACK_IMPORTED_MODULE_39__shared_components_menus_add_menu_item_add_menu_item_component__["a" /* AddMenuItemComponent */], __WEBPACK_IMPORTED_MODULE_40__shared_components_menus_edit_menu_item_edit_menu_item_component__["a" /* EditMenuItemComponent */], __WEBPACK_IMPORTED_MODULE_41__shared_components_menus_remove_menu_item_remove_menu_item_component__["a" /* RemoveMenuItemComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_pages_component__["a" /* PagesComponent */], __WEBPACK_IMPORTED_MODULE_43__shared_components_pages_add_page_add_page_component__["a" /* AddPageComponent */], __WEBPACK_IMPORTED_MODULE_44__shared_components_pages_page_settings_page_settings_component__["a" /* PageSettingsComponent */], __WEBPACK_IMPORTED_MODULE_45__shared_components_pages_remove_page_remove_page_component__["a" /* RemovePageComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_components_component__["a" /* ComponentsComponent */], __WEBPACK_IMPORTED_MODULE_47__shared_components_components_add_component_add_component_component__["a" /* AddComponentComponent */], __WEBPACK_IMPORTED_MODULE_48__shared_components_components_remove_component_remove_component_component__["a" /* RemoveComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_49__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_50__submissions_submissions_component__["a" /* SubmissionsComponent */], __WEBPACK_IMPORTED_MODULE_51__shared_components_submissions_remove_submission_remove_submission_component__["a" /* RemoveSubmissionComponent */], __WEBPACK_IMPORTED_MODULE_52__shared_components_submissions_view_submission_view_submission_component__["a" /* ViewSubmissionComponent */],
                __WEBPACK_IMPORTED_MODULE_53__users_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_54__shared_components_users_add_user_add_user_component__["a" /* AddUserComponent */], __WEBPACK_IMPORTED_MODULE_55__shared_components_users_edit_user_edit_user_component__["a" /* EditUserComponent */], __WEBPACK_IMPORTED_MODULE_56__shared_components_users_remove_user_remove_user_component__["a" /* RemoveUserComponent */],
                __WEBPACK_IMPORTED_MODULE_60__shared_pipes_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_57__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_58__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_58__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_58__ngx_translate_core__["c" /* TranslateService */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_reset_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_create_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__files_files_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plugins_plugins_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menus_menus_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms_forms_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__submissions_submissions_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__galleries_galleries_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_edit_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__advanced_advanced_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__code_code_component__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


















var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'login/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_4__create_create_component__["a" /* CreateComponent */]
    },
    {
        path: 'forgot',
        component: __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__["a" /* ForgotComponent */]
    },
    {
        path: 'forgot/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__["a" /* ForgotComponent */]
    },
    {
        path: 'reset/:id/:token',
        component: __WEBPACK_IMPORTED_MODULE_3__reset_reset_component__["a" /* ResetComponent */]
    },
    {
        path: 'pages',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_pages_component__["a" /* PagesComponent */]
    },
    {
        path: 'components',
        component: __WEBPACK_IMPORTED_MODULE_6__components_components_component__["a" /* ComponentsComponent */]
    },
    {
        path: 'files',
        component: __WEBPACK_IMPORTED_MODULE_7__files_files_component__["a" /* FilesComponent */]
    },
    {
        path: 'plugins',
        component: __WEBPACK_IMPORTED_MODULE_8__plugins_plugins_component__["a" /* PluginsComponent */]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_9__users_users_component__["a" /* UsersComponent */]
    },
    {
        path: 'menus',
        component: __WEBPACK_IMPORTED_MODULE_10__menus_menus_component__["a" /* MenusComponent */]
    },
    {
        path: 'forms',
        component: __WEBPACK_IMPORTED_MODULE_11__forms_forms_component__["a" /* FormsComponent */]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__["a" /* SettingsComponent */]
    },
    {
        path: 'submissions',
        component: __WEBPACK_IMPORTED_MODULE_13__submissions_submissions_component__["a" /* SubmissionsComponent */]
    },
    {
        path: 'galleries',
        component: __WEBPACK_IMPORTED_MODULE_14__galleries_galleries_component__["a" /* GalleriesComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_15__edit_edit_component__["a" /* EditComponent */]
    },
    {
        path: 'advanced',
        component: __WEBPACK_IMPORTED_MODULE_16__advanced_advanced_component__["a" /* AdvancedComponent */]
    },
    {
        path: 'code/:id',
        component: __WEBPACK_IMPORTED_MODULE_17__code_code_component__["a" /* CodeComponent */]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_code_service__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCodeComponent = (function () {
    function AddCodeComponent(_codeService) {
        this._codeService = _codeService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddCodeComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                type: 'template',
                name: ''
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    AddCodeComponent.prototype.ngOnInit = function () {
        this.uploadUrl = '/api/code/upload/template';
    };
    /**
     * Hides the add code modal
     */
    AddCodeComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    AddCodeComponent.prototype.submit = function () {
        var _this = this;
        this._codeService.add(this.model.type, this.model.name)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddCodeComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    /**
     * Handles a successful upload
     */
    AddCodeComponent.prototype.uploaded = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    /**
     * Update the url with the type
     */
    AddCodeComponent.prototype.updateUrl = function (value) {
        this.uploadUrl = '/api/code/upload/' + value;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddCodeComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddCodeComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddCodeComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddCodeComponent.prototype, "onError", void 0);
    AddCodeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-code',
            template: __webpack_require__(452),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_code_service__["a" /* CodeService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_code_service__["a" /* CodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_code_service__["a" /* CodeService */]) === "function" && _a || Object])
    ], AddCodeComponent);
    return AddCodeComponent;
    var _a;
}());

//# sourceMappingURL=add-code.component.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddComponentComponent = (function () {
    function AddComponentComponent(_componentService) {
        this._componentService = _componentService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddComponentComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                url: ''
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    AddComponentComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the add component modal
     */
    AddComponentComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    AddComponentComponent.prototype.submit = function () {
        var _this = this;
        // set full path
        var fullUrl = 'components/' + this.model.url;
        this._componentService.add(fullUrl)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddComponentComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddComponentComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddComponentComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddComponentComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddComponentComponent.prototype, "onError", void 0);
    AddComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-component',
            template: __webpack_require__(453),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */]) === "function" && _a || Object])
    ], AddComponentComponent);
    return AddComponentComponent;
    var _a;
}());

//# sourceMappingURL=add-component.component.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveComponentComponent = (function () {
    function RemoveComponentComponent(_componentService) {
        this._componentService = _componentService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveComponentComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveComponentComponent.prototype, "component", {
        set: function (component) {
            // set visible
            this.model = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemoveComponentComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the modal
     */
    RemoveComponentComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemoveComponentComponent.prototype.submit = function () {
        var _this = this;
        this._componentService.remove(this.model.url)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveComponentComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveComponentComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveComponentComponent.prototype, "component", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveComponentComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveComponentComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveComponentComponent.prototype, "onError", void 0);
    RemoveComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-component',
            template: __webpack_require__(454),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */]) === "function" && _a || Object])
    ], RemoveComponentComponent);
    return RemoveComponentComponent;
    var _a;
}());

//# sourceMappingURL=remove-component.component.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawerComponent = (function () {
    function DrawerComponent(_siteService, _appService, _router, renderer) {
        this._siteService = _siteService;
        this._appService = _appService;
        this._router = _router;
        this.renderer = renderer;
        this._visible = false;
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(DrawerComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawerComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (active) {
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init pages
     */
    DrawerComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.dev = false;
        this.siteUrl = '';
        this.status = 'Active';
        this.daysRemaining = 0;
        this.activationUrl = '';
        var url = window.location.href;
        if (url.indexOf('?dev') !== -1) {
            this.dev = true;
        }
        // get app settings
        this.settings();
    };
    /**
     * Get settings
     */
    DrawerComponent.prototype.settings = function () {
        var _this = this;
        // set trial information
        this.status = localStorage.getItem('site_status');
        this.daysRemaining = parseInt(localStorage.getItem('site_trial_days_remaining'));
        // activation
        this.activationMethod = localStorage.getItem('activation_method');
        this.activationUrl = localStorage.getItem('activation_url');
        this.stripeAmount = parseInt(localStorage.getItem('stripe_amount'));
        this.stripeName = localStorage.getItem('stripe_name');
        this.stripeDescription = localStorage.getItem('stripe_description');
        this.stripePublishableKey = localStorage.getItem('stripe_publishable_key');
        this.stripeCurrency = localStorage.getItem('stripe_currency');
        // list themes in the app
        this._appService.retrieveSettings()
            .subscribe(function (data) {
            _this.siteUrl = data.siteUrl;
            _this.siteUrl = _this.siteUrl.replace('{{siteId}}', _this.id);
        }, function (error) { });
    };
    /**
     * View the code editor
     */
    DrawerComponent.prototype.viewCode = function () {
        localStorage.setItem('respond.codeUrl', 'templates/default.html');
        localStorage.setItem('respond.codeType', 'template');
        var id = Math.random().toString(36).substr(2, 9);
        this._router.navigate(['/code', id]);
    };
    /**
     * Hides the add page modal
     */
    DrawerComponent.prototype.hide = function () {
        this._visible = false;
        this.onHide.emit(null);
    };
    /**
     * Reload system files
     */
    DrawerComponent.prototype.reload = function () {
        this._siteService.reload()
            .subscribe(function (data) { toast.show('success'); }, function (error) { toast.show('failure'); });
    };
    /**
     * Republish sitemap
     */
    DrawerComponent.prototype.sitemap = function () {
        this._siteService.sitemap()
            .subscribe(function (data) { toast.show('success'); }, function (error) { toast.show('failure'); });
    };
    /**
     * Stripe checkout
     */
    DrawerComponent.prototype.checkout = function () {
        var context = this;
        // handle stripe activation
        if (this.activationMethod == 'Stripe') {
            var handler = window.StripeCheckout.configure({
                key: this.stripePublishableKey,
                locale: 'auto',
                token: function (token) {
                    // subscribe
                    context._siteService.subscribe(token.id, token.email)
                        .subscribe(function (data) { context.subscribed(); toast.show('success'); }, function (error) { toast.show('failure'); });
                }
            });
            handler.open({
                name: this.stripeName,
                description: this.stripeDescription,
                amount: this.stripeAmount,
                currency: this.stripeCurrency
            });
            this.globalListener = this.renderer.listenGlobal('window', 'popstate', function () {
                handler.close();
            });
        }
        else {
            window.location.href = this.activationUrl;
        }
    };
    /**
     * Successfully subscribed
     */
    DrawerComponent.prototype.subscribed = function () {
        localStorage.setItem('site_status', 'Active');
        this.status = 'Active';
    };
    /**
     * Signs out of the system
     */
    DrawerComponent.prototype.signOut = function () {
        // remove token
        localStorage.removeItem('respond.siteId');
        // redirect
        this._router.navigate(['/login']);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DrawerComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DrawerComponent.prototype, "active", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], DrawerComponent.prototype, "onHide", void 0);
    DrawerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-drawer',
            template: __webpack_require__(455),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Renderer */]) === "function" && _d || Object])
    ], DrawerComponent);
    return DrawerComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=drawer.component.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropzoneComponent = (function () {
    function DropzoneComponent(elementRef) {
        this.elementRef = elementRef;
        this._url = '/api/images/add';
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(DropzoneComponent.prototype, "url", {
        get: function () { return this._url; },
        set: function (url) {
            this._url = url;
            this.updateDropzone();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    DropzoneComponent.prototype.ngOnInit = function () {
        this.setupDropzone();
    };
    DropzoneComponent.prototype.setupDropzone = function () {
        var el = this.elementRef.nativeElement.querySelector('.dropzone');
        // set dropzone options
        var options = {
            url: this._url,
            headers: {}
        };
        // setup token headers
        options.headers = {};
        options.headers['X-AUTH'] = 'Bearer ' + localStorage.getItem('id_token');
        if (Dropzone != undefined) {
            // create the dropzone
            this.dropzone = new Dropzone(el, options);
            var context = this;
            this.dropzone.on("complete", function (file) {
                this.removeFile(file);
                context.onAdd.emit(null);
            });
        }
    };
    DropzoneComponent.prototype.updateDropzone = function () {
        if (this.dropzone != undefined) {
            this.dropzone.options.url = this._url;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DropzoneComponent.prototype, "url", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], DropzoneComponent.prototype, "onAdd", void 0);
    DropzoneComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-dropzone',
            template: '<form class="dropzone"></form>'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ElementRef */]) === "function" && _a || Object])
    ], DropzoneComponent);
    return DropzoneComponent;
    var _a;
}());

//# sourceMappingURL=dropzone.component.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveFileComponent = (function () {
    function RemoveFileComponent(_fileService) {
        this._fileService = _fileService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveFileComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveFileComponent.prototype, "file", {
        set: function (file) {
            // set visible
            this.model = file;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init files
     */
    RemoveFileComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the modal
     */
    RemoveFileComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemoveFileComponent.prototype.submit = function () {
        var _this = this;
        this._fileService.remove(this.model.name)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveFileComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveFileComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveFileComponent.prototype, "file", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFileComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFileComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFileComponent.prototype, "onError", void 0);
    RemoveFileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-file',
            template: __webpack_require__(456),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */]) === "function" && _a || Object])
    ], RemoveFileComponent);
    return RemoveFileComponent;
    var _a;
}());

//# sourceMappingURL=remove-file.component.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectFileComponent = (function () {
    function SelectFileComponent(_fileService) {
        this._fileService = _fileService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(SelectFileComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init files
     */
    SelectFileComponent.prototype.ngOnInit = function () {
        this.list();
    };
    /**
     * Updates the list
     */
    SelectFileComponent.prototype.list = function () {
        var _this = this;
        this.reset();
        this._fileService.list()
            .subscribe(function (data) { _this.files = data; }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Resets an modal booleans
     */
    SelectFileComponent.prototype.reset = function () {
        this.file = {};
    };
    /**
     * Hides the modal
     */
    SelectFileComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    SelectFileComponent.prototype.select = function (file) {
        this.onSelect.emit(file);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SelectFileComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectFileComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectFileComponent.prototype, "onSelect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectFileComponent.prototype, "onError", void 0);
    SelectFileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-select-file',
            template: __webpack_require__(457),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */]) === "function" && _a || Object])
    ], SelectFileComponent);
    return SelectFileComponent;
    var _a;
}());

//# sourceMappingURL=select-file.component.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFormFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddFormFieldComponent = (function () {
    function AddFormFieldComponent(_formFieldService) {
        this._formFieldService = _formFieldService;
        // model to store
        this.model = {
            label: '',
            type: '',
            required: false,
            options: '',
            helperText: '',
            placeholder: '',
            cssClass: ''
        };
        // visible input
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddFormFieldComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                label: '',
                type: '',
                required: false,
                options: '',
                helperText: '',
                placeholder: '',
                cssClass: ''
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    AddFormFieldComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the add modal
     */
    AddFormFieldComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    AddFormFieldComponent.prototype.submit = function () {
        var _this = this;
        this._formFieldService.add(this.form.id, this.model.label, this.model.type, this.model.required, this.model.options, this.model.helperText, this.model.placeholder, this.model.cssClass)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddFormFieldComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddFormFieldComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], AddFormFieldComponent.prototype, "form", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormFieldComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormFieldComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormFieldComponent.prototype, "onError", void 0);
    AddFormFieldComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-form-field',
            template: __webpack_require__(458),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */]) === "function" && _a || Object])
    ], AddFormFieldComponent);
    return AddFormFieldComponent;
    var _a;
}());

//# sourceMappingURL=add-form-field.component.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddFormComponent = (function () {
    function AddFormComponent(_formService) {
        this._formService = _formService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddFormComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                name: '',
                cssClass: '',
                validate: false,
                success: '',
                error: '',
                recaptchaError: '',
                notify: ''
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    AddFormComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the add modal
     */
    AddFormComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    AddFormComponent.prototype.submit = function () {
        var _this = this;
        this._formService.add(this.model.name, this.model.cssClass, this.model.validate, this.model.success, this.model.error, this.model.recaptchaError, this.model.notify)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddFormComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddFormComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormComponent.prototype, "onError", void 0);
    AddFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-form',
            template: __webpack_require__(459),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */]) === "function" && _a || Object])
    ], AddFormComponent);
    return AddFormComponent;
    var _a;
}());

//# sourceMappingURL=add-form.component.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditFormFieldComponent = (function () {
    function EditFormFieldComponent(_formFieldService) {
        this._formFieldService = _formFieldService;
        // model to store
        this.model = {
            label: '',
            type: '',
            required: false,
            options: '',
            helperText: '',
            placeholder: '',
            cssClass: ''
        };
        // visible input
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(EditFormFieldComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditFormFieldComponent.prototype, "field", {
        // item input
        set: function (field) {
            // set item
            this.model = field;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    EditFormFieldComponent.prototype.ngOnInit = function () {
        this.model = {
            label: '',
            type: '',
            required: false,
            options: '',
            helperText: '',
            placeholder: '',
            cssClass: ''
        };
    };
    /**
     * Hides the add modal
     */
    EditFormFieldComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    EditFormFieldComponent.prototype.submit = function () {
        var _this = this;
        this._formFieldService.edit(this.form.id, this.index, this.model.label, this.model.type, this.model.required, this.model.options, this.model.helperText, this.model.placeholder, this.model.cssClass)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    EditFormFieldComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditFormFieldComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "form", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditFormFieldComponent.prototype, "field", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "onError", void 0);
    EditFormFieldComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-edit-form-field',
            template: __webpack_require__(460),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */]) === "function" && _a || Object])
    ], EditFormFieldComponent);
    return EditFormFieldComponent;
    var _a;
}());

//# sourceMappingURL=edit-form-field.component.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditFormComponent = (function () {
    function EditFormComponent(_formService) {
        this._formService = _formService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(EditFormComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditFormComponent.prototype, "form", {
        set: function (form) {
            // set visible
            this.model = form;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    EditFormComponent.prototype.ngOnInit = function () {
        this.model = {
            id: '',
            name: '',
            cssClass: '',
            validate: false,
            success: '',
            error: '',
            recaptchaError: '',
            notify: ''
        };
    };
    /**
     * Hides the modal
     */
    EditFormComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    EditFormComponent.prototype.submit = function () {
        var _this = this;
        this._formService.edit(this.model.id, this.model.name, this.model.cssClass, this.model.validate, this.model.success, this.model.error, this.model.recaptchaError, this.model.notify)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful edit
     */
    EditFormComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onUpdate.emit(null);
    };
    /**
     * Handles an error
     */
    EditFormComponent.prototype.error = function () {
        console.log('[respond.error] ' + this.errorMessage);
        toast.show('failure');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditFormComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditFormComponent.prototype, "form", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormComponent.prototype, "onError", void 0);
    EditFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-edit-form',
            template: __webpack_require__(461),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */]) === "function" && _a || Object])
    ], EditFormComponent);
    return EditFormComponent;
    var _a;
}());

//# sourceMappingURL=edit-form.component.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveFormFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveFormFieldComponent = (function () {
    function RemoveFormFieldComponent(_formFieldService) {
        this._formFieldService = _formFieldService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveFormFieldComponent.prototype, "visible", {
        get: function () { return this._visible; },
        // visible input
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveFormFieldComponent.prototype, "field", {
        // field input
        set: function (field) {
            // set visible
            this.model = field;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemoveFormFieldComponent.prototype.ngOnInit = function () {
        this.model = {
            label: '',
            type: ''
        };
    };
    /**
     * Hides the modal
     */
    RemoveFormFieldComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemoveFormFieldComponent.prototype.submit = function () {
        var _this = this;
        this._formFieldService.remove(this.form.id, this.index)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveFormFieldComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveFormFieldComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveFormFieldComponent.prototype, "field", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "form", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "onError", void 0);
    RemoveFormFieldComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-form-field',
            template: __webpack_require__(462),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */]) === "function" && _a || Object])
    ], RemoveFormFieldComponent);
    return RemoveFormFieldComponent;
    var _a;
}());

//# sourceMappingURL=remove-form-field.component.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveFormComponent = (function () {
    function RemoveFormComponent(_formService) {
        this._formService = _formService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveFormComponent.prototype, "visible", {
        get: function () { return this._visible; },
        // visible input
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveFormComponent.prototype, "form", {
        // form input
        set: function (form) {
            // set visible
            this.model = form;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemoveFormComponent.prototype.ngOnInit = function () {
        this.model = {
            id: '',
            name: ''
        };
    };
    /**
     * Hides the modal
     */
    RemoveFormComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemoveFormComponent.prototype.submit = function () {
        var _this = this;
        this._formService.remove(this.model.id)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveFormComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveFormComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveFormComponent.prototype, "form", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormComponent.prototype, "onError", void 0);
    RemoveFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-form',
            template: __webpack_require__(463),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */]) === "function" && _a || Object])
    ], RemoveFormComponent);
    return RemoveFormComponent;
    var _a;
}());

//# sourceMappingURL=remove-form.component.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddGalleryComponent = (function () {
    function AddGalleryComponent(_galleryService) {
        this._galleryService = _galleryService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddGalleryComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                name: ''
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    AddGalleryComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the add modal
     */
    AddGalleryComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the gallery
     */
    AddGalleryComponent.prototype.submit = function () {
        var _this = this;
        this._galleryService.add(this.model.name)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddGalleryComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddGalleryComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddGalleryComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddGalleryComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddGalleryComponent.prototype, "onError", void 0);
    AddGalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-gallery',
            template: __webpack_require__(464),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
    ], AddGalleryComponent);
    return AddGalleryComponent;
    var _a;
}());

//# sourceMappingURL=add-gallery.component.js.map

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCaptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditCaptionComponent = (function () {
    function EditCaptionComponent(_galleryImageService) {
        this._galleryImageService = _galleryImageService;
        // model to store
        this.model = {
            id: '',
            caption: ''
        };
        // visible input
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(EditCaptionComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditCaptionComponent.prototype, "image", {
        // item input
        set: function (image) {
            // set item
            this.model = image;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    EditCaptionComponent.prototype.ngOnInit = function () {
        this.model = {
            id: '',
            caption: ''
        };
    };
    /**
     * Hides the add modal
     */
    EditCaptionComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the gallery image
     */
    EditCaptionComponent.prototype.submit = function () {
        var _this = this;
        this._galleryImageService.edit(this.model.id, this.model.caption, this.gallery.id)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    EditCaptionComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditCaptionComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditCaptionComponent.prototype, "image", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "gallery", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "onError", void 0);
    EditCaptionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-edit-caption',
            template: __webpack_require__(465),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */]) === "function" && _a || Object])
    ], EditCaptionComponent);
    return EditCaptionComponent;
    var _a;
}());

//# sourceMappingURL=edit-caption.component.js.map

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditGalleryComponent = (function () {
    function EditGalleryComponent(_galleryService) {
        this._galleryService = _galleryService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(EditGalleryComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGalleryComponent.prototype, "gallery", {
        set: function (gallery) {
            // set visible
            this.model = gallery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    EditGalleryComponent.prototype.ngOnInit = function () {
        this.model = {
            id: '',
            name: ''
        };
    };
    /**
     * Hides the modal
     */
    EditGalleryComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the gallery
     */
    EditGalleryComponent.prototype.submit = function () {
        var _this = this;
        this._galleryService.edit(this.model.id, this.model.name)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful edit
     */
    EditGalleryComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditGalleryComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditGalleryComponent.prototype, "gallery", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditGalleryComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditGalleryComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditGalleryComponent.prototype, "onError", void 0);
    EditGalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-edit-gallery',
            template: __webpack_require__(466),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
    ], EditGalleryComponent);
    return EditGalleryComponent;
    var _a;
}());

//# sourceMappingURL=edit-gallery.component.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveGalleryImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveGalleryImageComponent = (function () {
    function RemoveGalleryImageComponent(_galleryImageService) {
        this._galleryImageService = _galleryImageService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveGalleryImageComponent.prototype, "visible", {
        get: function () { return this._visible; },
        // visible input
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveGalleryImageComponent.prototype, "image", {
        // image input
        set: function (image) {
            // set visible
            this.model = image;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemoveGalleryImageComponent.prototype.ngOnInit = function () {
        this.model = {
            id: '',
            name: '',
            url: '',
            caption: ''
        };
    };
    /**
     * Hides the modal
     */
    RemoveGalleryImageComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the gallery image
     */
    RemoveGalleryImageComponent.prototype.submit = function () {
        var _this = this;
        this._galleryImageService.remove(this.model.id, this.gallery.id)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveGalleryImageComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveGalleryImageComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveGalleryImageComponent.prototype, "image", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryImageComponent.prototype, "gallery", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryImageComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryImageComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryImageComponent.prototype, "onError", void 0);
    RemoveGalleryImageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-gallery-image',
            template: __webpack_require__(467),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */]) === "function" && _a || Object])
    ], RemoveGalleryImageComponent);
    return RemoveGalleryImageComponent;
    var _a;
}());

//# sourceMappingURL=remove-gallery-image.component.js.map

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveGalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveGalleryComponent = (function () {
    function RemoveGalleryComponent(_galleryService) {
        this._galleryService = _galleryService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveGalleryComponent.prototype, "visible", {
        get: function () { return this._visible; },
        // visible input
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveGalleryComponent.prototype, "gallery", {
        // gallery input
        set: function (gallery) {
            // set visible
            this.model = gallery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemoveGalleryComponent.prototype.ngOnInit = function () {
        this.model = {
            id: '',
            name: ''
        };
    };
    /**
     * Hides the modal
     */
    RemoveGalleryComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the gallery
     */
    RemoveGalleryComponent.prototype.submit = function () {
        var _this = this;
        this._galleryService.remove(this.model.id)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveGalleryComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveGalleryComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveGalleryComponent.prototype, "gallery", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryComponent.prototype, "onError", void 0);
    RemoveGalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-gallery',
            template: __webpack_require__(468),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
    ], RemoveGalleryComponent);
    return RemoveGalleryComponent;
    var _a;
}());

//# sourceMappingURL=remove-gallery.component.js.map

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMenuItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMenuItemComponent = (function () {
    function AddMenuItemComponent(_menuItemService, _pageService) {
        this._menuItemService = _menuItemService;
        this._pageService = _pageService;
        // model to store
        this.model = {
            html: '',
            cssClass: '',
            isNested: false,
            url: '',
            target: ''
        };
        this.flip = false;
        // visible input
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddMenuItemComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                html: '',
                cssClass: '',
                isNested: false,
                url: '',
                target: ''
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    AddMenuItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // list pages
        this._pageService.list()
            .subscribe(function (data) { _this.pages = data; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Hides the add modal
     */
    AddMenuItemComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    AddMenuItemComponent.prototype.submit = function () {
        var _this = this;
        this._menuItemService.add(this.menu.id, this.model.html, this.model.cssClass, this.model.isNested, this.model.url, this.model.target)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddMenuItemComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    /**
     * Handles a successful add
     */
    AddMenuItemComponent.prototype.flipCard = function () {
        // flip
        this.flip = !this.flip;
    };
    /**
     * Handles a successful add
     */
    AddMenuItemComponent.prototype.setUrl = function (item) {
        // flip
        this.flip = !this.flip;
        this.model.url = item.url;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddMenuItemComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], AddMenuItemComponent.prototype, "menu", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuItemComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuItemComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuItemComponent.prototype, "onError", void 0);
    AddMenuItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-menu-item',
            template: __webpack_require__(469),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]) === "function" && _b || Object])
    ], AddMenuItemComponent);
    return AddMenuItemComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-menu-item.component.js.map

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddMenuComponent = (function () {
    function AddMenuComponent(_menuService) {
        this._menuService = _menuService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddMenuComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                name: ''
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    AddMenuComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the add modal
     */
    AddMenuComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    AddMenuComponent.prototype.submit = function () {
        var _this = this;
        this._menuService.add(this.model.name)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddMenuComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddMenuComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuComponent.prototype, "onError", void 0);
    AddMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-menu',
            template: __webpack_require__(470),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], AddMenuComponent);
    return AddMenuComponent;
    var _a;
}());

//# sourceMappingURL=add-menu.component.js.map

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMenuItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditMenuItemComponent = (function () {
    function EditMenuItemComponent(_menuItemService, _pageService) {
        this._menuItemService = _menuItemService;
        this._pageService = _pageService;
        // model to store
        this.model = {
            html: '',
            cssClass: '',
            isNested: false,
            url: '',
            target: ''
        };
        this.flip = false;
        // visible input
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(EditMenuItemComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditMenuItemComponent.prototype, "item", {
        // item input
        set: function (item) {
            if (item != null && item != undefined) {
                if (item.target == null || item.target == undefined) {
                    item.target = '';
                }
            }
            // set item
            this.model = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    EditMenuItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = {
            html: '',
            cssClass: '',
            isNested: false,
            url: '',
            target: ''
        };
        // list pages
        this._pageService.list()
            .subscribe(function (data) { _this.pages = data; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Hides the add modal
     */
    EditMenuItemComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    EditMenuItemComponent.prototype.submit = function () {
        var _this = this;
        this._menuItemService.edit(this.menu.id, this.index, this.model.html, this.model.cssClass, this.model.isNested, this.model.url, this.model.target)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    EditMenuItemComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    /**
     * Handles a successful add
     */
    EditMenuItemComponent.prototype.flipCard = function () {
        // flip
        this.flip = !this.flip;
    };
    /**
     * Handles a successful add
     */
    EditMenuItemComponent.prototype.setUrl = function (item) {
        // flip
        this.flip = !this.flip;
        this.model.url = item.url;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditMenuItemComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "menu", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditMenuItemComponent.prototype, "item", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "onError", void 0);
    EditMenuItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-edit-menu-item',
            template: __webpack_require__(471),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]) === "function" && _b || Object])
    ], EditMenuItemComponent);
    return EditMenuItemComponent;
    var _a, _b;
}());

//# sourceMappingURL=edit-menu-item.component.js.map

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditMenuComponent = (function () {
    function EditMenuComponent(_menuService) {
        this._menuService = _menuService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(EditMenuComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditMenuComponent.prototype, "menu", {
        set: function (menu) {
            // set visible
            this.model = menu;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    EditMenuComponent.prototype.ngOnInit = function () {
        this.model = {
            id: '',
            name: ''
        };
    };
    /**
     * Hides the modal
     */
    EditMenuComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    EditMenuComponent.prototype.submit = function () {
        var _this = this;
        this._menuService.edit(this.model.id, this.model.name)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful edit
     */
    EditMenuComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditMenuComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditMenuComponent.prototype, "menu", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuComponent.prototype, "onError", void 0);
    EditMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-edit-menu',
            template: __webpack_require__(472),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], EditMenuComponent);
    return EditMenuComponent;
    var _a;
}());

//# sourceMappingURL=edit-menu.component.js.map

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveMenuItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveMenuItemComponent = (function () {
    function RemoveMenuItemComponent(_menuItemService) {
        this._menuItemService = _menuItemService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveMenuItemComponent.prototype, "visible", {
        get: function () { return this._visible; },
        // visible input
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveMenuItemComponent.prototype, "item", {
        // menu input
        set: function (item) {
            // set visible
            this.model = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemoveMenuItemComponent.prototype.ngOnInit = function () {
        this.model = {
            html: '',
            url: ''
        };
    };
    /**
     * Hides the modal
     */
    RemoveMenuItemComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemoveMenuItemComponent.prototype.submit = function () {
        var _this = this;
        this._menuItemService.remove(this.menu.id, this.index)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveMenuItemComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveMenuItemComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveMenuItemComponent.prototype, "item", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "menu", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "onError", void 0);
    RemoveMenuItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-menu-item',
            template: __webpack_require__(473),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */]) === "function" && _a || Object])
    ], RemoveMenuItemComponent);
    return RemoveMenuItemComponent;
    var _a;
}());

//# sourceMappingURL=remove-menu-item.component.js.map

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveMenuComponent = (function () {
    function RemoveMenuComponent(_menuService) {
        this._menuService = _menuService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveMenuComponent.prototype, "visible", {
        get: function () { return this._visible; },
        // visible input
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveMenuComponent.prototype, "menu", {
        // menu input
        set: function (menu) {
            // set visible
            this.model = menu;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemoveMenuComponent.prototype.ngOnInit = function () {
        this.model = {
            id: '',
            name: ''
        };
    };
    /**
     * Hides the modal
     */
    RemoveMenuComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemoveMenuComponent.prototype.submit = function () {
        var _this = this;
        this._menuService.remove(this.model.id)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveMenuComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveMenuComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveMenuComponent.prototype, "menu", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuComponent.prototype, "onError", void 0);
    RemoveMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-menu',
            template: __webpack_require__(474),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], RemoveMenuComponent);
    return RemoveMenuComponent;
    var _a;
}());

//# sourceMappingURL=remove-menu.component.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPageComponent = (function () {
    function AddPageComponent(_pageService, _siteService, _routeService) {
        this._pageService = _pageService;
        this._siteService = _siteService;
        this._routeService = _routeService;
        // set processing
        this.processing = false;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddPageComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                path: '/',
                url: '',
                title: '',
                description: '',
                template: 'default'
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init pages
     */
    AddPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeService.list()
            .subscribe(function (data) { _this.routes = data; }, function (error) { _this.onError.emit(error); });
        this._siteService.listTemplates()
            .subscribe(function (data) { _this.templates = data; }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Hides the add page modal
     */
    AddPageComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    AddPageComponent.prototype.submit = function () {
        var _this = this;
        // set full path
        var fullUrl = this.model.path + '/' + this.model.url;
        if (this.model.path == '/') {
            fullUrl = '/' + this.model.url;
        }
        // set processing
        this.processing = true;
        this._pageService.add(fullUrl, this.model.title, this.model.description, this.model.template)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddPageComponent.prototype.success = function () {
        toast.show('success');
        // set processing
        this.processing = false;
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddPageComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddPageComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddPageComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddPageComponent.prototype, "onError", void 0);
    AddPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-page',
            template: __webpack_require__(475),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */]) === "function" && _c || Object])
    ], AddPageComponent);
    return AddPageComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=add-page.component.js.map

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageSettingsComponent = (function () {
    function PageSettingsComponent(_pageService, _siteService, _routeService) {
        this._pageService = _pageService;
        this._siteService = _siteService;
        this._routeService = _routeService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(PageSettingsComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageSettingsComponent.prototype, "page", {
        set: function (page) {
            // set visible
            this.model = page;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init pages
     */
    PageSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeService.list()
            .subscribe(function (data) { _this.routes = data; }, function (error) { _this.onError.emit(error); });
        this._siteService.listTemplates()
            .subscribe(function (data) { _this.templates = data; }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Hides the modal
     */
    PageSettingsComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    PageSettingsComponent.prototype.submit = function () {
        var _this = this;
        this._pageService.updateSettings(this.model.url, this.model.title, this.model.description, this.model.keywords, this.model.tags, this.model.callout, this.model.language, this.model.direction, this.model.template, this.model.customHeader, this.model.customFooter, this.model.photo, this.model.thumb, this.model.location)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.errorMessage = error; _this.error(); });
    };
    /**
     * Shows the select modal
     */
    PageSettingsComponent.prototype.showSelect = function () {
        this.selectVisible = true;
    };
    /**
     * Handles the selection of an image
     */
    PageSettingsComponent.prototype.select = function (event) {
        this.model.photo = 'files/' + event.name;
        this.model.thumb = 'files/thumbs/' + event.name;
        this.selectVisible = false;
    };
    /**
     * Handles a successful submission
     */
    PageSettingsComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onUpdate.emit(null);
    };
    /**
     * Handles an error
     */
    PageSettingsComponent.prototype.error = function () {
        console.log('[respond.error] ' + this.errorMessage);
        toast.show('failure');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PageSettingsComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PageSettingsComponent.prototype, "page", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], PageSettingsComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], PageSettingsComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], PageSettingsComponent.prototype, "onError", void 0);
    PageSettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-page-settings',
            template: __webpack_require__(476),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */]) === "function" && _c || Object])
    ], PageSettingsComponent);
    return PageSettingsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=page-settings.component.js.map

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemovePageComponent = (function () {
    function RemovePageComponent(_pageService, _routeService) {
        this._pageService = _pageService;
        this._routeService = _routeService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemovePageComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemovePageComponent.prototype, "page", {
        set: function (page) {
            // set visible
            this.model = page;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init pages
     */
    RemovePageComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the modal
     */
    RemovePageComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemovePageComponent.prototype.submit = function () {
        var _this = this;
        this._pageService.remove(this.model.url)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemovePageComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemovePageComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemovePageComponent.prototype, "page", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePageComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePageComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePageComponent.prototype, "onError", void 0);
    RemovePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-page',
            template: __webpack_require__(477),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__["a" /* RouteService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__["a" /* RouteService */]) === "function" && _b || Object])
    ], RemovePageComponent);
    return RemovePageComponent;
    var _a, _b;
}());

//# sourceMappingURL=remove-page.component.js.map

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovePluginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemovePluginComponent = (function () {
    function RemovePluginComponent(_siteService) {
        this._siteService = _siteService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemovePluginComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemovePluginComponent.prototype, "plugin", {
        set: function (plugin) {
            // set visible
            this.model = plugin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemovePluginComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the modal
     */
    RemovePluginComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemovePluginComponent.prototype.submit = function () {
        var _this = this;
        this._siteService.removePlugin(this.model.selector)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemovePluginComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemovePluginComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemovePluginComponent.prototype, "plugin", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePluginComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePluginComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePluginComponent.prototype, "onError", void 0);
    RemovePluginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-plugin',
            template: __webpack_require__(478),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */]) === "function" && _a || Object])
    ], RemovePluginComponent);
    return RemovePluginComponent;
    var _a;
}());

//# sourceMappingURL=remove-plugin.component.js.map

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveSubmissionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveSubmissionComponent = (function () {
    function RemoveSubmissionComponent(_submissionService) {
        this._submissionService = _submissionService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveSubmissionComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveSubmissionComponent.prototype, "submission", {
        set: function (submission) {
            // set visible
            this.model = submission;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    RemoveSubmissionComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the modal
     */
    RemoveSubmissionComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemoveSubmissionComponent.prototype.submit = function () {
        var _this = this;
        this._submissionService.remove(this.model.id)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveSubmissionComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveSubmissionComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveSubmissionComponent.prototype, "submission", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveSubmissionComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveSubmissionComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveSubmissionComponent.prototype, "onError", void 0);
    RemoveSubmissionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-submission',
            template: __webpack_require__(479),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */]) === "function" && _a || Object])
    ], RemoveSubmissionComponent);
    return RemoveSubmissionComponent;
    var _a;
}());

//# sourceMappingURL=remove-submission.component.js.map

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSubmissionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewSubmissionComponent = (function () {
    function ViewSubmissionComponent(_submissionService) {
        this._submissionService = _submissionService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(ViewSubmissionComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewSubmissionComponent.prototype, "submission", {
        set: function (submission) {
            // set visible
            this.model = submission;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init
     */
    ViewSubmissionComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the modal
     */
    ViewSubmissionComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ViewSubmissionComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ViewSubmissionComponent.prototype, "submission", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewSubmissionComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewSubmissionComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewSubmissionComponent.prototype, "onError", void 0);
    ViewSubmissionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-view-submission',
            template: __webpack_require__(480),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */]) === "function" && _a || Object])
    ], ViewSubmissionComponent);
    return ViewSubmissionComponent;
    var _a;
}());

//# sourceMappingURL=view-submission.component.js.map

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = (function () {
    function AddUserComponent(_userService, _appService) {
        this._userService = _userService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(AddUserComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                retype: '',
                language: 'en'
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Inits component
     */
    AddUserComponent.prototype.ngOnInit = function () {
        this.languages = [];
        this.list();
    };
    /**
     * Lists available languages
     */
    AddUserComponent.prototype.list = function () {
        var _this = this;
        this._appService.listLanguages()
            .subscribe(function (data) { _this.languages = data; }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Hides the modal
     */
    AddUserComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    AddUserComponent.prototype.submit = function () {
        var _this = this;
        if (this.model.password != this.model.retype) {
            console.log('[respond.error] password mismatch');
            toast.show('failure', 'The password does not match the retype field');
            return;
        }
        // add user
        this._userService.add(this.model.email, this.model.firstName, this.model.lastName, this.model.password, this.model.language)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful add
     */
    AddUserComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddUserComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "onAdd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "onError", void 0);
    AddUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-add-user',
            template: __webpack_require__(481),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]) === "function" && _b || Object])
    ], AddUserComponent);
    return AddUserComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-user.component.js.map

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditUserComponent = (function () {
    function EditUserComponent(_userService, _appService) {
        this._userService = _userService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(EditUserComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
            // reset model
            this.model = {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                retype: '',
                language: 'en'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditUserComponent.prototype, "user", {
        set: function (user) {
            // set visible
            this.model = user;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Inits component
     */
    EditUserComponent.prototype.ngOnInit = function () {
        this.languages = [];
        this.list();
    };
    /**
     * Lists available languages
     */
    EditUserComponent.prototype.list = function () {
        var _this = this;
        this._appService.listLanguages()
            .subscribe(function (data) { _this.languages = data; }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Hides the modal
     */
    EditUserComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    EditUserComponent.prototype.submit = function () {
        var _this = this;
        if (this.model.password != this.model.retype) {
            console.log('[respond.error] password mismatch');
            toast.show('failure', 'The password does not match the retype field');
            return;
        }
        // add user
        this._userService.edit(this.model.email, this.model.firstName, this.model.lastName, this.model.password, this.model.language)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful edit
     */
    EditUserComponent.prototype.success = function () {
        toast.show('success');
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditUserComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditUserComponent.prototype, "user", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditUserComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditUserComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], EditUserComponent.prototype, "onError", void 0);
    EditUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-edit-user',
            template: __webpack_require__(482),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]) === "function" && _b || Object])
    ], EditUserComponent);
    return EditUserComponent;
    var _a, _b;
}());

//# sourceMappingURL=edit-user.component.js.map

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveUserComponent = (function () {
    function RemoveUserComponent(_userService) {
        this._userService = _userService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    Object.defineProperty(RemoveUserComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveUserComponent.prototype, "user", {
        set: function (user) {
            // set visible
            this.model = user;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init pages
     */
    RemoveUserComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the modal
     */
    RemoveUserComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    RemoveUserComponent.prototype.submit = function () {
        var _this = this;
        this._userService.remove(this.model.email)
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    RemoveUserComponent.prototype.success = function () {
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveUserComponent.prototype, "visible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveUserComponent.prototype, "user", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveUserComponent.prototype, "onCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveUserComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveUserComponent.prototype, "onError", void 0);
    RemoveUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'respond-remove-user',
            template: __webpack_require__(483),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], RemoveUserComponent);
    return RemoveUserComponent;
    var _a;
}());

//# sourceMappingURL=remove-user.component.js.map

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeAgoPipe = (function () {
    function TimeAgoPipe() {
    }
    TimeAgoPipe.prototype.transform = function (value, str) {
        // set locale
        if (str) {
            moment.locale(str);
        }
        else {
            moment.locale('en');
        }
        return moment(value).fromNow();
    };
    TimeAgoPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Pipe */])({ name: 'timeAgo' })
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());

//# sourceMappingURL=time-ago.pipe.js.map

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingService = (function () {
    function SettingService(http) {
        this.http = http;
        this._listUrl = 'api/settings/list';
        this._editUrl = 'api/settings/edit';
    }
    /**
     * Lists settings
     *
     */
    SettingService.prototype.list = function () {
        var url = this._listUrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    /**
     * Editssettings
     *
     * @param {array} settings
     * @return {Observable}
     */
    SettingService.prototype.edit = function (settings) {
        var body = JSON.stringify({ settings: settings });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, options);
    };
    SettingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], SettingService);
    return SettingService;
    var _a;
}());

//# sourceMappingURL=setting.service.js.map

/***/ }),
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Advanced' | translate }}</h1>\n</menu>\n\n<section class=\"app-main\">\n\n  <div id=\"developer-list\" class=\"app-list\">\n    <div class=\"app-list-item\" (click)=\"setActive('plugins')\" [class.selected]=\"selectedOption === 'plugins'\">\n      <h2><span class=\"primary\">{{ 'Re-publish Plugins' | translate }}</span></h2>\n      <p>{{ 'When you are developing a plugin, you can use this function to republish the pages so the plugin update takes effect.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"reload()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- plugins -->\n\n    <div class=\"app-list-item\" (click)=\"setActive('reindex')\" [class.selected]=\"selectedOption === 'reindex'\">\n      <h2><span class=\"primary\">{{ 'Re-index Pages' | translate }}</span></h2>\n      <p>{{ 'Republish the sitemap and pages index.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"reindex()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- sitemap -->\n\n    <div class=\"app-list-item\" (click)=\"setActive('sitemap')\" [class.selected]=\"selectedOption === 'sitemap'\">\n      <h2><span class=\"primary\">{{ 'Re-publish Sitemap' | translate }}</span></h2>\n      <p>{{ 'Republish the sitemap when you make changes outside of the application.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"sitemap()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- sitemap -->\n\n    <!-- \n    <div class=\"app-list-item\" (click)=\"setActive('migrate')\" [class.selected]=\"selectedOption === 'migrate'\">\n      <h2><span class=\"primary\">{{ 'Migrate Respond 5 site' | translate }}</span></h2>\n      <p>{{ 'Updates HTML from Respond 5 so that it consistent with Respond 6' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"migrate()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    migrate -->\n\n    <div class=\"app-list-item\" (click)=\"setActive('templates')\" [class.selected]=\"selectedOption === 'templates'\">\n      <h2><span class=\"primary\">{{ 'Republish Templates' | translate }}</span></h2>\n      <p>{{ 'Republishes all templates and pushes the updates to pages that inherit from those templates.  Warning: Will overwrite any custom HTML outside of the [role=main] block with HTML from the template.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"templates()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- republish template -->\n\n    <div class=\"app-list-item\" (click)=\"setActive('update-plugins')\" [class.selected]=\"selectedOption === 'update-plugins'\">\n      <h2><span class=\"primary\">{{ 'Update Plugins' | translate }}</span></h2>\n      <p>{{ 'Updates the plugins for your site and re-syncs them with the latest version from the theme. Warning: will overwrite any custom updates you made to plugins built into the theme.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"update()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- republish template -->\n\n  </div>\n\n</section>\n\n<respond-drawer active=\"advanced\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>"

/***/ }),
/* 437 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),
/* 438 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-interior-menu\">\n  <button class=\"app-back\" (click)=\"back()\"><svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg></button>\n  <h2>{{codeUrl}}</h2>\n\n  <button class=\"app-add\" (click)=\"showAdd()\" *ngIf=\"showMenu === true\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g></svg></button>\n</menu>\n\n<nav class=\"code-menu\" *ngIf=\"showMenu === true\">\n\n  <h2 (click)=\"expand('template')\" [class.expanded]=\"isTemplatesExpanded === true\">\n    <span>{{ 'Templates' | translate }}</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isTemplatesExpanded === true\">\n    <li *ngFor=\"let template of templates\"><a (click)=\"view('template', template)\">{{template}}</a></li>\n  </ul>\n\n  <h2 (click)=\"expand('page')\" [class.expanded]=\"isPagesExpanded === true\">\n    <span>{{ 'Pages' | translate }}</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isPagesExpanded === true\">\n    <li *ngFor=\"let page of pages\"><a (click)=\"view('page', page)\">{{page}}</a></li>\n  </ul>\n\n  <h2 (click)=\"expand('component')\" [class.expanded]=\"isComponentsExpanded === true\">\n    <span>{{ 'Components' | translate }}</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isComponentsExpanded === true\">\n    <li *ngFor=\"let component of components\"><a (click)=\"view('component', component)\">{{component}}</a></li>\n  </ul>\n\n\n\n  <h2 (click)=\"expand('stylesheet')\" [class.expanded]=\"isStylesheetsExpanded === true\">\n    CSS\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isStylesheetsExpanded === true\">\n    <li *ngFor=\"let stylesheet of stylesheets\"><a (click)=\"view('stylesheet', stylesheet)\">{{stylesheet}}</a></li>\n  </ul>\n\n  <h2 (click)=\"expand('script')\" [class.expanded]=\"isScriptsExpanded === true\">\n    JS\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isScriptsExpanded === true\">\n    <li *ngFor=\"let script of scripts\"><a (click)=\"view('script', script)\">{{script}}</a></li>\n  </ul>\n\n  <h2 (click)=\"expand('plugin')\" [class.expanded]=\"isPluginsExpanded === true\">\n    <span>{{ 'Plugins' | translate }}</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isPluginsExpanded === true\">\n    <li *ngFor=\"let plugin of plugins\"><a (click)=\"view('plugin', plugin)\">{{plugin}}</a></li>\n  </ul>\n\n\n</nav>\n\n<div id=\"editor\" class=\"code-editor\" [class.expanded]=\"showMenu === false\"></div>\n\n<menu class=\"app-interior-menu-alternate\">\n  <button class=\"respond-save\" (click)=\"saveAndExit()\">Save and Exit</button>\n  <button class=\"respond-save primary\" (click)=\"save()\">Save</button>\n</menu>\n\n<respond-add-code [visible]=\"addVisible\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-code>"

/***/ }),
/* 439 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Components' | translate }}</h1>\n\n    <button class=\"app-add\" (click)=\"showAdd()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g></svg></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <div id=\"components-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let component of components\" (click)=\"setActive(component)\" [class.selected]=\"component === selectedComponent\">\n      <h2>\n        <span class=\"primary\">{{ component.title }}</span>\n      </h2>\n      <small>\n        {{ component.url }}\n      </small>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(component)\">{{'Remove' | translate }}</a>\n          <a (click)=\"editCode(component)\">{{'Edit HTML' | translate }}</a>\n          <a class=\"primary\" (click)=\"edit(component)\">{{'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"components.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-add-component [visible]=\"addVisible\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-component>\n\n<respond-remove-component [visible]=\"removeVisible\" [component]=\"component\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-component>\n\n<respond-drawer active=\"components\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>"

/***/ }),
/* 440 */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"><img src=\"{{ logoUrl }}\"></div>\n\n <div class=\"app-slideshow\">\n\n  <div class=\"app-slideshow-item\" *ngFor=\"let theme of themes\" [class.selected]=\"theme === selectedTheme\">\n\n    <div class=\"app-slideshow-container\">\n      <div class=\"screenshot\">\n        <img src=\"{{themesLocation}}{{theme.location.replace('/','')}}/screenshot.png\">\n      </div>\n      <div class=\"description\">\n        <h2>{{ theme.name }}</h2>\n        <p>{{ theme.desc }}</p>\n        <p>\n          <a class=\"primary\" (click)=\"useTheme()\">{{ 'Use this Theme' | translate }}</a>\n          <a (click)=\"next()\">{{ 'Next Theme' | translate }}</a>\n        </p>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.app-slideshow -->\n\n</div>\n\n<div class=\"app-theme-list\">\n\n  <h3>{{ 'All Themes' | translate }}</h3>\n\n  <div>\n    <span class=\"app-theme-image\" *ngFor=\"let theme of themes; let i = index;\" [class.selected]=\"theme === selectedTheme\">\n      <img src=\"{{themesLocation}}{{theme.location.replace('/','')}}/screenshot.png\" (click)=\"select(i)\">\n    </span>\n  </div>\n\n  <p class=\"acknowledgement\" [innerHTML]=\"acknowledgement\"></p>\n\n</div>\n<!-- /.app-theme-list -->\n\n\n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #createForm=\"ngForm\">\n\n      <h2>{{ 'Create Site' | translate }}</h2>\n\n      <label>{{ 'Site Name' | translate }}</label>\n      <input type=\"text\" name=\"name\"\n        [(ngModel)]=\"model.name\"\n        ngControl=\"name\" required>\n\n\n      <label>{{ 'Email' | translate }}</label>\n      <input type=\"text\" name=\"email\"\n        [(ngModel)]=\"model.email\"\n        ngControl=\"email\" required>\n\n      <label>{{ 'Password' | translate }}</label>\n      <input type=\"password\" name=\"password\"\n        [(ngModel)]=\"model.password\"\n        ngControl=\"password\" required>\n\n      <label *ngIf=\"hasPasscode === true\">{{ 'Passcode' | translate }}</label>\n      <input type=\"text\" name=\"passcode\" *ngIf=\"hasPasscode === true\"\n        [(ngModel)]=\"model.passcode\"\n        ngControl=\"passcode\" required>\n\n      <div *ngIf=\"recaptchaSiteKey !== ''\" class=\"g-recaptcha\" [attr.data-sitekey]=\"recaptchaSiteKey\" data-callback=\"verifyCallback\"></div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Create' | translate }}</button>\n      </div>\n\n      <p>{{ 'By creating a site you are accepting our terms of service.' | translate }}</p>\n\n  </form>\n\n</div>\n"

/***/ }),
/* 441 */
/***/ (function(module, exports) {

module.exports = "<iframe [src]=\"url\" class=\"edit-frame\"></iframe>"

/***/ }),
/* 442 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Files' | translate }}</h1>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <respond-dropzone (onAdd)=\"list($event)\"></respond-dropzone>\n\n  <div id=\"files-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let  file of files\" (click)=\"setActive(file)\" [class.selected]=\"file === selectedFile\" [class.image]=\"file.thumb !== ''\">\n      <h2><span class=\"primary\">{{ file.name }}</span><span class=\"secondary\">{{ file.size }} MB</span></h2>\n      <img *ngIf=\"file.thumb !== ''\" class=\"image\" src=\"{{file.thumb}}\">\n      <small>/files/{{ file.name }}</small>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(file)\">{{ 'Remove' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"files.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-remove-file [visible]=\"removeVisible\" [file]=\"file\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-file>\n\n<respond-drawer active=\"files\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>"

/***/ }),
/* 443 */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"><img src=\"{{ logoUrl }}\"></div>\n\n<form class=\"app-form standalone\" (submit)=\"forgot($event, email.value, site.value)\">\n\n    <h2>{{ 'Forgot Password?' | translate }}</h2>\n\n    <label>{{ 'Email' | translate }}</label>\n    <input type=\"text\" name=\"email\" #email required=\"required\">\n\n    <div [hidden]=\"!hasMultipleSites\">\n        <label>{{ 'Site Name' | translate }}</label>\n        <input type=\"text\" name=\"site\" #site>\n        <small>{{ 'You have multiple sites registered with this email.  Key the name of the site above to retrieve your password. You can speed up the process in the future by navigating to forgot/site-name.' | translate }}</small>\n    </div>\n\n    <button type=\"submit\">{{ 'Send' | translate }}</button>\n\n</form>"

/***/ }),
/* 444 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\" [class.noborder]=\"forms.length !== 0\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Forms' | translate }}</h1>\n\n    <button class=\"app-add position-2\" (click)=\"showAddField()\" *ngIf=\"forms.length !== 0\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g></svg></button>\n\n    <button class=\"app-overflow\" (click)=\"toggleOverflow()\" *ngIf=\"selectedForm !== undefined\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/></svg></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <nav class=\"app-selector\">\n    <ul>\n      <li *ngFor=\"let form of forms\" [class.selected]=\"form.id === selectedForm.id\" (click)=\"setActive(form)\">\n        <a>{{form.name}}</a>\n      </li>\n    </ul>\n  </nav>\n\n\n  <div id=\"fields-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let field of fields\" (click)=\"setFieldActive(field)\" [class.selected]=\"field === selectedField\">\n      <h2><span class=\"primary\">{{ field.label }}</span></h2>\n      <small>{{ field.type | translate }}</small>\n      <div class=\"app-list-actions\">\n          <span class=\"app-list-alternate-actions\">\n            <a (click)=\"moveFieldDown(field)\">{{ 'Move Down' | translate }}</a>\n            <a (click)=\"moveFieldUp(field)\">{{ 'Move Up' | translate }}</a>\n          </span>\n          <a (click)=\"showRemoveField(field)\">{{ 'Remove' | translate }}</a>\n          <a class=\"primary\" (click)=\"showEditField(field)\">{{ 'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"fields.length === 0\">\n    {{ 'Nothing here yet' | translate }}\n    <a (click)=\"showAddField()\" *ngIf=\"forms.length !== 0 && fields.length === 0\">{{ 'Add Form Field' | translate }}</a>\n    <a (click)=\"showAdd()\" *ngIf=\"forms.length === 0\">{{ 'Add Form' | translate }}</a>\n  </p>\n\n</section>\n\n<respond-add-form [visible]=\"addVisible\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-form>\n\n<respond-edit-form [visible]=\"editVisible\" [form]=\"selectedForm\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-edit-form>\n\n<respond-remove-form [visible]=\"removeVisible\" [form]=\"selectedForm\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-form>\n\n<respond-add-form-field [visible]=\"addFieldVisible\" [form]=\"selectedForm\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-form-field>\n\n<respond-edit-form-field [visible]=\"editFieldVisible\" [form]=\"selectedForm\" [field]=\"selectedField\" [index]=\"selectedIndex\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-edit-form-field>\n\n<respond-remove-form-field [visible]=\"removeFieldVisible\" [form]=\"selectedForm\" [field]=\"selectedField\" [index]=\"selectedIndex\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-form-field>\n\n<respond-drawer active=\"forms\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>\n\n<nav class=\"app-overflow\" [class.visible]=\"overflowVisible === true\">\n\n  <ul>\n    <li class=\"app-overflow-title\"><span>{{ 'Additional Options' | translate }}</span></li>\n    <li><a (click)=\"showAdd()\">{{ 'Add Form' | translate }}</a></li>\n    <li><a (click)=\"showEdit()\">{{ 'Edit Form' | translate }}</a></li>\n    <li><a (click)=\"showRemove()\">{{ 'Remove Form' | translate }}</a></li>\n  </ul>\n\n</nav>"

/***/ }),
/* 445 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\" [class.noborder]=\"galleries.length !== 0\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Galleries' | translate }}</h1>\n\n    <button class=\"app-add position-2\" (click)=\"showSelect()\" *ngIf=\"galleries.length !== 0\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g></svg></button>\n\n    <button class=\"app-overflow\" (click)=\"toggleOverflow()\" *ngIf=\"selectedGallery !== undefined\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/></svg></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <nav class=\"app-selector\">\n    <ul>\n      <li *ngFor=\"let gallery of galleries\" [class.selected]=\"gallery.id === selectedGallery.id\" (click)=\"setActive(gallery)\">\n        <a>{{gallery.name}}</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div id=\"images-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let image of images\" (click)=\"setImageActive(image)\" [class.selected]=\"image === selectedImage\" [class.image]=\"image.thumb !== ''\">\n      <h2><span class=\"primary\">{{ image.name }}</span></h2>\n      <img *ngIf=\"image.thumb !== ''\" class=\"image\" src=\"sites/{{id}}/{{image.thumb}}\">\n      <small>{{ image.caption }}</small>\n      <div class=\"app-list-actions\">\n          <span class=\"app-list-alternate-actions\">\n            <a (click)=\"moveImageDown(image)\">{{ 'Move Down' | translate }}</a>\n            <a (click)=\"moveImageUp(image)\">{{ 'Move Up' | translate }}</a>\n          </span>\n          <a (click)=\"showRemoveImage(image)\">{{ 'Remove' | translate }}</a>\n          <a (click)=\"showEditImage(image)\" class=\"primary\">{{ 'Edit Caption' | translate }}</a>\n      </div>\n    </div>\n\n    <p class=\"no-list-items\" *ngIf=\"images.length === 0\">\n      {{ 'Nothing here yet' | translate }}\n      <a (click)=\"showSelect()\" *ngIf=\"galleries.length !== 0 && images.length === 0\">{{ 'Add Image' | translate }}</a>\n      <a (click)=\"showAdd()\" *ngIf=\"galleries.length === 0\">{{ 'Add Gallery' | translate }}</a>\n    </p>\n\n  </div>\n\n</section>\n\n<respond-add-gallery [visible]=\"addVisible\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-gallery>\n\n<respond-edit-gallery [visible]=\"editVisible\" [gallery]=\"selectedGallery\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-edit-gallery>\n\n<respond-remove-gallery [visible]=\"removeVisible\" [gallery]=\"selectedGallery\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-gallery>\n\n<respond-select-file [visible]=\"selectVisible\" (onCancel)=\"reset($event)\"  (onSelect)=\"select($event)\" (onError)=\"failure($event)\"></respond-select-file>\n\n<respond-edit-caption [visible]=\"editImageVisible\" [gallery]=\"selectedGallery\" [image]=\"selectedImage\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-edit-caption>\n\n<respond-remove-gallery-image [visible]=\"removeImageVisible\" [gallery]=\"selectedGallery\" [image]=\"selectedImage\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-gallery-image>\n\n<respond-drawer active=\"galleries\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>\n\n<nav class=\"app-overflow\" [class.visible]=\"overflowVisible === true\">\n\n  <ul>\n    <li class=\"app-overflow-title\"><span>{{ 'Additional Options' | translate }}</span></li>\n    <li><a (click)=\"showAdd()\">{{ 'Add Gallery' | translate }}</a></li>\n    <li><a (click)=\"showEdit()\">{{ 'Edit Gallery' | translate }}</a></li>\n    <li><a (click)=\"showRemove()\">{{ 'Remove Gallery' | translate }}</a></li>\n  </ul>\n\n</nav>"

/***/ }),
/* 446 */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"><img src=\"{{ logoUrl }}\"></div>\n\n<form class=\"app-form standalone\" (submit)=\"login($event, email.value, password.value, site.value)\">\n\n    <label *ngIf=\"usesLDAP === false\">{{ 'Email' | translate }}</label>\n    <label *ngIf=\"usesLDAP === true\">{{ 'Username' | translate }}</label>\n    <input type=\"text\" name=\"email\" #email>\n\n    <label>{{ 'Password' | translate }}</label>\n    <input type=\"password\" name=\"password\" #password>\n\n    <div [hidden]=\"!hasMultipleSites\">\n        <label>{{ 'Site Name' | translate }}</label>\n        <input type=\"text\" name=\"site\" #site>\n        <small>{{ 'You have multiple sites registered with this email.  Key the name of the site above to login. You can speed up the process in the future by navigating to login/site-name.' | translate }}</small>\n    </div>\n\n    <button type=\"submit\">{{ 'Login' | translate }}</button>\n\n    <a (click)=\"forgot()\">{{ 'Forgot Password?' | translate }}</a>\n\n</form>\n\n<p class=\"acknowledgement\" [innerHTML]=\"acknowledgement\"></p>"

/***/ }),
/* 447 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\" [class.noborder]=\"menus.length !== 0\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Menus' | translate }}</h1>\n\n    <button class=\"app-add position-2\" (click)=\"showAddItem()\" *ngIf=\"menus.length !== 0\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g></svg></button>\n\n    <button class=\"app-overflow\" (click)=\"toggleOverflow()\" *ngIf=\"selectedMenu !== undefined\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/></svg></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <nav class=\"app-selector\">\n    <ul>\n      <li *ngFor=\"let menu of menus\" [class.selected]=\"menu.id === selectedMenu.id\" (click)=\"setActive(menu)\">\n        <a>{{menu.name}}</a>\n      </li>\n    </ul>\n  </nav>\n\n\n  <div id=\"items-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let item of items\" (click)=\"setItemActive(item)\" [class.selected]=\"item === selectedItem\">\n      <h2><span class=\"primary\">{{ item.html }}</span></h2>\n      <small>{{ item.url }}</small>\n      <div class=\"app-list-actions\">\n          <span class=\"app-list-alternate-actions\">\n            <a (click)=\"moveItemDown(item)\">{{ 'Move Down' | translate }}</a>\n            <a (click)=\"moveItemUp(item)\">{{ 'Move Up' | translate }}</a>\n          </span>\n          <a (click)=\"showRemoveItem(item)\">{{ 'Remove' | translate }}</a>\n          <a class=\"primary\" (click)=\"showEditItem(item)\">{{ 'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"items.length === 0\">\n    {{ 'Nothing here yet' | translate }}\n    <a (click)=\"showAddItem()\" *ngIf=\"menus.length !== 0 && items.length === 0\">{{ 'Add Menu Item' | translate }}</a>\n    <a (click)=\"showAdd()\" *ngIf=\"menus.length === 0\">{{ 'Add Menu' | translate }}</a>\n  </p>\n\n</section>\n\n<respond-add-menu [visible]=\"addVisible\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-menu>\n\n<respond-edit-menu [visible]=\"editVisible\" [menu]=\"selectedMenu\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-edit-menu>\n\n<respond-remove-menu [visible]=\"removeVisible\" [menu]=\"selectedMenu\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-menu>\n\n<respond-add-menu-item [visible]=\"addItemVisible\" [menu]=\"selectedMenu\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-menu-item>\n\n<respond-edit-menu-item [visible]=\"editItemVisible\" [menu]=\"selectedMenu\" [item]=\"selectedItem\" [index]=\"selectedIndex\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-edit-menu-item>\n\n<respond-remove-menu-item [visible]=\"removeItemVisible\" [menu]=\"selectedMenu\" [item]=\"selectedItem\" [index]=\"selectedIndex\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-menu-item>\n\n<respond-drawer active=\"menus\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>\n\n<nav class=\"app-overflow\" [class.visible]=\"overflowVisible === true\">\n\n  <ul>\n    <li class=\"app-overflow-title\"><span>{{ 'Additional Options' | translate }}</span></li>\n    <li><a (click)=\"showAdd()\">{{ 'Add Menu' | translate }}</a></li>\n    <li><a (click)=\"showEdit()\">{{ 'Edit Menu' | translate }}</a></li>\n    <li><a (click)=\"showRemove()\">{{ 'Remove Menu' | translate }}</a></li>\n  </ul>\n\n</nav>"

/***/ }),
/* 448 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Pages' | translate }}</h1>\n\n    <button class=\"app-add\" (click)=\"showAdd()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g></svg></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <div class=\"app-search\">\n    <input type=\"search\" [(ngModel)]=\"search\" (input)=\"searchList()\" placeholder=\"{{ 'Search by Name or URL' | translate }}\">\n  </div>\n\n  <div id=\"pages-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let page of filteredPages\" (click)=\"setActive(page)\" [class.selected]=\"page === selectedPage\" [class.image]=\"page.thumb !== ''\">\n      <h2>\n        <span class=\"primary\">{{ page.title }}</span>\n        <svg *ngIf=\"page.location && (page.location !== '')\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" class=\"location\">\n            <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/>\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n        <span class=\"secondary\">{{ page.lastModifiedDate | timeAgo }}</span>\n      </h2>\n      <img *ngIf=\"page.thumb !== ''\" class=\"image\" src=\"sites/{{id}}/{{page.thumb}}\">\n      <small>\n        {{ page.url }}\n      </small>\n      <p>{{ page.description }}</p>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(page)\">{{'Remove' | translate }}</a>\n          <a (click)=\"showSettings(page)\">{{'Settings' | translate }}</a>\n          <a (click)=\"editCode(page)\">{{'Edit HTML' | translate }}</a>\n          <a class=\"primary\" (click)=\"edit(page)\">{{'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"pages.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-add-page [visible]=\"addVisible\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-page>\n\n<respond-page-settings [visible]=\"settingsVisible\" [page]=\"page\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-page-settings>\n\n<respond-remove-page [visible]=\"removeVisible\" [page]=\"page\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-page>\n\n<respond-drawer active=\"pages\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>"

/***/ }),
/* 449 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Plugins' | translate }}</h1>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <respond-dropzone url=\"/api/plugins/upload\" (onAdd)=\"list($event)\"></respond-dropzone>\n\n  <div id=\"plugins-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let  plugin of plugins\" (click)=\"setActive(plugin)\" [class.selected]=\"plugin === selectedPlugin\">\n      <h2><span class=\"icon\" [innerHTML]=\"plugin.display\"></span> <span class=\"primary\">{{ plugin.title }}</span></h2>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(plugin)\">{{ 'Remove' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"plugins.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-drawer active=\"plugins\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>\n\n<respond-remove-plugin [visible]=\"removeVisible\" [plugin]=\"plugin\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-plugin>"

/***/ }),
/* 450 */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"><img src=\"{{ logoUrl }}\"></div>\n\n<form class=\"app-form standalone\" (submit)=\"reset($event, password.value, retype.value)\">\n\n    <h2>{{ 'Reset Password' | translate }}</h2>\n\n    <label>{{ 'Password' | translate }}</label>\n    <input type=\"password\" name=\"password\" #password>\n\n    <label>{{ 'Re-Type Password' | translate }}</label>\n    <input type=\"password\" name=\"retype\" #retype>\n\n    <button type=\"submit\">{{ 'Reset Password' | translate }}</button>\n\n</form>"

/***/ }),
/* 451 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Settings' | translate }}</h1>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <form class=\"app-form\" (ngSubmit)=\"submit()\" #settingsForm=\"ngForm\">\n\n    <div *ngFor=\"let setting of settings\">\n\n      <div [ngSwitch]=\"setting.type\">\n\n        <div *ngSwitchCase=\"'text'\">\n          <label>{{setting.label | translate }}</label>\n          <input type=\"text\" id=\"{{setting.id}}\" name=\"{{setting.id}}\" [(ngModel)]=\"setting.value\">\n        </div>\n\n        <div *ngSwitchCase=\"'color'\">\n          <label>{{setting.label | translate }}</label>\n          <input type=\"color\" id=\"{{setting.id}}\" name=\"{{setting.id}}\" [(ngModel)]=\"setting.value\">\n        </div>\n\n        <div *ngSwitchCase=\"'image'\">\n          <label>{{setting.label | translate }} <a (click)=\"showSelect(setting)\">{{ 'Select' | translate }}</a></label>\n          <input type=\"text\" id=\"{{setting.id}}\" name=\"{{setting.id}}\" [(ngModel)]=\"setting.value\">\n        </div>\n\n        <div *ngSwitchCase=\"'select'\">\n          <label>{{setting.label | translate }}</label>\n          <select id=\"{{setting.id}}\" name=\"{{setting.id}}\" [(ngModel)]=\"setting.value\">\n            <option *ngFor=\"let option of setting.options\" [value]=\"option\">{{option}}</option>\n          </select>\n        </div>\n\n      </div>\n\n      <small>{{setting.description | translate }}</small>\n\n    </div>\n\n\n    <div class=\"actions\">\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</section>\n\n\n<respond-select-file [visible]=\"selectVisible\" (onCancel)=\"reset($event)\"  (onSelect)=\"select($event)\"></respond-select-file>\n<respond-drawer active=\"settings\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>"

/***/ }),
/* 452 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Code' | translate }}</h2>\n\n    <label>{{ 'Type' | translate }}</label>\n    <select id=\"hashedit-add-code-type\"\n      [(ngModel)]=\"model.type\"\n      (change)=\"updateUrl($event.target.value)\"\n      name=\"type\">\n      <option value=\"template\">{{ 'Template' | translate }}</option>\n      <option value=\"stylesheet\">CSS</option>\n      <option value=\"script\">JS</option>\n      <option value=\"plugin\">{{ 'Plugin' | translate }}</option>\n    </select>\n\n    <label>{{ 'Name' | translate }}</label>\n    <input id=\"hashedit-add-code-name\" type=\"text\" maxlength=\"128\" placeholder=\"new-file\" required\n      [(ngModel)]=\"model.name\"\n      name=\"url\">\n\n    <div class=\"or\">{{ 'Or' | translate }}</div>\n\n    <respond-dropzone [url]=\"uploadUrl\" (onAdd)=\"uploaded($event)\"></respond-dropzone>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Code' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 453 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Component' | translate }}</h2>\n\n    <label>{{ 'URL' | translate }}</label>\n    <input id=\"hashedit-add-component-url\" type=\"text\" maxlength=\"128\" placeholder=\"new-component\" required\n      [(ngModel)]=\"model.url\"\n      name=\"url\">\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Component' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 454 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Component' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.title}}</h3>\n      <small>/{{model.url}}</small>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove Component' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 455 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"app-drawer\" [class.visible]=\"visible === true\">\n\n  <ul>\n    <li class=\"app-drawer-title\"><span>{{ 'Manage your Site' | translate }}</span></li>\n    <li [class.active]=\"active === 'pages'\"><a [routerLink]=\"['/pages']\">{{ 'Pages' | translate }}</a></li>\n    <li [class.active]=\"active === 'components'\"><a [routerLink]=\"['/components']\">{{ 'Components' | translate }}</a></li>\n    <li [class.active]=\"active === 'menus'\"><a [routerLink]=\"['/menus']\">{{ 'Menus' | translate }}</a></li>\n    <li [class.active]=\"active === 'galleries'\"><a [routerLink]=\"['/galleries']\">{{ 'Galleries' | translate }}</a></li>\n    <li [class.active]=\"active === 'forms'\"><a [routerLink]=\"['/forms']\">{{ 'Forms' | translate }}</a></li>\n    <li [class.active]=\"active === 'submissions'\"><a [routerLink]=\"['/submissions']\">{{ 'Submissions' | translate }}</a></li>\n    <li [class.active]=\"active === 'plugins'\"><a [routerLink]=\"['/plugins']\">{{ 'Plugins' | translate }}</a></li>\n    <li [class.active]=\"active === 'files'\"><a [routerLink]=\"['/files']\">{{ 'Files' | translate }}</a></li>\n    <li [class.active]=\"active === 'users'\"><a [routerLink]=\"['/users']\">{{ 'Users' | translate }}</a></li>\n    <li [class.active]=\"active === 'settings'\"><a [routerLink]=\"['/settings']\">{{ 'Settings' | translate }}</a></li>\n    <li [class.active]=\"active === 'code'\"><a (click)=\"viewCode()\">{{ 'Code' | translate }}</a></li>\n    <li [class.active]=\"active === 'advanced'\"><a [routerLink]=\"['/advanced']\">{{ 'Advanced' | translate }}</a></li>\n    <li><a [href]=\"siteUrl\" target=\"_blank\">{{ 'View Site' | translate }}</a></li>\n    <li><a (click)=\"signOut()\">{{ 'Sign Out' | translate }}</a></li>\n  </ul>\n\n  <a class=\"app-status status-trial\" *ngIf=\"status == 'Trial'\" (click)=\"checkout()\">\n    <h3>{{ 'Status: Trial' | translate }}</h3>\n    <p>{{ daysRemaining }} <span>{{ 'days remaining' | translate }}</span></p>\n    <i class=\"material-icons\">keyboard_arrow_right</i>\n  </a>\n\n  <a class=\"app-status status-expired\" *ngIf=\"status == 'Expired'\" (click)=\"checkout()\">\n    <h3>{{ 'Status: Expired' | translate }}</h3>\n    <p>{{ 'Activate now' | translate }}</p>\n    <i class=\"material-icons\">keyboard_arrow_right</i>\n  </a>\n\n\n</nav>"

/***/ }),
/* 456 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove File' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.name}}</h3>\n      <small>/file/{{model.name}}</small>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove File' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 457 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <h2>{{ 'Select File' | translate }}</h2>\n\n  <respond-dropzone (onAdd)=\"list($event)\"></respond-dropzone>\n\n  <div id=\"files-list\" class=\"app-modal-list\">\n    <div class=\"app-modal-list-item\" *ngFor=\"let file of files\" (click)=\"select(file)\" [class.image]=\"file.thumb !== ''\">\n      <h2><span class=\"primary\">{{ file.name }}</span></h2>\n      <img *ngIf=\"file.thumb !== ''\" class=\"image\" src=\"{{file.thumb}}\">\n      <small>/files/{{ file.name }}</small>\n    </div>\n  </div>\n\n  <div class=\"actions\">\n    <a (click)=\"hide()\" class=\"primary\">{{ 'Cancel' | translate }}</a>\n  </div>\n\n</div>"

/***/ }),
/* 458 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Form Field' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Label' | translate }}</label>\n      <input id=\"hashedit-add-form-field-label\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.label\"\n        name=\"label\">\n\n      <label>{{ 'Type' | translate }}</label>\n      <select id=\"hashedit-add-form-field-type\"\n        [(ngModel)]=\"model.type\"\n        name=\"isNested\">\n        <option value=\"text\">{{ 'Text' | translate }}</option>\n        <option value=\"email\">{{ 'Email' | translate }}</option>\n        <option value=\"number\">{{ 'Number' | translate }}</option>\n        <option value=\"url\">{{ 'URL' | translate }}</option>\n        <option value=\"tel\">{{ 'Telephone' | translate }}</option>\n        <option value=\"date\">{{ 'Date' | translate }}</option>\n        <option value=\"time\">{{ 'Time' | translate }}</option>\n        <option value=\"textarea\">{{ 'Textarea' | translate }}</option>\n        <option value=\"select\">{{ 'Select List' | translate }}</option>\n        <option value=\"radiolist\">{{ 'Radio List' | translate }}</option>\n        <option value=\"checklist\">{{ 'Checkbox List' | translate }}</option>\n      </select>\n\n      <label>{{ 'Required?' | translate }}</label>\n      <select id=\"hashedit-add-form-field-required\"\n        [(ngModel)]=\"model.required\"\n        name=\"required\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'Options' | translate }}</label>\n      <input id=\"hashedit-add-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.options\"\n        name=\"options\">\n\n      <label>{{ 'Helper Text' | translate }}</label>\n      <input id=\"hashedit-add-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.helperText\"\n        name=\"helperText\">\n\n      <label>{{ 'Placeholder' | translate }}</label>\n      <input id=\"hashedit-add-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.placeholder\"\n        name=\"placeholder\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-add-form-field-cssclass\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Form Field' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 459 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Form' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Name' | translate }}</label>\n      <input id=\"hashedit-add-form-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.name\"\n        name=\"name\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-add-form-cssclass\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n      <label>{{ 'Validate with reCAPTCHA' | translate }}</label>\n      <select id=\"hashedit-add-form-validate\"\n        [(ngModel)]=\"model.validate\"\n        name=\"required\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'Success Message' | translate }}</label>\n      <input id=\"hashedit-add-form-success\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.success\"\n        name=\"success\">\n\n      <label>{{ 'Error Message' | translate }}</label>\n      <input id=\"hashedit-add-form-error\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.error\"\n        name=\"error\">\n\n      <label>{{ 'reCAPTCHA Error Message' | translate }}</label>\n      <input id=\"hashedit-add-form-recaptcha-error\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.recaptchaError\"\n        name=\"recaptchaError\">\n\n      <label>{{ 'Email Notifications' | translate }}</label>\n      <input id=\"hashedit-add-form-notify\" type=\"text\" maxlength=\"2048\" placeholder=\"\"\n        [(ngModel)]=\"model.notify\"\n        name=\"recipient\">\n      <small>{{ 'Separate multiples with commas.  If an email is not specified, an email will be sent to the default site email.' | translate }}</small>\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Form' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 460 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Edit Form Field' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Label' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-label\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.label\"\n        name=\"label\">\n\n      <label>{{ 'Type' | translate }}</label>\n      <select id=\"hashedit-edit-form-field-type\"\n        [(ngModel)]=\"model.type\"\n        name=\"isNested\">\n        <option value=\"text\">{{ 'Text' | translate }}</option>\n        <option value=\"email\">{{ 'Email' | translate }}</option>\n        <option value=\"number\">{{ 'Number' | translate }}</option>\n        <option value=\"url\">{{ 'URL' | translate }}</option>\n        <option value=\"tel\">{{ 'Telephone' | translate }}</option>\n        <option value=\"date\">{{ 'Date' | translate }}</option>\n        <option value=\"time\">{{ 'Time' | translate }}</option>\n        <option value=\"textarea\">{{ 'Textarea' | translate }}</option>\n        <option value=\"select\">{{ 'Select List' | translate }}</option>\n        <option value=\"radiolist\">{{ 'Radio List' | translate }}</option>\n        <option value=\"checklist\">{{ 'Checkbox List' | translate }}</option>\n      </select>\n\n      <label>{{ 'Required?' | translate }}</label>\n      <select id=\"hashedit-edit-form-field-required\"\n        [(ngModel)]=\"model.required\"\n        name=\"required\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'Options' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.options\"\n        name=\"options\">\n\n      <label>{{ 'Helper Text' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.helperText\"\n        name=\"helperText\">\n\n      <label>{{ 'Placeholder' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.placeholder\"\n        name=\"placeholder\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-cssclass\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 461 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #editForm=\"ngForm\">\n\n    <h2>{{ 'Edit Form' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Name' | translate }}</label>\n      <input id=\"hashedit-edit-form-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.name\"\n        name=\"name\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-edit-form-cssclass\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n      <label>{{ 'Validate with reCAPTCHA' | translate }}</label>\n      <select id=\"hashedit-edit-form-validate\"\n        [(ngModel)]=\"model.validate\"\n        name=\"required\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'Success Message' | translate }}</label>\n      <input id=\"hashedit-edit-form-success\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.success\"\n        name=\"success\">\n\n      <label>{{ 'Error Message' | translate }}</label>\n      <input id=\"hashedit-edit-form-error\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.error\"\n        name=\"error\">\n\n      <label>{{ 'reCAPTCHA Error Message' | translate }}</label>\n      <input id=\"hashedit-edit-form-recaptcha-error\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.recaptchaError\"\n        name=\"recaptchaError\">\n\n      <label>{{ 'Email Notifications' | translate }}</label>\n      <input id=\"hashedit-edit-form-notify\" type=\"text\" maxlength=\"2048\" placeholder=\"\"\n        [(ngModel)]=\"model.notify\"\n        name=\"notify\">\n      <small>{{ 'Separate multiples with commas.  If an email is not specified, an email will be sent to the default site email.' | translate }}</small>\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 462 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Form Field' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.label}}</h3>\n      <p>{{model.type}}</p>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 463 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Form' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.name}}</h3>\n      <p>{{model.id}}</p>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 464 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Gallery' | translate }}</h2>\n\n    <label>{{ 'Name' | translate }}</label>\n    <input id=\"hashedit-add-gallery-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n      [(ngModel)]=\"model.name\"\n      name=\"name\">\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Gallery' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 465 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Edit Caption' | translate }}</h2>\n\n    <label>{{ 'Caption' | translate }}</label>\n    <input id=\"hashedit-edit-caption\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n      [(ngModel)]=\"model.caption\"\n      name=\"label\">\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 466 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #editForm=\"ngForm\">\n\n    <h2>{{ 'Edit Gallery' | translate }}</h2>\n\n    <label>{{ 'Name' | translate }}</label>\n    <input id=\"hashedit-edit-gallery-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n      [(ngModel)]=\"model.name\"\n      name=\"name\">\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 467 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Image' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.name}}</h3>\n      <small>{{model.url}}</small>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button class=\"primary\" type=\"submit\">{{ 'Remove' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 468 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Gallery' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.name}}</h3>\n      <p>{{model.id}}</p>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 469 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal app-card\" [class.visible]=\"visible === true\" [class.flip]=\"flip === true\">\n\n  <div class=\"app-card-front\">\n\n    <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n      <h2>{{ 'Add Menu Item' | translate }}</h2>\n\n      <label>{{ 'Text (or HTML)' | translate }}</label>\n      <input id=\"hashedit-add-menu-item-html\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.html\"\n        name=\"html\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-add-menu-item-css-class\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n      <label>{{ 'Is Nested?' | translate }}</label>\n      <select id=\"hashedit-add-menu-item-is-nested\"\n        [(ngModel)]=\"model.isNested\"\n        name=\"isNested\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'URL' | translate }} <a class=\"toggle-select-url\" (click)=\"flipCard()\">{{ 'Select URL' | translate }}</a></label>\n      <input id=\"hashedit-add-menu-item-url\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.url\"\n        name=\"url\">\n\n      <label>{{ 'Target' | translate }}</label>\n      <input id=\"hashedit-add-menu-item-target\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.target\"\n        name=\"target\">\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Add' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n  <!-- /.app-card-front -->\n\n  <div class=\"app-card-back\">\n\n    <h2>{{ 'Select URL' | translate }}</h2>\n\n    <div id=\"pages-list\" class=\"app-modal-list\">\n      <div class=\"app-list-item\" *ngFor=\"let page of pages\" (click)=\"setUrl(page)\">{{page.url}}</div>\n    </div>\n\n    <div class=\"actions\">\n      <a class=\"primary toggle-select-url\" data-i18n (click)=\"flipCard()\">Cancel</a>\n    </div>\n\n  </div>\n  <!-- /.app-card-back -->\n\n</div>"

/***/ }),
/* 470 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Menu' | translate }}</h2>\n\n    <label>{{ 'Name' | translate }}</label>\n    <input id=\"hashedit-add-menu-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n      [(ngModel)]=\"model.name\"\n      name=\"name\">\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 471 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal app-card\" [class.visible]=\"visible === true\" [class.flip]=\"flip === true\">\n\n  <div class=\"app-card-front\">\n\n    <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n      <h2>{{ 'Edit Menu Item' | translate }}</h2>\n\n      <label>{{ 'Text (or HTML)' | translate }}</label>\n      <input id=\"hashedit-edit-menu-item-html\" type=\"text\" required\n        [(ngModel)]=\"model.html\"\n        name=\"html\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-edit-menu-item-css-class\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n      <label>{{ 'Is Nested?' | translate }}</label>\n      <select id=\"hashedit-edit-menu-item-is-nested\"\n        [(ngModel)]=\"model.isNested\"\n        name=\"isNested\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'URL' | translate }} <a class=\"toggle-select-url\" (click)=\"flipCard()\">{{ 'Select URL' | translate }}</a></label>\n      <input id=\"hashedit-add-menu-item-url\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.url\"\n        name=\"url\">\n\n      <label>{{ 'Target' | translate }}</label>\n      <input id=\"hashedit-add-menu-item-target\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.target\"\n        name=\"target\">\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Update' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n  <!-- /.app-card-front -->\n\n  <div class=\"app-card-back\">\n\n    <h2>{{ 'Select URL' | translate }}</h2>\n\n    <div id=\"pages-list\" class=\"app-modal-list\">\n      <div class=\"app-list-item\" *ngFor=\"let page of pages\" (click)=\"setUrl(page)\">{{page.url}}</div>\n    </div>\n\n    <div class=\"actions\">\n      <a class=\"primary toggle-select-url\" (click)=\"flipCard()\">{{ 'Cancel' | translate }}</a>\n    </div>\n\n  </div>\n  <!-- /.app-card-back -->\n\n</div>"

/***/ }),
/* 472 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #editForm=\"ngForm\">\n\n    <h2>{{ 'Edit Menu' | translate }}</h2>\n\n    <label>{{ 'Name' | translate }}</label>\n    <input id=\"hashedit-edit-menu-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n      [(ngModel)]=\"model.name\"\n      name=\"name\">\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 473 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Menu Item' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.html}}</h3>\n      <small>{{model.url}}</small>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 474 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Menu' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.name}}</h3>\n      <p>{{model.id}}</p>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 475 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Page' | translate }}</h2>\n\n    <label>{{ 'Path' | translate }}</label>\n    <select id=\"hashedit-add-page-path\"\n      [(ngModel)]=\"model.path\"\n      name=\"path\">\n      <option *ngFor=\"let route of routes\" [value]=\"route\">{{route}}</option>\n    </select>\n\n    <label>{{ 'URL' | translate }}</label>\n    <input id=\"hashedit-add-page-url\" type=\"text\" maxlength=\"128\" placeholder=\"new-page\" required\n      [(ngModel)]=\"model.url\"\n      name=\"url\">\n\n    <label>{{ 'Title' | translate }}</label>\n    <input id=\"hashedit-add-page-title\" type=\"text\" maxlength=\"128\" required\n      [(ngModel)]=\"model.title\"\n      name=\"title\">\n\n    <label>{{ 'Description' | translate }}</label>\n    <input id=\"hashedit-add-page-desc\" type=\"text\" maxlength=\"128\"\n      [(ngModel)]=\"model.description\"\n      name=\"description\">\n\n    <label>{{ 'Template' | translate }}</label>\n    <select id=\"hashedit-add-page-template\"\n      [(ngModel)]=\"model.template\"\n      name=\"template\">\n      <option *ngFor=\"let template of templates\" [value]=\"template\">{{template}}</option>\n    </select>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\" [disabled]=\"processing\">{{ 'Add Page' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 476 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #editForm=\"ngForm\">\n\n    <h2>{{ 'Page Settings' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Title' | translate }}</label>\n      <input id=\"hashedit-page-settings-title\" type=\"text\" maxlength=\"128\" required\n        [(ngModel)]=\"model.title\"\n        name=\"title\">\n\n      <label>{{ 'Description' | translate }}</label>\n      <input id=\"hashedit-page-settings-description\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.description\"\n        name=\"description\">\n\n      <label>{{ 'Keywords' | translate }}</label>\n      <input id=\"hashedit-page-settings-keywords\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.keywords\"\n        name=\"keywords\">\n\n      <label>{{ 'Tags' | translate }}</label>\n      <input id=\"hashedit-page-settings-tags\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.tags\"\n        name=\"tags\">\n        \n      <label>{{ 'Location' | translate }}</label>\n      <input id=\"hashedit-page-settings-location\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.location\"\n        name=\"location\">\n        \n      <label>{{ 'Photo' | translate }} <a (click)=\"showSelect()\">{{ 'Select' | translate }}</a></label>\n      <input id=\"hashedit-page-settings-photo\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.photo\"\n        name=\"photo\">\n\n      <label>{{ 'Custom Header' | translate }}</label>\n      <textarea id=\"hashedit-page-settings-custom-header\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.customHeader\"\n        name=\"customHeader\"></textarea>\n      <small>{{ 'Custom HTML content to be put in the header (e.g. meta tags, stylesheets)' | translate }}</small>\n\n      <label>{{ 'Custom Footer' | translate }}</label>\n      <textarea id=\"hashedit-page-settings-custom-footer\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.customFooter\"\n        name=\"customFooter\"></textarea>\n      <small>{{ 'Custom HTML content to be put in the footer (e.g. javascript)' | translate }}</small>\n\n      <label>{{ 'Callout' | translate }}</label>\n      <input id=\"hashedit-page-settings-callout\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.callout\"\n        name=\"callout\">\n\n      <label>{{ 'Language' | translate }}</label>\n      <select id=\"hashedit-page-settings-language\"\n        [(ngModel)]=\"model.language\"\n        name=\"language\">\n        <option value=\"en\">English (en)</option>\n        <option value=\"es\">Español (es)</option>\n        <option value=\"fr\">Français (fr)</option>\n        <option value=\"gr\">Ελληνικά (gr)</option>\n        <option value=\"ru\">Русский (ru)</option>\n      </select>\n\n      <label>{{ 'Direction' | translate }}</label>\n      <select id=\"hashedit-page-settings-direction\"\n        [(ngModel)]=\"model.direction\"\n        name=\"direction\">\n        <option value=\"ltr\">{{ 'Left-to-Right' | translate }}</option>\n        <option value=\"rtl\">{{ 'Right-to-Left' | translate }}</option>\n      </select>\n\n      <label>{{ 'Template' | translate }}</label>\n      <select id=\"hashedit-add-page-template\"\n        [(ngModel)]=\"model.template\"\n        name=\"template\">\n        <option *ngFor=\"let template of templates\" [value]=\"template\">{{template}}</option>\n      </select>\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n\n<respond-select-file [visible]=\"selectVisible\" (onCancel)=\"reset($event)\"  (onSelect)=\"select($event)\"></respond-select-file>"

/***/ }),
/* 477 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Page' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.title}}</h3>\n      <small>/{{model.url}}</small>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove Page' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 478 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Plugin' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.title}}</h3>\n      <small>{{model.selector}}</small>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove Plugin' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 479 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Submission' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.name}}</h3>\n      <small>{{model.formId}}</small>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove Submission' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 480 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <h2>{{ 'View Submission' | translate }}</h2>\n\n  <table class=\"details\">\n\n    <tr>\n      <td>{{ 'Date' | translate }}</td>\n      <td>{{ model.date }}</td>\n    </tr>\n    <tr>\n      <td>{{ 'Form' | translate }}</td>\n      <td>{{ model.formId }}</td>\n    </tr>\n    <tr *ngFor=\"let field of model.fields\">\n      <td>{{ field.id  }}</td>\n      <td>{{ field.value }}</td>\n    </tr>\n\n  </table>\n\n  <div class=\"actions\">\n    <a (click)=\"hide()\" class=\"primary\">{{ 'Done' | translate }}</a>\n  </div>\n\n</div>"

/***/ }),
/* 481 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add User' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Email' | translate }}</label>\n      <input id=\"hashedit-add-user-email\" type=\"text\" maxlength=\"128\" required\n        [(ngModel)]=\"model.email\"\n        name=\"email\">\n\n      <label>{{ 'First Name' | translate }}</label>\n      <input id=\"hashedit-add-user-first-name\" type=\"text\" maxlength=\"128\" required\n        [(ngModel)]=\"model.firstName\"\n        name=\"firstName\">\n\n      <label>{{ 'Last Name' | translate }}</label>\n      <input id=\"hashedit-add-user-last-name\" type=\"text\" maxlength=\"128\" required\n        [(ngModel)]=\"model.lastName\"\n        name=\"lastName\">\n\n      <label>{{ 'Password' | translate }}</label>\n      <input id=\"hashedit-add-user-password\" type=\"password\" maxlength=\"128\" required\n        [(ngModel)]=\"model.password\"\n        name=\"password\">\n\n      <label>{{ 'Retype Password' | translate }}</label>\n      <input id=\"hashedit-add-user-retype\" type=\"password\" maxlength=\"128\" required\n        [(ngModel)]=\"model.retype\"\n        name=\"retype\">\n\n      <label>{{ 'Language' | translate }}</label>\n      <select id=\"hashedit-add-user-language\"\n        [(ngModel)]=\"model.language\"\n        name=\"language\">\n        <option *ngFor=\"let language of languages\" [value]=\"language.code\">{{language.text}}</option>\n      </select>\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add User' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 482 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Edit User' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Email' | translate }}</label>\n      <input id=\"hashedit-edit-user-email\" type=\"text\" maxlength=\"128\" required\n        [(ngModel)]=\"model.email\"\n        name=\"email\" disabled=\"disabled\">\n\n      <label>{{ 'First Name' | translate }}</label>\n      <input id=\"hashedit-edit-user-first-name\" type=\"text\" maxlength=\"128\" required\n        [(ngModel)]=\"model.firstName\"\n        name=\"firstName\">\n\n      <label>{{ 'Last Name' | translate }}</label>\n      <input id=\"hashedit-edit-user-last-name\" type=\"text\" maxlength=\"128\" required\n        [(ngModel)]=\"model.lastName\"\n        name=\"lastName\">\n\n      <label>{{ 'Password' | translate }}</label>\n      <input id=\"hashedit-edit-user-password\" type=\"password\" maxlength=\"128\" required\n        [(ngModel)]=\"model.password\"\n        name=\"password\">\n\n      <label>{{ 'Retype Password' | translate }}</label>\n      <input id=\"hashedit-edit-user-retype\" type=\"password\" maxlength=\"128\" required\n        [(ngModel)]=\"model.retype\"\n        name=\"retype\">\n\n      <label>{{ 'Language' | translate }}</label>\n      <select id=\"hashedit-edit-user-language\"\n        [(ngModel)]=\"model.language\"\n        name=\"language\">\n        <option *ngFor=\"let language of languages\" [value]=\"language.code\">{{language.text}}</option>\n      </select>\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 483 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove User' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}:</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.firstName}} {{model.lastName}}</h3>\n      <small>{{model.email}}</small>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove User' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),
/* 484 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Submissions' | translate }}</h1>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <div id=\"submissions-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let submission of submissions\" (click)=\"setActive(submission)\" [class.selected]=\"submission === selectedSubmission\">\n      <h2><span class=\"primary\">{{ submission.name }}</span><span class=\"secondary\">{{ submission.date | timeAgo }}</span></h2>\n      <small>{{ submission.formId }}</small>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(submission)\">{{ 'Remove Submission' | translate }}</a>\n          <a (click)=\"showView(submission)\" class=\"primary\">{{ 'View Submission' | translate }}</a>\n      </div>\n    </div>\n  </div>\n  \n  <p class=\"no-list-items\" *ngIf=\"submissions.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-view-submission [visible]=\"viewVisible\" [submission]=\"submission\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-view-submission>\n<respond-remove-submission [visible]=\"removeVisible\" [submission]=\"submission\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-submission>\n\n<respond-drawer active=\"submissions\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>"

/***/ }),
/* 485 */
/***/ (function(module, exports) {

module.exports = "<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Users' | translate }}</h1>\n\n    <button class=\"app-add\" (click)=\"showAdd()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g></svg></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <div id=\"users-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let user of users\" (click)=\"setActive(user)\" [class.selected]=\"user === selectedUser\">\n      <h2><span class=\"primary\">{{ user.firstName }} {{ user.lastName }}</span></h2>\n      <small>{{ user.email }}</small>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(user)\">{{ 'Remove' | translate }}</a>\n          <a (click)=\"showEdit(user)\" class=\"primary\">{{ 'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n  \n  <p class=\"no-list-items\" *ngIf=\"users.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-add-user [visible]=\"addVisible\" (onCancel)=\"reset($event)\" (onAdd)=\"list($event)\" (onError)=\"failure($event)\"></respond-add-user>\n\n<respond-edit-user [visible]=\"editVisible\" [user]=\"user\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-edit-user>\n\n<respond-remove-user [visible]=\"removeVisible\" [user]=\"user\" (onCancel)=\"reset($event)\" (onUpdate)=\"list($event)\" (onError)=\"failure($event)\"></respond-remove-user>\n\n<respond-drawer active=\"users\" [visible]=\"drawerVisible\" (onHide)=\"reset($event)\"></respond-drawer>"

/***/ }),
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(198);


/***/ })
]),[523]);
//# sourceMappingURL=main.bundle.js.map