webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Account' | translate }}</h1>\n</menu>\n\n<section class=\"app-main\">\n\n  <table class=\"app-table\">\n    <tbody>\n      <tr>\n        <th>{{ 'Plan' | translate }}</th>\n        <td>{{ plan }} <a class=\"app-table-cell-action\" (click)=\"showUnsubscribe()\" *ngIf=\"hasAccount == true\">{{ 'Unsubscribe' | translate }}</a></td>\n      </tr>\n      <tr>\n        <th>{{ 'Amount' | translate }}</th>\n        <td>{{ amountDisplay }}</td>\n      </tr>\n      <tr>\n        <th>{{ 'Interval' | translate }}</th>\n        <td>{{ interval }}</td>\n      </tr>\n    </tbody>\n  </table>\n\n</section>\n\n<respond-unsubscribe [visible]=\"unsubscribeVisible\" (onCancel)=\"reset()\" (onUpdate)=\"unsubscribe()\" (onError)=\"failure($event)\"></respond-unsubscribe>\n\n<respond-drawer active=\"account\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = /** @class */ (function () {
    function AccountComponent(_siteService, _router, _appService) {
        this._siteService = _siteService;
        this._router = _router;
        this._appService = _appService;
        this.addVisible = false;
        this.removeVisible = false;
        this.drawerVisible = false;
        this.settingsVisible = false;
        this.plan = "";
        this.amountDisplay = "";
        this.currency = "";
        this.interval = "";
        this.unsubscribeVisible = false;
    }
    /**
     * Init pages
     *
     */
    AccountComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('respond.siteId');
        this.hasAccount = (localStorage.getItem('site_has_account') == 'true'); // convert to boolean
        this.settingsVisible = false;
        this.drawerVisible = false;
        this.unsubscribeVisible = false;
        this.retrieve();
    };
    /**
     * Retrieves the subscription
     */
    AccountComponent.prototype.retrieve = function () {
        var _this = this;
        this.reset();
        this._siteService.retrieveSubscription()
            .subscribe(function (data) {
            _this.subscription = data;
            _this.plan = data.name;
            _this.amount = data.amount / 100;
            _this.currency = data.currency.toUpperCase();
            _this.interval = data.interval;
            if (_this.currency.toUpperCase() == 'USD') {
                _this.amountDisplay = "$" + _this.amount;
            }
            else {
                _this.amountDisplay = _this.amount + " " + _this.currency;
            }
            console.log(data);
        }, function (error) { _this.failure(error); });
    };
    /**
     * Shows the unsubscribe modal
     */
    AccountComponent.prototype.showUnsubscribe = function () {
        this.unsubscribeVisible = true;
    };
    /**
     * Unsubscribe from the subscription
     */
    AccountComponent.prototype.unsubscribe = function () {
        this.plan = "Unsubscribed";
        this.amountDisplay = "";
        this.interval = "";
        this.hasAccount = false;
        this.unsubscribeVisible = false;
    };
    /**
     * Resets an modal booleans
     */
    AccountComponent.prototype.reset = function () {
        this.drawerVisible = false;
        this.unsubscribeVisible = false;
    };
    /**
     * Shows the drawer
     */
    AccountComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * handles error
     */
    AccountComponent.prototype.failure = function (obj) {
        console.log(obj);
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-account',
            template: __webpack_require__("../../../../../src/account/account.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/advanced/advanced.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Advanced' | translate }}</h1>\n</menu>\n\n<section class=\"app-main\">\n\n  <div id=\"developer-list\" class=\"app-list\">\n    <div class=\"app-list-item\" (mouseenter)=\"setActive('plugins')\" (click)=\"setActive('plugins')\" [class.selected]=\"selectedOption === 'plugins'\">\n      <h2><span class=\"primary\">{{ 'Re-publish Plugins' | translate }}</span></h2>\n      <p>{{ 'When you are developing a plugin, you can use this function to republish the pages so the plugin update takes effect.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"reload()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- plugins -->\n\n    <div class=\"app-list-item\" (mouseenter)=\"setActive('reindex')\" (click)=\"setActive('reindex')\" [class.selected]=\"selectedOption === 'reindex'\">\n      <h2><span class=\"primary\">{{ 'Re-index Pages' | translate }}</span></h2>\n      <p>{{ 'Republish the sitemap and pages index.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"reindex()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- sitemap -->\n\n    <div class=\"app-list-item\" (mouseenter)=\"setActive('sitemap')\" (click)=\"setActive('sitemap')\" [class.selected]=\"selectedOption === 'sitemap'\">\n      <h2><span class=\"primary\">{{ 'Re-publish Sitemap' | translate }}</span></h2>\n      <p>{{ 'Republish the sitemap when you make changes outside of the application.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"sitemap()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- sitemap -->\n\n    <!-- \n    <div class=\"app-list-item\" (click)=\"setActive('migrate')\" [class.selected]=\"selectedOption === 'migrate'\">\n      <h2><span class=\"primary\">{{ 'Migrate Respond 5 site' | translate }}</span></h2>\n      <p>{{ 'Updates HTML from Respond 5 so that it consistent with Respond 6' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"migrate()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    migrate -->\n\n    <div class=\"app-list-item\" (mouseenter)=\"setActive('templates')\" (click)=\"setActive('templates')\" [class.selected]=\"selectedOption === 'templates'\">\n      <h2><span class=\"primary\">{{ 'Republish Templates' | translate }}</span></h2>\n      <p>{{ 'Republishes all templates and pushes the updates to pages that inherit from those templates.  Warning: Will overwrite any custom HTML outside of the [role=main] block with HTML from the template.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"templates()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- republish template -->\n\n    <div class=\"app-list-item\" (mouseenter)=\"setActive('update-plugins')\" (click)=\"setActive('update-plugins')\" [class.selected]=\"selectedOption === 'update-plugins'\">\n      <h2><span class=\"primary\">{{ 'Update Plugins' | translate }}</span></h2>\n      <p>{{ 'Updates the plugins for your site and re-syncs them with the latest version from the theme. Warning: will overwrite any custom updates you made to plugins built into the theme.' | translate }}</p>\n      <div class=\"app-list-actions\">\n          <a class=\"primary\" (click)=\"update()\">{{'Execute' | translate }}</a>\n      </div>\n    </div>\n    <!-- republish template -->\n\n  </div>\n\n</section>\n\n<respond-drawer active=\"advanced\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/advanced/advanced.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdvancedComponent = /** @class */ (function () {
    function AdvancedComponent(_siteService, _router, _appService) {
        this._siteService = _siteService;
        this._router = _router;
        this._appService = _appService;
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
        var _this = this;
        this._siteService.reload()
            .subscribe(function (data) {
            _this._appService.showToast('success', null);
        }, function (error) {
            _this._appService.showToast('failure', null);
        });
    };
    /**
     * Reindex pages
     */
    AdvancedComponent.prototype.reindex = function () {
        var _this = this;
        this._siteService.reindex()
            .subscribe(function (data) {
            _this._appService.showToast('success', null);
        }, function (error) {
            _this._appService.showToast('failure', null);
        });
    };
    /**
     * Republish site
     */
    AdvancedComponent.prototype.sitemap = function () {
        var _this = this;
        this._siteService.sitemap()
            .subscribe(function (data) {
            _this._appService.showToast('success', null);
        }, function (error) {
            _this._appService.showToast('failure', null);
        });
    };
    /**
     * Migrate R5 site
     */
    AdvancedComponent.prototype.migrate = function () {
        var _this = this;
        this._siteService.migrate()
            .subscribe(function (data) {
            _this._appService.showToast('success', null);
        }, function (error) {
            _this._appService.showToast('failure', null);
        });
    };
    /**
     * Republish Templates
     */
    AdvancedComponent.prototype.templates = function () {
        var _this = this;
        this._siteService.republishTemplates()
            .subscribe(function (data) {
            _this._appService.showToast('success', null);
        }, function (error) {
            _this._appService.showToast('failure', null);
        });
    };
    /**
     * Updates Plugins (re-syncs them with the latest version from the theme)
     */
    AdvancedComponent.prototype.update = function () {
        var _this = this;
        this._siteService.updatePlugins()
            .subscribe(function (data) {
            _this._appService.showToast('success', null);
        }, function (error) {
            _this._appService.showToast('failure', null);
        });
    };
    /**
     * handles error
     */
    AdvancedComponent.prototype.failure = function (obj) {
        console.log(obj);
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    AdvancedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-advanced',
            template: __webpack_require__("../../../../../src/advanced/advanced.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], AdvancedComponent);
    return AdvancedComponent;
}());



/***/ }),

/***/ "../../../../../src/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-app',
            template: __webpack_require__("../../../../../src/app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_drawer_drawer_component__ = __webpack_require__("../../../../../src/shared/components/drawer/drawer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_subscribe_subscribe_component__ = __webpack_require__("../../../../../src/shared/components/subscribe/subscribe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_dropzone_dropzone_component__ = __webpack_require__("../../../../../src/shared/components/dropzone/dropzone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forgot_forgot_component__ = __webpack_require__("../../../../../src/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reset_reset_component__ = __webpack_require__("../../../../../src/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_create_component__ = __webpack_require__("../../../../../src/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__advanced_advanced_component__ = __webpack_require__("../../../../../src/advanced/advanced.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__code_code_component__ = __webpack_require__("../../../../../src/code/code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_components_code_add_code_add_code_component__ = __webpack_require__("../../../../../src/shared/components/code/add-code/add-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_account_component__ = __webpack_require__("../../../../../src/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_components_account_unsubscribe_unsubscribe_component__ = __webpack_require__("../../../../../src/shared/components/account/unsubscribe/unsubscribe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__edit_edit_component__ = __webpack_require__("../../../../../src/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__files_files_component__ = __webpack_require__("../../../../../src/files/files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_components_files_remove_file_remove_file_component__ = __webpack_require__("../../../../../src/shared/components/files/remove-file/remove-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_components_files_select_file_select_file_component__ = __webpack_require__("../../../../../src/shared/components/files/select-file/select-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__plugins_plugins_component__ = __webpack_require__("../../../../../src/plugins/plugins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_components_plugins_remove_plugin_remove_plugin_component__ = __webpack_require__("../../../../../src/shared/components/plugins/remove-plugin/remove-plugin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__forms_forms_component__ = __webpack_require__("../../../../../src/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_components_forms_add_form_add_form_component__ = __webpack_require__("../../../../../src/shared/components/forms/add-form/add-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_components_forms_edit_form_edit_form_component__ = __webpack_require__("../../../../../src/shared/components/forms/edit-form/edit-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_components_forms_remove_form_remove_form_component__ = __webpack_require__("../../../../../src/shared/components/forms/remove-form/remove-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_components_forms_add_form_field_add_form_field_component__ = __webpack_require__("../../../../../src/shared/components/forms/add-form-field/add-form-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_components_forms_edit_form_field_edit_form_field_component__ = __webpack_require__("../../../../../src/shared/components/forms/edit-form-field/edit-form-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_components_forms_remove_form_field_remove_form_field_component__ = __webpack_require__("../../../../../src/shared/components/forms/remove-form-field/remove-form-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__galleries_galleries_component__ = __webpack_require__("../../../../../src/galleries/galleries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_components_galleries_add_gallery_add_gallery_component__ = __webpack_require__("../../../../../src/shared/components/galleries/add-gallery/add-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_components_galleries_edit_gallery_edit_gallery_component__ = __webpack_require__("../../../../../src/shared/components/galleries/edit-gallery/edit-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_components_galleries_remove_gallery_remove_gallery_component__ = __webpack_require__("../../../../../src/shared/components/galleries/remove-gallery/remove-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_components_galleries_edit_caption_edit_caption_component__ = __webpack_require__("../../../../../src/shared/components/galleries/edit-caption/edit-caption.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_components_galleries_remove_gallery_image_remove_gallery_image_component__ = __webpack_require__("../../../../../src/shared/components/galleries/remove-gallery-image/remove-gallery-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__menus_menus_component__ = __webpack_require__("../../../../../src/menus/menus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_components_menus_add_menu_add_menu_component__ = __webpack_require__("../../../../../src/shared/components/menus/add-menu/add-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_components_menus_edit_menu_edit_menu_component__ = __webpack_require__("../../../../../src/shared/components/menus/edit-menu/edit-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_components_menus_remove_menu_remove_menu_component__ = __webpack_require__("../../../../../src/shared/components/menus/remove-menu/remove-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_components_menus_add_menu_item_add_menu_item_component__ = __webpack_require__("../../../../../src/shared/components/menus/add-menu-item/add-menu-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_components_menus_edit_menu_item_edit_menu_item_component__ = __webpack_require__("../../../../../src/shared/components/menus/edit-menu-item/edit-menu-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shared_components_menus_remove_menu_item_remove_menu_item_component__ = __webpack_require__("../../../../../src/shared/components/menus/remove-menu-item/remove-menu-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_pages_component__ = __webpack_require__("../../../../../src/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__shared_components_pages_add_page_add_page_component__ = __webpack_require__("../../../../../src/shared/components/pages/add-page/add-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__shared_components_pages_page_settings_page_settings_component__ = __webpack_require__("../../../../../src/shared/components/pages/page-settings/page-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__shared_components_pages_remove_page_remove_page_component__ = __webpack_require__("../../../../../src/shared/components/pages/remove-page/remove-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_components_component__ = __webpack_require__("../../../../../src/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__shared_components_components_add_component_add_component_component__ = __webpack_require__("../../../../../src/shared/components/components/add-component/add-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__shared_components_components_remove_component_remove_component_component__ = __webpack_require__("../../../../../src/shared/components/components/remove-component/remove-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__settings_settings_component__ = __webpack_require__("../../../../../src/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__submissions_submissions_component__ = __webpack_require__("../../../../../src/submissions/submissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__shared_components_submissions_remove_submission_remove_submission_component__ = __webpack_require__("../../../../../src/shared/components/submissions/remove-submission/remove-submission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__shared_components_submissions_view_submission_view_submission_component__ = __webpack_require__("../../../../../src/shared/components/submissions/view-submission/view-submission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__users_users_component__ = __webpack_require__("../../../../../src/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__shared_components_users_add_user_add_user_component__ = __webpack_require__("../../../../../src/shared/components/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__shared_components_users_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/shared/components/users/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__shared_components_users_remove_user_remove_user_component__ = __webpack_require__("../../../../../src/shared/components/users/remove-user/remove-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__app_routes__ = __webpack_require__("../../../../../src/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__shared_pipes_time_ago_pipe__ = __webpack_require__("../../../../../src/shared/pipes/time-ago.pipe.ts");
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




// advanced + code  + account



// account


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
    return new __WEBPACK_IMPORTED_MODULE_62__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "assets/i18n/", ".json");
}
// pipes

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_12__reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_13__create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_components_drawer_drawer_component__["a" /* DrawerComponent */], __WEBPACK_IMPORTED_MODULE_9__shared_components_dropzone_dropzone_component__["a" /* DropzoneComponent */], __WEBPACK_IMPORTED_MODULE_8__shared_components_subscribe_subscribe_component__["a" /* SubscribeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_14__advanced_advanced_component__["a" /* AdvancedComponent */], __WEBPACK_IMPORTED_MODULE_15__code_code_component__["a" /* CodeComponent */], __WEBPACK_IMPORTED_MODULE_16__shared_components_code_add_code_add_code_component__["a" /* AddCodeComponent */], __WEBPACK_IMPORTED_MODULE_17__account_account_component__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_18__shared_components_account_unsubscribe_unsubscribe_component__["a" /* UnsubscribeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__files_files_component__["a" /* FilesComponent */], __WEBPACK_IMPORTED_MODULE_21__shared_components_files_remove_file_remove_file_component__["a" /* RemoveFileComponent */], __WEBPACK_IMPORTED_MODULE_22__shared_components_files_select_file_select_file_component__["a" /* SelectFileComponent */], __WEBPACK_IMPORTED_MODULE_23__plugins_plugins_component__["a" /* PluginsComponent */], __WEBPACK_IMPORTED_MODULE_24__shared_components_plugins_remove_plugin_remove_plugin_component__["a" /* RemovePluginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__forms_forms_component__["a" /* FormsComponent */], __WEBPACK_IMPORTED_MODULE_26__shared_components_forms_add_form_add_form_component__["a" /* AddFormComponent */], __WEBPACK_IMPORTED_MODULE_27__shared_components_forms_edit_form_edit_form_component__["a" /* EditFormComponent */], __WEBPACK_IMPORTED_MODULE_28__shared_components_forms_remove_form_remove_form_component__["a" /* RemoveFormComponent */], __WEBPACK_IMPORTED_MODULE_29__shared_components_forms_add_form_field_add_form_field_component__["a" /* AddFormFieldComponent */], __WEBPACK_IMPORTED_MODULE_30__shared_components_forms_edit_form_field_edit_form_field_component__["a" /* EditFormFieldComponent */], __WEBPACK_IMPORTED_MODULE_31__shared_components_forms_remove_form_field_remove_form_field_component__["a" /* RemoveFormFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_32__galleries_galleries_component__["a" /* GalleriesComponent */], __WEBPACK_IMPORTED_MODULE_33__shared_components_galleries_add_gallery_add_gallery_component__["a" /* AddGalleryComponent */], __WEBPACK_IMPORTED_MODULE_34__shared_components_galleries_edit_gallery_edit_gallery_component__["a" /* EditGalleryComponent */], __WEBPACK_IMPORTED_MODULE_35__shared_components_galleries_remove_gallery_remove_gallery_component__["a" /* RemoveGalleryComponent */], __WEBPACK_IMPORTED_MODULE_36__shared_components_galleries_edit_caption_edit_caption_component__["a" /* EditCaptionComponent */], __WEBPACK_IMPORTED_MODULE_37__shared_components_galleries_remove_gallery_image_remove_gallery_image_component__["a" /* RemoveGalleryImageComponent */],
                __WEBPACK_IMPORTED_MODULE_38__menus_menus_component__["a" /* MenusComponent */], __WEBPACK_IMPORTED_MODULE_39__shared_components_menus_add_menu_add_menu_component__["a" /* AddMenuComponent */], __WEBPACK_IMPORTED_MODULE_40__shared_components_menus_edit_menu_edit_menu_component__["a" /* EditMenuComponent */], __WEBPACK_IMPORTED_MODULE_41__shared_components_menus_remove_menu_remove_menu_component__["a" /* RemoveMenuComponent */], __WEBPACK_IMPORTED_MODULE_42__shared_components_menus_add_menu_item_add_menu_item_component__["a" /* AddMenuItemComponent */], __WEBPACK_IMPORTED_MODULE_43__shared_components_menus_edit_menu_item_edit_menu_item_component__["a" /* EditMenuItemComponent */], __WEBPACK_IMPORTED_MODULE_44__shared_components_menus_remove_menu_item_remove_menu_item_component__["a" /* RemoveMenuItemComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_pages_component__["a" /* PagesComponent */], __WEBPACK_IMPORTED_MODULE_46__shared_components_pages_add_page_add_page_component__["a" /* AddPageComponent */], __WEBPACK_IMPORTED_MODULE_47__shared_components_pages_page_settings_page_settings_component__["a" /* PageSettingsComponent */], __WEBPACK_IMPORTED_MODULE_48__shared_components_pages_remove_page_remove_page_component__["a" /* RemovePageComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_components_component__["a" /* ComponentsComponent */], __WEBPACK_IMPORTED_MODULE_50__shared_components_components_add_component_add_component_component__["a" /* AddComponentComponent */], __WEBPACK_IMPORTED_MODULE_51__shared_components_components_remove_component_remove_component_component__["a" /* RemoveComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_52__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_53__submissions_submissions_component__["a" /* SubmissionsComponent */], __WEBPACK_IMPORTED_MODULE_54__shared_components_submissions_remove_submission_remove_submission_component__["a" /* RemoveSubmissionComponent */], __WEBPACK_IMPORTED_MODULE_55__shared_components_submissions_view_submission_view_submission_component__["a" /* ViewSubmissionComponent */],
                __WEBPACK_IMPORTED_MODULE_56__users_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_57__shared_components_users_add_user_add_user_component__["a" /* AddUserComponent */], __WEBPACK_IMPORTED_MODULE_58__shared_components_users_edit_user_edit_user_component__["a" /* EditUserComponent */], __WEBPACK_IMPORTED_MODULE_59__shared_components_users_remove_user_remove_user_component__["a" /* RemoveUserComponent */],
                __WEBPACK_IMPORTED_MODULE_63__shared_pipes_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_60__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_61__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_61__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_61__ngx_translate_core__["c" /* TranslateService */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__ = __webpack_require__("../../../../../src/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_reset_component__ = __webpack_require__("../../../../../src/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_create_component__ = __webpack_require__("../../../../../src/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages_component__ = __webpack_require__("../../../../../src/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_component__ = __webpack_require__("../../../../../src/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__files_files_component__ = __webpack_require__("../../../../../src/files/files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plugins_plugins_component__ = __webpack_require__("../../../../../src/plugins/plugins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__("../../../../../src/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menus_menus_component__ = __webpack_require__("../../../../../src/menus/menus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms_forms_component__ = __webpack_require__("../../../../../src/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__ = __webpack_require__("../../../../../src/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__submissions_submissions_component__ = __webpack_require__("../../../../../src/submissions/submissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__galleries_galleries_component__ = __webpack_require__("../../../../../src/galleries/galleries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_edit_component__ = __webpack_require__("../../../../../src/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__advanced_advanced_component__ = __webpack_require__("../../../../../src/advanced/advanced.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_account_component__ = __webpack_require__("../../../../../src/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__code_code_component__ = __webpack_require__("../../../../../src/code/code.component.ts");



















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
        path: 'account',
        component: __WEBPACK_IMPORTED_MODULE_17__account_account_component__["a" /* AccountComponent */]
    },
    {
        path: 'code/:id',
        component: __WEBPACK_IMPORTED_MODULE_18__code_code_component__["a" /* CodeComponent */]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/code/code.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\" *ngIf=\"showMenu === true\" >\n  <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n\n  <h1>{{ 'Code' | translate }}</h1>\n\n  <button class=\"app-add\" (click)=\"showAdd()\"><i class=\"material-icons\">add</i></button>\n</menu>\n\n<menu class=\"app-menu has-back\" *ngIf=\"showMenu === false\">\n  <button  class=\"app-back\" (click)=\"back()\"><i class=\"material-icons\">arrow_back</i></button>\n\n  <h1>{{ 'Code' | translate }}</h1>\n</menu>\n\n<nav class=\"code-menu\" *ngIf=\"showMenu === true\">\n\n  <h2 (click)=\"expand('template')\" [class.expanded]=\"isTemplatesExpanded === true\">\n    <span>{{ 'Templates' | translate }}</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isTemplatesExpanded === true\">\n    <li *ngFor=\"let template of templates\"><a (click)=\"view('template', template)\">{{template}}</a></li>\n  </ul>\n\n  <h2 (click)=\"expand('page')\" [class.expanded]=\"isPagesExpanded === true\">\n    <span>{{ 'Pages' | translate }}</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isPagesExpanded === true\">\n    <li *ngFor=\"let page of pages\"><a (click)=\"view('page', page)\">{{page}}</a></li>\n  </ul>\n\n  <h2 (click)=\"expand('component')\" [class.expanded]=\"isComponentsExpanded === true\">\n    <span>{{ 'Components' | translate }}</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isComponentsExpanded === true\">\n    <li *ngFor=\"let component of components\"><a (click)=\"view('component', component)\">{{component}}</a></li>\n  </ul>\n\n\n\n  <h2 (click)=\"expand('stylesheet')\" [class.expanded]=\"isStylesheetsExpanded === true\">\n    CSS\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isStylesheetsExpanded === true\">\n    <li *ngFor=\"let stylesheet of stylesheets\"><a (click)=\"view('stylesheet', stylesheet)\">{{stylesheet}}</a></li>\n  </ul>\n\n  <h2 (click)=\"expand('script')\" [class.expanded]=\"isScriptsExpanded === true\">\n    JS\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isScriptsExpanded === true\">\n    <li *ngFor=\"let script of scripts\"><a (click)=\"view('script', script)\">{{script}}</a></li>\n  </ul>\n\n  <h2 (click)=\"expand('plugin')\" [class.expanded]=\"isPluginsExpanded === true\">\n    <span>{{ 'Plugins' | translate }}</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    </svg>\n  </h2>\n\n  <ul [class.expanded]=\"isPluginsExpanded === true\">\n    <li *ngFor=\"let plugin of plugins\"><a (click)=\"view('plugin', plugin)\">{{plugin}}</a></li>\n  </ul>\n\n\n</nav>\n\n<section class=\"app-main\">\n\n  <div id=\"editor\" class=\"code-editor\" [class.expanded]=\"showMenu === false\"></div>\n\n</section>\n\n<footer class=\"app-footer\">\n    <a (click)=\"save()\">{{ 'Save' | translate }}</a>\n</footer>\n\n<respond-add-code [visible]=\"addVisible\" (onCancel)=\"reset()\" (onAdd)=\"list()\" (onError)=\"failure($event)\"></respond-add-code>\n\n<respond-drawer active=\"code\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/code/code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_code_service__ = __webpack_require__("../../../../../src/shared/services/code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CodeComponent = /** @class */ (function () {
    function CodeComponent(_route, _router, _codeService, _appService) {
        this._route = _route;
        this._router = _router;
        this._codeService = _codeService;
        this._appService = _appService;
        this.codeType = 'not-specified';
        this.addVisible = false;
        this.drawerVisible = false;
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
        this.drawerVisible = false;
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
     * Shows the drawer
     */
    CodeComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
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
     * Navigates back
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            //  this._router.navigate( ['/login'] );
        }
    };
    /**
     * Handles a successful save
     */
    CodeComponent.prototype.success = function () {
        this._appService.showToast('success', null);
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
     * Shows the add dialog
     */
    CodeComponent.prototype.showAdd = function () {
        this.addVisible = true;
    };
    CodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-code',
            template: __webpack_require__("../../../../../src/code/code.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_code_service__["a" /* CodeService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_services_code_service__["a" /* CodeService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "../../../../../src/components/components.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Components' | translate }}</h1>\n\n    <button class=\"app-add\" (click)=\"showAdd()\"><i class=\"material-icons\">add</i></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <div id=\"components-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let component of components\" (mouseenter)=\"setActive(component)\" (click)=\"setActive(component)\" [class.selected]=\"component === selectedComponent\">\n      <h2>\n        <span class=\"primary\"><a (click)=\"edit(component)\">{{ component.title }}</a></span>\n      </h2>\n      <small>\n        {{ component.url }}\n      </small>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(component)\">{{'Remove' | translate }}</a>\n          <a (click)=\"editCode(component)\">{{'Edit HTML' | translate }}</a>\n          <a class=\"primary\" (click)=\"edit(component)\">{{'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"components.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-add-component [visible]=\"addVisible\" (onCancel)=\"reset()\" (onAdd)=\"list('add')\" (onError)=\"failure($event)\"></respond-add-component>\n\n<respond-remove-component [visible]=\"removeVisible\" [component]=\"component\" (onCancel)=\"reset()\" (onUpdate)=\"list('remove')\" (onError)=\"failure($event)\"></respond-remove-component>\n\n<respond-drawer active=\"components\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_component_service__ = __webpack_require__("../../../../../src/shared/services/component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(_componentService, _router, _appService) {
        this._componentService = _componentService;
        this._router = _router;
        this._appService = _appService;
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
        this.list('load');
    };
    /**
     * Updates the list
     */
    ComponentsComponent.prototype.list = function (source) {
        var _this = this;
        if (source != 'load') {
            this._appService.showToast('success', null);
        }
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    ComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-components',
            template: __webpack_require__("../../../../../src/components/components.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_component_service__["a" /* ComponentService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_component_service__["a" /* ComponentService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "../../../../../src/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"><img src=\"{{ logoUrl }}\"></div>\n\n <div class=\"app-slideshow\">\n\n  <div class=\"app-slideshow-item\" *ngFor=\"let theme of themes\" [class.selected]=\"theme === selectedTheme\">\n\n    <div class=\"app-slideshow-container\">\n      <div class=\"screenshot\">\n        <img src=\"{{themesLocation}}{{theme.location.replace('/','')}}/screenshot.png\">\n      </div>\n      <div class=\"description\">\n        <h2>{{ theme.name }}</h2>\n        <p>{{ theme.desc }}</p>\n        <p>\n          <a class=\"primary\" (click)=\"useTheme()\">{{ 'Use this Theme' | translate }}</a>\n          <a (click)=\"next()\">{{ 'Next Theme' | translate }}</a>\n        </p>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.app-slideshow -->\n\n</div>\n\n<div class=\"app-theme-list\">\n\n  <h3>{{ 'All Themes' | translate }}</h3>\n\n  <div>\n    <span class=\"app-theme-image\" *ngFor=\"let theme of themes; let i = index;\" [class.selected]=\"theme === selectedTheme\">\n      <img src=\"{{themesLocation}}{{theme.location.replace('/','')}}/screenshot.png\" (click)=\"select(i)\">\n    </span>\n  </div>\n\n  <p class=\"acknowledgement\" [innerHTML]=\"acknowledgement\"></p>\n\n</div>\n<!-- /.app-theme-list -->\n\n\n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #createForm=\"ngForm\">\n\n      <h2>{{ 'Create Site' | translate }}</h2>\n\n      <label>{{ 'Site Name' | translate }}</label>\n      <input type=\"text\" name=\"name\"\n        [(ngModel)]=\"model.name\"\n        ngControl=\"name\" required>\n\n\n      <label>{{ 'Email' | translate }}</label>\n      <input type=\"text\" name=\"email\"\n        [(ngModel)]=\"model.email\"\n        ngControl=\"email\" required>\n\n      <label>{{ 'Password' | translate }}</label>\n      <input type=\"password\" name=\"password\"\n        [(ngModel)]=\"model.password\"\n        ngControl=\"password\" required>\n\n      <label *ngIf=\"hasPasscode === true\">{{ 'Passcode' | translate }}</label>\n      <input type=\"text\" name=\"passcode\" *ngIf=\"hasPasscode === true\"\n        [(ngModel)]=\"model.passcode\"\n        ngControl=\"passcode\" required>\n\n      <div #container id=\"recaptcha-container\" *ngIf=\"recaptchaSiteKey !== ''\" class=\"g-recaptcha\"></div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Create' | translate }}</button>\n      </div>\n\n      <p>{{ 'By creating a site you are accepting our terms of service.' | translate }}</p>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateComponent = /** @class */ (function () {
    function CreateComponent(_siteService, _appService, _router, _translate) {
        this._siteService = _siteService;
        this._appService = _appService;
        this._router = _router;
        this._translate = _translate;
        window['verifyCallback'] = this.verifyCallback.bind(this);
        window['onloadCallback'] = this.onloadCallback.bind(this);
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
        this._appService.showToast('success', null);
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
        this._appService.showToast('failure', obj._body);
    };
    /**
     * Verifies the reCAPTCHA response
     */
    CreateComponent.prototype.verifyCallback = function (response) {
        this.recaptchaResponse = response;
    };
    /**
     * Called when the reCAPTCHA JS loads
     */
    CreateComponent.prototype.onloadCallback = function (response) {
        var el = this.container.nativeElement;
        grecaptcha.render(el, {
            'sitekey': this.recaptchaSiteKey,
            'callback': 'verifyCallback'
        });
    };
    /**
     * Sets the language for the app
     */
    CreateComponent.prototype.setLanguage = function (language) {
        localStorage.setItem('user_language', language);
        // set language
        this._translate.use(language);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CreateComponent.prototype, "container", void 0);
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-create',
            template: __webpack_require__("../../../../../src/create/create.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu has-back\">\n    <button class=\"app-back\" (click)=\"back()\"><i class=\"material-icons\">arrow_back</i></button>\n\n    <h1>{{ 'Edit' | translate }}</h1>\n\n    <button class=\"app-alt-action\" (click)=\"showPage()\"><i class=\"material-icons\">launch</i></button>\n\n    <button class=\"app-add\" (click)=\"showAdd()\"><i class=\"material-icons\">add</i></button>\n</menu>\n\n<footer class=\"app-footer\">\n    <a (click)=\"save()\">{{ 'Save' | translate }}</a>\n</footer>\n\n<section class=\"edit-main\">\n    <iframe #editFrame [src]=\"url\" class=\"edit-frame\"></iframe>\n</section>\n\n\n\n<respond-drawer active=\"pages\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_sanitizer, _appService) {
        this._sanitizer = _sanitizer;
        this._appService = _appService;
        this.drawerVisible = false;
    }
    /**
     * Init pages
     *
     */
    EditComponent.prototype.ngOnInit = function () {
        var editMode, fullPageUrl;
        this.drawerVisible = false;
        this.id = localStorage.getItem('respond.siteId');
        this.pageUrl = localStorage.getItem('respond.pageUrl');
        editMode = localStorage.getItem('respond.editMode');
        this.buildUrl();
        this.url = this._sanitizer.bypassSecurityTrustResourceUrl('/edit?q=' + this.id + '/' + this.pageUrl + '&mode=' + editMode);
    };
    /**
     * Get the url for the page
     */
    EditComponent.prototype.buildUrl = function () {
        var _this = this;
        // retrieve settings
        this._appService.retrieveSettings()
            .subscribe(function (data) {
            _this.siteUrl = data.siteUrl;
            _this.siteUrl = _this.siteUrl.replace('{{siteId}}', _this.id);
            _this.fullPageUrl = _this.siteUrl + '/' + _this.pageUrl + '.html';
        }, function (error) { });
    };
    /**
   * Resets an modal booleans
   */
    EditComponent.prototype.reset = function () {
        this.drawerVisible = false;
    };
    /**
     * navigates back
     */
    EditComponent.prototype.back = function () {
        history.go(-1);
    };
    EditComponent.prototype.save = function () {
        // show menu in the editor
        this.el.nativeElement.contentWindow.hashedit.save();
        this._appService.showToast('success', null);
    };
    /**
     * Shows the drawer
     */
    EditComponent.prototype.toggleDrawer = function () {
        this.drawerVisible = !this.drawerVisible;
    };
    /**
     * Shows the add menu
     */
    EditComponent.prototype.showAdd = function () {
        // show menu in the editor
        this.el.nativeElement.contentWindow.hashedit.showMenu();
    };
    /**
    * Shows the page
    */
    EditComponent.prototype.showPage = function () {
        window.open(this.fullPageUrl, '_blank');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editFrame'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditComponent.prototype, "el", void 0);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-edit',
            template: __webpack_require__("../../../../../src/edit/edit.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/files/files.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Files' | translate }}</h1>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <respond-dropzone (onAdd)=\"list()\"></respond-dropzone>\n\n  <div id=\"files-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let  file of files\" (mouseenter)=\"setActive(file)\" (click)=\"setActive(file)\" [class.selected]=\"file === selectedFile\" [class.image]=\"file.thumb !== ''\">\n      <h2><span class=\"primary\">{{ file.name }}</span><span class=\"secondary\">{{ file.size }} MB</span></h2>\n      <img *ngIf=\"file.thumb !== ''\" class=\"image\" src=\"{{file.thumb}}\">\n      <small>/files/{{ file.name }}</small>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(file)\">{{ 'Remove' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"files.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-remove-file [visible]=\"removeVisible\" [file]=\"file\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-remove-file>\n\n<respond-drawer active=\"files\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/files/files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_file_service__ = __webpack_require__("../../../../../src/shared/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilesComponent = /** @class */ (function () {
    function FilesComponent(_fileService, _router, _appService) {
        this._fileService = _fileService;
        this._router = _router;
        this._appService = _appService;
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    FilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-files',
            template: __webpack_require__("../../../../../src/files/files.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "../../../../../src/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"><img src=\"{{ logoUrl }}\"></div>\n\n<form class=\"app-form standalone\" (submit)=\"forgot($event, email.value, site.value)\">\n\n    <h2>{{ 'Forgot Password?' | translate }}</h2>\n\n    <label>{{ 'Email' | translate }}</label>\n    <input type=\"text\" name=\"email\" #email required=\"required\">\n\n    <div [hidden]=\"!hasMultipleSites\">\n        <label>{{ 'Site Name' | translate }}</label>\n        <input type=\"text\" name=\"site\" #site>\n        <small>{{ 'You have multiple sites registered with this email.  Key the name of the site above to retrieve your password. You can speed up the process in the future by navigating to forgot/site-name.' | translate }}</small>\n    </div>\n\n    <button type=\"submit\" class=\"primary-button\">{{ 'Send' | translate }}</button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = /** @class */ (function () {
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
        this._userService.forgot(id, email)
            .subscribe(function () { _this._appService.showToast('success', null); }, function (error) { _this.failure(error); });
    };
    /**
     * handles errors
     */
    ForgotComponent.prototype.failure = function (obj) {
        this._appService.showToast('failure', obj._body);
        if (obj.status == 409) {
            this.hasMultipleSites = true;
        }
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-forgot',
            template: __webpack_require__("../../../../../src/forgot/forgot.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "../../../../../src/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\" [class.noborder]=\"forms.length !== 0\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Forms' | translate }}</h1>\n\n    <button class=\"app-add position-2\" (click)=\"showAddField()\" *ngIf=\"forms.length !== 0\"><i class=\"material-icons\">add</i></button>\n\n    <button class=\"app-overflow\" (click)=\"toggleOverflow()\" *ngIf=\"selectedForm !== undefined\"><i class=\"material-icons\">more_vert</i></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <nav class=\"app-selector\">\n    <ul>\n      <li *ngFor=\"let form of forms\" [class.selected]=\"form.id === selectedForm.id\" (click)=\"setActive(form)\">\n        <a>{{form.name}}</a>\n      </li>\n    </ul>\n  </nav>\n\n\n  <div id=\"fields-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let field of fields\" (mouseenter)=\"setFieldActive(field)\" (click)=\"setFieldActive(field)\" [class.selected]=\"field === selectedField\">\n      <h2><span class=\"primary\"><a (click)=\"showEditField(field)\">{{ field.label }}</a></span></h2>\n      <small>{{ field.type | translate }}</small>\n      <div class=\"app-list-actions\">\n          <span class=\"app-list-alternate-actions\">\n            <a (click)=\"moveFieldDown(field)\">{{ 'Move Down' | translate }}</a>\n            <a (click)=\"moveFieldUp(field)\">{{ 'Move Up' | translate }}</a>\n          </span>\n          <a (click)=\"showRemoveField(field)\">{{ 'Remove' | translate }}</a>\n          <a class=\"primary\" (click)=\"showEditField(field)\">{{ 'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"fields.length === 0\">\n    {{ 'Nothing here yet' | translate }}\n    <a (click)=\"showAddField()\" *ngIf=\"forms.length !== 0 && fields.length === 0\">{{ 'Add Form Field' | translate }}</a>\n    <a (click)=\"showAdd()\" *ngIf=\"forms.length === 0\">{{ 'Add Form' | translate }}</a>\n  </p>\n\n</section>\n\n<respond-add-form [visible]=\"addVisible\" (onCancel)=\"reset()\" (onAdd)=\"list()\" (onError)=\"failure($event)\"></respond-add-form>\n\n<respond-edit-form [visible]=\"editVisible\" [form]=\"selectedForm\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-edit-form>\n\n<respond-remove-form [visible]=\"removeVisible\" [form]=\"selectedForm\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-remove-form>\n\n<respond-add-form-field [visible]=\"addFieldVisible\" [form]=\"selectedForm\" (onCancel)=\"reset()\" (onAdd)=\"list()\" (onError)=\"failure($event)\"></respond-add-form-field>\n\n<respond-edit-form-field [visible]=\"editFieldVisible\" [form]=\"selectedForm\" [field]=\"selectedField\" [index]=\"selectedIndex\" (onCancel)=\"reset()\" (onAdd)=\"list()\" (onError)=\"failure($event)\"></respond-edit-form-field>\n\n<respond-remove-form-field [visible]=\"removeFieldVisible\" [form]=\"selectedForm\" [field]=\"selectedField\" [index]=\"selectedIndex\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-remove-form-field>\n\n<respond-drawer active=\"forms\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>\n\n<nav class=\"app-overflow\" [class.visible]=\"overflowVisible === true\">\n\n  <ul>\n    <li class=\"app-overflow-title\"><span>{{ 'Additional Options' | translate }}</span></li>\n    <li><a (click)=\"showAdd()\">{{ 'Add Form' | translate }}</a></li>\n    <li><a (click)=\"showEdit()\">{{ 'Edit Form' | translate }}</a></li>\n    <li><a (click)=\"showRemove()\">{{ 'Remove Form' | translate }}</a></li>\n  </ul>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_form_service__ = __webpack_require__("../../../../../src/shared/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_form_field_service__ = __webpack_require__("../../../../../src/shared/services/form-field.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormsComponent = /** @class */ (function () {
    function FormsComponent(_formService, _formFieldService, _router, _appService) {
        this._formService = _formService;
        this._formFieldService = _formFieldService;
        this._router = _router;
        this._appService = _appService;
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-forms',
            template: __webpack_require__("../../../../../src/forms/forms.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_form_field_service__["a" /* FormFieldService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_form_field_service__["a" /* FormFieldService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "../../../../../src/galleries/galleries.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\" [class.noborder]=\"galleries.length !== 0\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Galleries' | translate }}</h1>\n\n    <button class=\"app-add position-2\" (click)=\"showSelect()\" *ngIf=\"galleries.length !== 0\"><i class=\"material-icons\">add</i></button>\n\n    <button class=\"app-overflow\" (click)=\"toggleOverflow()\" *ngIf=\"selectedGallery !== undefined\"><i class=\"material-icons\">more_vert</i></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <nav class=\"app-selector\">\n    <ul>\n      <li *ngFor=\"let gallery of galleries\" [class.selected]=\"gallery.id === selectedGallery.id\" (click)=\"setActive(gallery)\">\n        <a>{{gallery.name}}</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div id=\"images-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let image of images\" (mouseenter)=\"setImageActive(image)\" (click)=\"setImageActive(image)\" [class.selected]=\"image === selectedImage\" [class.image]=\"image.thumb !== ''\">\n      <h2><span class=\"primary\"><a (click)=\"showEditImage(image)\">{{ image.name }}</a></span></h2>\n      <img *ngIf=\"image.thumb !== ''\" class=\"image\" src=\"sites/{{id}}/{{image.thumb}}\">\n      <small>{{ image.caption }}</small>\n      <div class=\"app-list-actions\">\n          <span class=\"app-list-alternate-actions\">\n            <a (click)=\"moveImageDown(image)\">{{ 'Move Down' | translate }}</a>\n            <a (click)=\"moveImageUp(image)\">{{ 'Move Up' | translate }}</a>\n          </span>\n          <a (click)=\"showRemoveImage(image)\">{{ 'Remove' | translate }}</a>\n          <a (click)=\"showEditImage(image)\" class=\"primary\">{{ 'Edit Caption' | translate }}</a>\n      </div>\n    </div>\n\n    <p class=\"no-list-items\" *ngIf=\"images.length === 0\">\n      {{ 'Nothing here yet' | translate }}\n      <a (click)=\"showSelect()\" *ngIf=\"galleries.length !== 0 && images.length === 0\">{{ 'Add Image' | translate }}</a>\n      <a (click)=\"showAdd()\" *ngIf=\"galleries.length === 0\">{{ 'Add Gallery' | translate }}</a>\n    </p>\n\n  </div>\n\n</section>\n\n<respond-add-gallery [visible]=\"addVisible\" (onCancel)=\"reset()\" (onAdd)=\"list()\" (onError)=\"failure($event)\"></respond-add-gallery>\n\n<respond-edit-gallery [visible]=\"editVisible\" [gallery]=\"selectedGallery\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-edit-gallery>\n\n<respond-remove-gallery [visible]=\"removeVisible\" [gallery]=\"selectedGallery\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-remove-gallery>\n\n<respond-select-file [visible]=\"selectVisible\" (onCancel)=\"reset()\"  (onSelect)=\"select($event)\" (onError)=\"failure($event)\"></respond-select-file>\n\n<respond-edit-caption [visible]=\"editImageVisible\" [gallery]=\"selectedGallery\" [image]=\"selectedImage\" (onCancel)=\"reset()\" (onAdd)=\"list()\" (onError)=\"failure($event)\"></respond-edit-caption>\n\n<respond-remove-gallery-image [visible]=\"removeImageVisible\" [gallery]=\"selectedGallery\" [image]=\"selectedImage\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-remove-gallery-image>\n\n<respond-drawer active=\"galleries\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>\n\n<nav class=\"app-overflow\" [class.visible]=\"overflowVisible === true\">\n\n  <ul>\n    <li class=\"app-overflow-title\"><span>{{ 'Additional Options' | translate }}</span></li>\n    <li><a (click)=\"showAdd()\">{{ 'Add Gallery' | translate }}</a></li>\n    <li><a (click)=\"showEdit()\">{{ 'Edit Gallery' | translate }}</a></li>\n    <li><a (click)=\"showRemove()\">{{ 'Remove Gallery' | translate }}</a></li>\n  </ul>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/galleries/galleries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__ = __webpack_require__("../../../../../src/shared/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_gallery_image_service__ = __webpack_require__("../../../../../src/shared/services/gallery-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleriesComponent = /** @class */ (function () {
    function GalleriesComponent(_galleryService, _galleryImageService, _router, _appService) {
        this._galleryService = _galleryService;
        this._galleryImageService = _galleryImageService;
        this._router = _router;
        this._appService = _appService;
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
            .subscribe(function (data) { _this.listImages(); _this._appService.showToast('success', null); }, function (error) { _this.failure(error); });
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    GalleriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-galleries',
            template: __webpack_require__("../../../../../src/galleries/galleries.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_gallery_image_service__["a" /* GalleryImageService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_gallery_image_service__["a" /* GalleryImageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]])
    ], GalleriesComponent);
    return GalleriesComponent;
}());



/***/ }),

/***/ "../../../../../src/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"><img src=\"{{ logoUrl }}\"></div>\n\n<form class=\"app-form standalone\" (submit)=\"login($event, email.value, password.value, site.value)\">\n\n    <label *ngIf=\"usesLDAP === false\">{{ 'Email' | translate }}</label>\n    <label *ngIf=\"usesLDAP === true\">{{ 'Username' | translate }}</label>\n    <input type=\"text\" name=\"email\" #email>\n\n    <label>{{ 'Password' | translate }}</label>\n    <input type=\"password\" name=\"password\" #password>\n\n    <div [hidden]=\"!hasMultipleSites\">\n        <label>{{ 'Site Name' | translate }}</label>\n        <input type=\"text\" name=\"site\" #site>\n    </div>\n\n    <button type=\"submit\" class=\"primary-button\">{{ 'Login' | translate }}</button>\n\n    <a (click)=\"forgot()\">{{ 'Forgot Password?' | translate }}</a>\n\n</form>\n\n<p class=\"acknowledgement\" [innerHTML]=\"acknowledgement\"></p>"

/***/ }),

/***/ "../../../../../src/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
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
        // show the toast
        this._appService.showToast('success', null);
        // set language
        this.setLanguage(this.data.user.language);
        // set token
        this.setToken(this.data.token);
        // set status
        this.setStatus(this.data.user.status, this.data.user.days, this.data.user.hasAccount);
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
    LoginComponent.prototype.setStatus = function (status, days, hasAccount) {
        // set 
        var strHasAccount = 'false';
        // set expired
        if (status == 'Trial' && days < 0) {
            status = 'Expired';
        }
        // set has account
        if (hasAccount == true) {
            strHasAccount = 'true';
        }
        localStorage.setItem('site_status', status);
        localStorage.setItem('site_has_account', strHasAccount);
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
        // show the toast
        this._appService.showToast('failure', obj._body);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-login',
            template: __webpack_require__("../../../../../src/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../../src/menus/menus.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\" [class.noborder]=\"menus.length !== 0\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g></svg></button>\n\n    <h1>{{ 'Menus' | translate }}</h1>\n\n    <button class=\"app-add position-2\" (click)=\"showAddItem()\" *ngIf=\"menus.length !== 0\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\"><g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g></svg></button>\n\n    <button class=\"app-overflow\" (click)=\"toggleOverflow()\" *ngIf=\"selectedMenu !== undefined\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/></svg></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <nav class=\"app-selector\">\n    <ul>\n      <li *ngFor=\"let menu of menus\" [class.selected]=\"menu.id === selectedMenu.id\" (click)=\"setActive(menu)\">\n        <a>{{menu.name}}</a>\n      </li>\n    </ul>\n  </nav>\n\n\n  <div id=\"items-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let item of items\" (mouseenter)=\"setItemActive(item)\" (click)=\"setItemActive(item)\" [class.selected]=\"item === selectedItem\">\n      <h2><span class=\"primary\"><a (click)=\"showEditItem(item)\">{{ item.html }}</a></span></h2>\n      <small>{{ item.url }}</small>\n      <div class=\"app-list-actions\">\n          <span class=\"app-list-alternate-actions\">\n            <a (click)=\"moveItemDown(item)\">{{ 'Move Down' | translate }}</a>\n            <a (click)=\"moveItemUp(item)\">{{ 'Move Up' | translate }}</a>\n          </span>\n          <a (click)=\"showRemoveItem(item)\">{{ 'Remove' | translate }}</a>\n          <a class=\"primary\" (click)=\"showEditItem(item)\">{{ 'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"items.length === 0\">\n    {{ 'Nothing here yet' | translate }}\n    <a (click)=\"showAddItem()\" *ngIf=\"menus.length !== 0 && items.length === 0\">{{ 'Add Menu Item' | translate }}</a>\n    <a (click)=\"showAdd()\" *ngIf=\"menus.length === 0\">{{ 'Add Menu' | translate }}</a>\n  </p>\n\n</section>\n\n<respond-add-menu [visible]=\"addVisible\" (onCancel)=\"reset()\" (onAdd)=\"list()\" (onError)=\"failure($event)\"></respond-add-menu>\n\n<respond-edit-menu [visible]=\"editVisible\" [menu]=\"selectedMenu\" (onCancel)=\"reset()\" (onUpdate)=\"list('edit')\" (onError)=\"failure($event)\"></respond-edit-menu>\n\n<respond-remove-menu [visible]=\"removeVisible\" [menu]=\"selectedMenu\" (onCancel)=\"reset()\" (onUpdate)=\"list('remove')\" (onError)=\"failure($event)\"></respond-remove-menu>\n\n<respond-add-menu-item [visible]=\"addItemVisible\" [menu]=\"selectedMenu\" (onCancel)=\"reset()\" (onAdd)=\"list('add')\" (onError)=\"failure($event)\"></respond-add-menu-item>\n\n<respond-edit-menu-item [visible]=\"editItemVisible\" [menu]=\"selectedMenu\" [item]=\"selectedItem\" [index]=\"selectedIndex\" (onCancel)=\"reset()\" (onAdd)=\"list('edit')\" (onError)=\"failure($event)\"></respond-edit-menu-item>\n\n<respond-remove-menu-item [visible]=\"removeItemVisible\" [menu]=\"selectedMenu\" [item]=\"selectedItem\" [index]=\"selectedIndex\" (onCancel)=\"reset()\" (onUpdate)=\"list('remove')\" (onError)=\"failure($event)\"></respond-remove-menu-item>\n\n<respond-drawer active=\"menus\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>\n\n<nav class=\"app-overflow\" [class.visible]=\"overflowVisible === true\">\n\n  <ul>\n    <li class=\"app-overflow-title\"><span>{{ 'Additional Options' | translate }}</span></li>\n    <li><a (click)=\"showAdd()\">{{ 'Add Menu' | translate }}</a></li>\n    <li><a (click)=\"showEdit()\">{{ 'Edit Menu' | translate }}</a></li>\n    <li><a (click)=\"showRemove(selectedMenu)\">{{ 'Remove Menu' | translate }}</a></li>\n  </ul>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/menus/menus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_menu_service__ = __webpack_require__("../../../../../src/shared/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_menu_item_service__ = __webpack_require__("../../../../../src/shared/services/menu-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenusComponent = /** @class */ (function () {
    function MenusComponent(_menuService, _menuItemService, _router, _appService) {
        this._menuService = _menuService;
        this._menuItemService = _menuItemService;
        this._router = _router;
        this._appService = _appService;
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
        this.list('load');
    };
    /**
     * Updates the list
     */
    MenusComponent.prototype.list = function (source) {
        var _this = this;
        if (source != 'load') {
            this._appService.showToast('success', null);
        }
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    MenusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-menus',
            template: __webpack_require__("../../../../../src/menus/menus.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_menu_item_service__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_menu_item_service__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]])
    ], MenusComponent);
    return MenusComponent;
}());



/***/ }),

/***/ "../../../../../src/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n  \n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Pages' | translate }}</h1>\n\n    <button class=\"app-add\" (click)=\"showAdd()\"><i class=\"material-icons\">add</i></button>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <div class=\"app-search\">\n    <i class=\"material-icons\">search</i>\n    <input type=\"search\" [(ngModel)]=\"search\" (input)=\"searchList()\" placeholder=\"{{ 'Search by Name or URL' | translate }}\">\n  </div>\n\n  <div id=\"pages-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let page of filteredPages\" (mouseenter)=\"setActive(page)\" (click)=\"setActive(page)\" [class.selected]=\"page === selectedPage\" [class.image]=\"page.thumb !== ''\">\n      <h2>\n        <span class=\"primary\"><a (click)=\"edit(page)\">{{ page.title }}</a></span>\n        <svg *ngIf=\"page.location && (page.location !== '')\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" class=\"location\">\n            <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/>\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n        <span class=\"secondary\">{{ page.lastModifiedDate | timeAgo }}</span>\n      </h2>\n      <img *ngIf=\"page.thumb !== ''\" class=\"image\" src=\"sites/{{id}}/{{page.thumb}}\">\n      <small>\n        {{ page.url }}\n      </small>\n      <p>{{ page.description }}</p>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(page)\">{{'Remove' | translate }}</a>\n          <a (click)=\"showSettings(page)\">{{'Settings' | translate }}</a>\n          <a (click)=\"editCode(page)\">{{'Edit HTML' | translate }}</a>\n          <a class=\"primary\" (click)=\"edit(page)\">{{'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"pages.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-add-page [visible]=\"addVisible\" (onCancel)=\"reset()\" (onAdd)=\"list('add')\" (onError)=\"failure($event)\"></respond-add-page>\n\n<respond-page-settings [visible]=\"settingsVisible\" [page]=\"page\" (onCancel)=\"reset()\" (onUpdate)=\"list('update')\" (onError)=\"failure($event)\"></respond-page-settings>\n\n<respond-remove-page [visible]=\"removeVisible\" [page]=\"page\" (onCancel)=\"reset()\" (onUpdate)=\"list('remove')\" (onError)=\"failure($event)\"></respond-remove-page>\n\n<respond-drawer active=\"pages\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>\n  "

/***/ }),

/***/ "../../../../../src/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__ = __webpack_require__("../../../../../src/shared/services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagesComponent = /** @class */ (function () {
    function PagesComponent(_pageService, _router, _translate, _appService) {
        this._pageService = _pageService;
        this._router = _router;
        this._translate = _translate;
        this._appService = _appService;
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
        this.list('load');
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
    PagesComponent.prototype.list = function (source) {
        var _this = this;
        if (source != 'load') {
            this._appService.showToast('success', null);
        }
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-pages',
            template: __webpack_require__("../../../../../src/pages/pages.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_app_service__["a" /* AppService */]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "../../../../../src/plugins/plugins.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Plugins' | translate }}</h1>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <respond-dropzone url=\"/api/plugins/upload\" (onAdd)=\"list()\"></respond-dropzone>\n\n  <div id=\"plugins-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let  plugin of plugins\" (mouseenter)=\"setActive(plugin)\" (click)=\"setActive(plugin)\" [class.selected]=\"plugin === selectedPlugin\">\n      <h2><span class=\"icon\" [innerHTML]=\"plugin.display\"></span> <span class=\"primary\">{{ plugin.title }}</span></h2>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(plugin)\">{{ 'Remove' | translate }}</a>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"no-list-items\" *ngIf=\"plugins.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-drawer active=\"plugins\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>\n\n<respond-remove-plugin [visible]=\"removeVisible\" [plugin]=\"plugin\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-remove-plugin>"

/***/ }),

/***/ "../../../../../src/plugins/plugins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PluginsComponent = /** @class */ (function () {
    function PluginsComponent(_siteService, _router, _appService) {
        this._siteService = _siteService;
        this._router = _router;
        this._appService = _appService;
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    PluginsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-plugins',
            template: __webpack_require__("../../../../../src/plugins/plugins.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], PluginsComponent);
    return PluginsComponent;
}());



/***/ }),

/***/ "../../../../../src/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"><img src=\"{{ logoUrl }}\"></div>\n\n<form class=\"app-form standalone\" (submit)=\"reset($event, password.value, retype.value)\">\n\n    <h2>{{ 'Reset Password' | translate }}</h2>\n\n    <label>{{ 'Password' | translate }}</label>\n    <input type=\"password\" name=\"password\" #password>\n\n    <label>{{ 'Re-Type Password' | translate }}</label>\n    <input type=\"password\" name=\"retype\" #retype>\n\n    <button type=\"submit\" class=\"primary-button\">{{ 'Reset Password' | translate }}</button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = /** @class */ (function () {
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
            this._appService.showToast('failure', 'Password mismatch');
        }
        else {
            this._userService.reset(this.id, this.token, password)
                .subscribe(function () { _this._appService.showToast('success', null); }, function (error) { _this.failure(error); });
        }
    };
    /**
     * handles error
     */
    ResetComponent.prototype.failure = function (obj) {
        this._appService.showToast('failure', obj._body);
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-reset',
            template: __webpack_require__("../../../../../src/reset/reset.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "../../../../../src/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Settings' | translate }}</h1>\n\n</menu>\n\n<form class=\"app-form\" (ngSubmit)=\"submit()\" #settingsForm=\"ngForm\">\n\n<section class=\"app-main\">\n\n    <div *ngFor=\"let setting of settings\">\n\n      <div [ngSwitch]=\"setting.type\">\n\n        <div *ngSwitchCase=\"'text'\">\n          <label>{{setting.label | translate }}</label>\n          <input type=\"text\" id=\"{{setting.id}}\" name=\"{{setting.id}}\" [(ngModel)]=\"setting.value\">\n        </div>\n\n        <div *ngSwitchCase=\"'color'\">\n          <label>{{setting.label | translate }}</label>\n          <input type=\"color\" id=\"{{setting.id}}\" name=\"{{setting.id}}\" [(ngModel)]=\"setting.value\">\n        </div>\n\n        <div *ngSwitchCase=\"'image'\">\n          <label>{{setting.label | translate }} <a (click)=\"showSelect(setting)\">{{ 'Select' | translate }}</a></label>\n          <input type=\"text\" id=\"{{setting.id}}\" name=\"{{setting.id}}\" [(ngModel)]=\"setting.value\">\n        </div>\n\n        <div *ngSwitchCase=\"'select'\">\n          <label>{{setting.label | translate }}</label>\n          <select id=\"{{setting.id}}\" name=\"{{setting.id}}\" [(ngModel)]=\"setting.value\">\n            <option *ngFor=\"let option of setting.options\" [value]=\"option\">{{option}}</option>\n          </select>\n        </div>\n\n      </div>\n\n      <small>{{setting.description | translate }}</small>\n\n    </div>\n\n</section>\n\n\n<footer class=\"app-footer\">\n    <button type=\"submit\">{{ 'Save' | translate }}</button>\n</footer>\n\n</form>\n\n\n<respond-select-file [visible]=\"selectVisible\" (onCancel)=\"reset()\"  (onSelect)=\"select($event)\"></respond-select-file>\n<respond-drawer active=\"settings\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_setting_service__ = __webpack_require__("../../../../../src/shared/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_settingService, _router, _appService) {
        this._settingService = _settingService;
        this._router = _router;
        this._appService = _appService;
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
        this.setting.value = 'files/' + event.name;
        this.selectVisible = false;
    };
    /**
     * Handles success
     */
    SettingsComponent.prototype.success = function () {
        this._appService.showToast('success', null);
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-settings',
            template: __webpack_require__("../../../../../src/settings/settings.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_setting_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_setting_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/account/unsubscribe/unsubscribe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Unsubscribe' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to Unsubscribe.' | translate }}</p>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Unsubscribe' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/account/unsubscribe/unsubscribe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsubscribeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__ = __webpack_require__("../../../../../src/shared/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnsubscribeComponent = /** @class */ (function () {
    function UnsubscribeComponent(_siteService, _routeService) {
        this._siteService = _siteService;
        this._routeService = _routeService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(UnsubscribeComponent.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            // set visible
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init pages
     */
    UnsubscribeComponent.prototype.ngOnInit = function () {
    };
    /**
     * Hides the modal
     */
    UnsubscribeComponent.prototype.hide = function () {
        this._visible = false;
        this.onCancel.emit(null);
    };
    /**
     * Submits the form
     */
    UnsubscribeComponent.prototype.submit = function () {
        var _this = this;
        this._siteService.unsubscribe()
            .subscribe(function (data) { _this.success(); }, function (error) { _this.onError.emit(error); });
    };
    /**
     * Handles a successful submission
     */
    UnsubscribeComponent.prototype.success = function () {
        localStorage.setItem('site_status', 'Active');
        localStorage.setItem('site_has_account', 'false');
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UnsubscribeComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UnsubscribeComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UnsubscribeComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UnsubscribeComponent.prototype, "onError", void 0);
    UnsubscribeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-unsubscribe',
            template: __webpack_require__("../../../../../src/shared/components/account/unsubscribe/unsubscribe.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__["a" /* RouteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__["a" /* RouteService */]])
    ], UnsubscribeComponent);
    return UnsubscribeComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/code/add-code/add-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n  \n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n      <h2>{{ 'Add Code' | translate }}</h2>\n\n      <label>{{ 'Type' | translate }}</label>\n      <select id=\"hashedit-add-code-type\"\n        [(ngModel)]=\"model.type\"\n        (change)=\"updateUrl($event.target.value)\"\n        name=\"type\">\n        <option value=\"template\">{{ 'Template' | translate }}</option>\n        <option value=\"stylesheet\">CSS</option>\n        <option value=\"script\">JS</option>\n        <option value=\"plugin\">{{ 'Plugin' | translate }}</option>\n      </select>\n\n      <label>{{ 'Name' | translate }}</label>\n      <input id=\"hashedit-add-code-name\" type=\"text\" maxlength=\"128\" placeholder=\"new-file\" required\n        [(ngModel)]=\"model.name\"\n        name=\"url\">\n\n      <div class=\"or\">{{ 'Or' | translate }}</div>\n\n      <respond-dropzone [url]=\"uploadUrl\" (onAdd)=\"uploaded()\"></respond-dropzone>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Add Code' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/code/add-code/add-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_code_service__ = __webpack_require__("../../../../../src/shared/services/code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCodeComponent = /** @class */ (function () {
    function AddCodeComponent(_codeService, _appService) {
        this._codeService = _codeService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onAdd.emit(null);
    };
    /**
     * Handles a successful upload
     */
    AddCodeComponent.prototype.uploaded = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddCodeComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddCodeComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddCodeComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddCodeComponent.prototype, "onError", void 0);
    AddCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-code',
            template: __webpack_require__("../../../../../src/shared/components/code/add-code/add-code.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_code_service__["a" /* CodeService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_code_service__["a" /* CodeService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], AddCodeComponent);
    return AddCodeComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/components/add-component/add-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Component' | translate }}</h2>\n\n    <label>{{ 'URL' | translate }}</label>\n    <input id=\"hashedit-add-component-url\" type=\"text\" maxlength=\"128\" placeholder=\"new-component\" required\n      [(ngModel)]=\"model.url\"\n      name=\"url\">\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Component' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/components/add-component/add-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__ = __webpack_require__("../../../../../src/shared/services/component.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddComponentComponent = /** @class */ (function () {
    function AddComponentComponent(_componentService) {
        this._componentService = _componentService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddComponentComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddComponentComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddComponentComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddComponentComponent.prototype, "onError", void 0);
    AddComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-component',
            template: __webpack_require__("../../../../../src/shared/components/components/add-component/add-component.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */]])
    ], AddComponentComponent);
    return AddComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/components/remove-component/remove-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n  \n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove Component' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.title}}</h3>\n        <small>/{{model.url}}</small>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove Component' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/components/remove-component/remove-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__ = __webpack_require__("../../../../../src/shared/services/component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemoveComponentComponent = /** @class */ (function () {
    function RemoveComponentComponent(_componentService, _appService) {
        this._componentService = _componentService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._appService.showToast('success', '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveComponentComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveComponentComponent.prototype, "component", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveComponentComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveComponentComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveComponentComponent.prototype, "onError", void 0);
    RemoveComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-component',
            template: __webpack_require__("../../../../../src/shared/components/components/remove-component/remove-component.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_component_service__["a" /* ComponentService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], RemoveComponentComponent);
    return RemoveComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/drawer/drawer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"app-drawer\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-drawer-top\">\n    <a class=\"app-collapse\" (click)=\"collapse()\"><i class=\"material-icons\">menu</i></a>\n  </div>  \n\n  <ul>\n    <li [class.active]=\"active === 'pages'\"><a [routerLink]=\"['/pages']\"><i class=\"material-icons\">description</i> <span>{{ 'Pages' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'components'\"><a [routerLink]=\"['/components']\"><i class=\"material-icons\">extension</i> <span>{{ 'Components' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'menus'\"><a [routerLink]=\"['/menus']\"><i class=\"material-icons\">subject</i> <span>{{ 'Menus' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'galleries'\"><a [routerLink]=\"['/galleries']\"><i class=\"material-icons\">photo_library</i> <span>{{ 'Galleries' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'forms'\"><a [routerLink]=\"['/forms']\"><i class=\"material-icons\">assignment</i> <span>{{ 'Forms' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'submissions'\"><a [routerLink]=\"['/submissions']\"><i class=\"material-icons\">email</i>  <span>{{ 'Submissions' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'plugins'\"><a [routerLink]=\"['/plugins']\"><i class=\"material-icons\">widgets</i> <span>{{ 'Plugins' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'files'\"><a [routerLink]=\"['/files']\"><i class=\"material-icons\">attach_file</i> <span>{{ 'Files' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'users'\"><a [routerLink]=\"['/users']\"><i class=\"material-icons\">group</i> <span>{{ 'Users' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'settings'\"><a [routerLink]=\"['/settings']\"><i class=\"material-icons\">settings</i> <span>{{ 'Settings' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'code'\"><a (click)=\"viewCode()\"><i class=\"material-icons\">code</i> <span>{{ 'Code' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'advanced'\"><a [routerLink]=\"['/advanced']\"><i class=\"material-icons\">build</i> <span>{{ 'Advanced' | translate }}</span></a></li>\n    <li [class.active]=\"active === 'account'\" *ngIf=\"hasAccount == true\"><a [routerLink]=\"['/account']\"><i class=\"material-icons\">account_circle</i> <span>{{ 'Account' | translate }}</span></a></li>\n    <li><a [href]=\"siteUrl\" target=\"_blank\"><i class=\"material-icons\">turned_in_not</i> <span>{{ 'View Site' | translate }}</span></a></li>\n    <li><a (click)=\"signOut()\"><i class=\"material-icons\">eject</i> <span>{{ 'Sign Out' | translate }}</span></a></li>\n  </ul>\n\n</nav>\n  "

/***/ }),

/***/ "../../../../../src/shared/components/drawer/drawer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(_siteService, _appService, _router, renderer) {
        this._siteService = _siteService;
        this._appService = _appService;
        this._router = _router;
        this.renderer = renderer;
        this.hasAccount = false;
        this._visible = false;
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this.hasAccount = false;
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
        this.hasAccount = (localStorage.getItem('site_has_account') == 'true'); // convert to boolean
        // retrieve settings
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
     * Collapses the drawer
     */
    DrawerComponent.prototype.collapse = function () {
        if (document.body.hasAttribute('drawer-collapse')) {
            document.body.removeAttribute('drawer-collapse');
        }
        else {
            document.body.setAttribute('drawer-collapse', '');
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DrawerComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DrawerComponent.prototype, "active", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DrawerComponent.prototype, "onHide", void 0);
    DrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-drawer',
            template: __webpack_require__("../../../../../src/shared/components/drawer/drawer.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], DrawerComponent);
    return DrawerComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/dropzone/dropzone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropzoneComponent = /** @class */ (function () {
    function DropzoneComponent(elementRef) {
        this.elementRef = elementRef;
        this._url = '/api/images/add';
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DropzoneComponent.prototype, "url", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DropzoneComponent.prototype, "onAdd", void 0);
    DropzoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-dropzone',
            template: '<form class="dropzone"></form>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DropzoneComponent);
    return DropzoneComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/files/remove-file/remove-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove File' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.name}}</h3>\n        <small>/file/{{model.name}}</small>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove File' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/files/remove-file/remove-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__ = __webpack_require__("../../../../../src/shared/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemoveFileComponent = /** @class */ (function () {
    function RemoveFileComponent(_fileService, _appService) {
        this._fileService = _fileService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._appService.showToast('success', '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveFileComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveFileComponent.prototype, "file", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFileComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFileComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFileComponent.prototype, "onError", void 0);
    RemoveFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-file',
            template: __webpack_require__("../../../../../src/shared/components/files/remove-file/remove-file.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], RemoveFileComponent);
    return RemoveFileComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/files/select-file/select-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <h2>{{ 'Select File' | translate }}</h2>\n\n    <respond-dropzone (onAdd)=\"list()\"></respond-dropzone>\n\n    <div id=\"files-list\" class=\"app-modal-list\">\n      <div class=\"app-modal-list-item\" *ngFor=\"let file of files\" (click)=\"select(file)\" [class.image]=\"file.thumb !== ''\">\n        <h2><span class=\"primary\">{{ file.name }}</span></h2>\n        <img *ngIf=\"file.thumb !== ''\" class=\"image\" src=\"{{file.thumb}}\">\n        <small>/files/{{ file.name }}</small>\n      </div>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\" class=\"primary\">{{ 'Cancel' | translate }}</a>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/files/select-file/select-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__ = __webpack_require__("../../../../../src/shared/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectFileComponent = /** @class */ (function () {
    function SelectFileComponent(_fileService) {
        this._fileService = _fileService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SelectFileComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectFileComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectFileComponent.prototype, "onSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectFileComponent.prototype, "onError", void 0);
    SelectFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-select-file',
            template: __webpack_require__("../../../../../src/shared/components/files/select-file/select-file.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_file_service__["a" /* FileService */]])
    ], SelectFileComponent);
    return SelectFileComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/forms/add-form-field/add-form-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Form Field' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Label' | translate }}</label>\n      <input id=\"hashedit-add-form-field-label\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.label\"\n        name=\"label\">\n\n      <label>{{ 'Type' | translate }}</label>\n      <select id=\"hashedit-add-form-field-type\"\n        [(ngModel)]=\"model.type\"\n        name=\"isNested\">\n        <option value=\"text\">{{ 'Text' | translate }}</option>\n        <option value=\"email\">{{ 'Email' | translate }}</option>\n        <option value=\"number\">{{ 'Number' | translate }}</option>\n        <option value=\"url\">{{ 'URL' | translate }}</option>\n        <option value=\"tel\">{{ 'Telephone' | translate }}</option>\n        <option value=\"date\">{{ 'Date' | translate }}</option>\n        <option value=\"time\">{{ 'Time' | translate }}</option>\n        <option value=\"textarea\">{{ 'Textarea' | translate }}</option>\n        <option value=\"select\">{{ 'Select List' | translate }}</option>\n        <option value=\"radiolist\">{{ 'Radio List' | translate }}</option>\n        <option value=\"checklist\">{{ 'Checkbox List' | translate }}</option>\n      </select>\n\n      <label>{{ 'Required?' | translate }}</label>\n      <select id=\"hashedit-add-form-field-required\"\n        [(ngModel)]=\"model.required\"\n        name=\"required\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'Options' | translate }}</label>\n      <input id=\"hashedit-add-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.options\"\n        name=\"options\">\n\n      <label>{{ 'Helper Text' | translate }}</label>\n      <input id=\"hashedit-add-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.helperText\"\n        name=\"helperText\">\n\n      <label>{{ 'Placeholder' | translate }}</label>\n      <input id=\"hashedit-add-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.placeholder\"\n        name=\"placeholder\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-add-form-field-cssclass\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Form Field' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/forms/add-form-field/add-form-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFormFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__ = __webpack_require__("../../../../../src/shared/services/form-field.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddFormFieldComponent = /** @class */ (function () {
    function AddFormFieldComponent(_formFieldService, _appService) {
        this._formFieldService = _formFieldService;
        this._appService = _appService;
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
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddFormFieldComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddFormFieldComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormFieldComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormFieldComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormFieldComponent.prototype, "onError", void 0);
    AddFormFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-form-field',
            template: __webpack_require__("../../../../../src/shared/components/forms/add-form-field/add-form-field.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], AddFormFieldComponent);
    return AddFormFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/forms/add-form/add-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Form' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Name' | translate }}</label>\n      <input id=\"hashedit-add-form-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.name\"\n        name=\"name\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-add-form-cssclass\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n      <label>{{ 'Validate with reCAPTCHA' | translate }}</label>\n      <select id=\"hashedit-add-form-validate\"\n        [(ngModel)]=\"model.validate\"\n        name=\"required\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'Success Message' | translate }}</label>\n      <input id=\"hashedit-add-form-success\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.success\"\n        name=\"success\">\n\n      <label>{{ 'Error Message' | translate }}</label>\n      <input id=\"hashedit-add-form-error\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.error\"\n        name=\"error\">\n\n      <label>{{ 'reCAPTCHA Error Message' | translate }}</label>\n      <input id=\"hashedit-add-form-recaptcha-error\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.recaptchaError\"\n        name=\"recaptchaError\">\n\n      <label>{{ 'Email Notifications' | translate }}</label>\n      <input id=\"hashedit-add-form-notify\" type=\"text\" maxlength=\"2048\" placeholder=\"\"\n        [(ngModel)]=\"model.notify\"\n        name=\"recipient\">\n      <small>{{ 'Separate multiples with commas.  If an email is not specified, an email will be sent to the default site email.' | translate }}</small>\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Form' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/forms/add-form/add-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__ = __webpack_require__("../../../../../src/shared/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddFormComponent = /** @class */ (function () {
    function AddFormComponent(_formService, _appService) {
        this._formService = _formService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._appService.showToast('success', '');
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddFormComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddFormComponent.prototype, "onError", void 0);
    AddFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-form',
            template: __webpack_require__("../../../../../src/shared/components/forms/add-form/add-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], AddFormComponent);
    return AddFormComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/forms/edit-form-field/edit-form-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Edit Form Field' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Label' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-label\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.label\"\n        name=\"label\">\n\n      <label>{{ 'Type' | translate }}</label>\n      <select id=\"hashedit-edit-form-field-type\"\n        [(ngModel)]=\"model.type\"\n        name=\"isNested\">\n        <option value=\"text\">{{ 'Text' | translate }}</option>\n        <option value=\"email\">{{ 'Email' | translate }}</option>\n        <option value=\"number\">{{ 'Number' | translate }}</option>\n        <option value=\"url\">{{ 'URL' | translate }}</option>\n        <option value=\"tel\">{{ 'Telephone' | translate }}</option>\n        <option value=\"date\">{{ 'Date' | translate }}</option>\n        <option value=\"time\">{{ 'Time' | translate }}</option>\n        <option value=\"textarea\">{{ 'Textarea' | translate }}</option>\n        <option value=\"select\">{{ 'Select List' | translate }}</option>\n        <option value=\"radiolist\">{{ 'Radio List' | translate }}</option>\n        <option value=\"checklist\">{{ 'Checkbox List' | translate }}</option>\n      </select>\n\n      <label>{{ 'Required?' | translate }}</label>\n      <select id=\"hashedit-edit-form-field-required\"\n        [(ngModel)]=\"model.required\"\n        name=\"required\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'Options' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.options\"\n        name=\"options\">\n\n      <label>{{ 'Helper Text' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.helperText\"\n        name=\"helperText\">\n\n      <label>{{ 'Placeholder' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-options\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.placeholder\"\n        name=\"placeholder\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-edit-form-field-cssclass\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/forms/edit-form-field/edit-form-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__ = __webpack_require__("../../../../../src/shared/services/form-field.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditFormFieldComponent = /** @class */ (function () {
    function EditFormFieldComponent(_formFieldService, _appService) {
        this._formFieldService = _formFieldService;
        this._appService = _appService;
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
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditFormFieldComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditFormFieldComponent.prototype, "field", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormFieldComponent.prototype, "onError", void 0);
    EditFormFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-edit-form-field',
            template: __webpack_require__("../../../../../src/shared/components/forms/edit-form-field/edit-form-field.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], EditFormFieldComponent);
    return EditFormFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/forms/edit-form/edit-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #editForm=\"ngForm\">\n\n    <h2>{{ 'Edit Form' | translate }}</h2>\n\n    <div class=\"app-modal-body\">\n\n      <label>{{ 'Name' | translate }}</label>\n      <input id=\"hashedit-edit-form-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.name\"\n        name=\"name\">\n\n      <label>{{ 'CSS Class' | translate }}</label>\n      <input id=\"hashedit-edit-form-cssclass\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.cssClass\"\n        name=\"cssClass\">\n\n      <label>{{ 'Validate with reCAPTCHA' | translate }}</label>\n      <select id=\"hashedit-edit-form-validate\"\n        [(ngModel)]=\"model.validate\"\n        name=\"required\">\n        <option value=\"true\">{{ 'Yes' | translate }}</option>\n        <option value=\"false\">{{ 'No' | translate }}</option>\n      </select>\n\n      <label>{{ 'Success Message' | translate }}</label>\n      <input id=\"hashedit-edit-form-success\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.success\"\n        name=\"success\">\n\n      <label>{{ 'Error Message' | translate }}</label>\n      <input id=\"hashedit-edit-form-error\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.error\"\n        name=\"error\">\n\n      <label>{{ 'reCAPTCHA Error Message' | translate }}</label>\n      <input id=\"hashedit-edit-form-recaptcha-error\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n        [(ngModel)]=\"model.recaptchaError\"\n        name=\"recaptchaError\">\n\n      <label>{{ 'Email Notifications' | translate }}</label>\n      <input id=\"hashedit-edit-form-notify\" type=\"text\" maxlength=\"2048\" placeholder=\"\"\n        [(ngModel)]=\"model.notify\"\n        name=\"notify\">\n      <small>{{ 'Separate multiples with commas.  If an email is not specified, an email will be sent to the default site email.' | translate }}</small>\n\n    </div>\n    <!-- /.app-modal-body -->\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Update' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/forms/edit-form/edit-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__ = __webpack_require__("../../../../../src/shared/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditFormComponent = /** @class */ (function () {
    function EditFormComponent(_formService, _appService) {
        this._formService = _formService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onUpdate.emit(null);
    };
    /**
     * Handles an error
     */
    EditFormComponent.prototype.error = function () {
        console.log('[respond.error] ' + this.errorMessage);
        this._appService.showToast('failure', '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditFormComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditFormComponent.prototype, "form", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditFormComponent.prototype, "onError", void 0);
    EditFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-edit-form',
            template: __webpack_require__("../../../../../src/shared/components/forms/edit-form/edit-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], EditFormComponent);
    return EditFormComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/forms/remove-form-field/remove-form-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Form Field' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.label}}</h3>\n      <p>{{model.type}}</p>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/forms/remove-form-field/remove-form-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveFormFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__ = __webpack_require__("../../../../../src/shared/services/form-field.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveFormFieldComponent = /** @class */ (function () {
    function RemoveFormFieldComponent(_formFieldService) {
        this._formFieldService = _formFieldService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveFormFieldComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveFormFieldComponent.prototype, "field", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormFieldComponent.prototype, "onError", void 0);
    RemoveFormFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-form-field',
            template: __webpack_require__("../../../../../src/shared/components/forms/remove-form-field/remove-form-field.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_field_service__["a" /* FormFieldService */]])
    ], RemoveFormFieldComponent);
    return RemoveFormFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/forms/remove-form/remove-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n  \n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n    <h2>{{ 'Remove Form' | translate }}</h2>\n\n    <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n    <div class=\"to-be-removed\">\n      <h3>{{model.name}}</h3>\n      <p>{{model.id}}</p>\n    </div>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Remove' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/forms/remove-form/remove-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__ = __webpack_require__("../../../../../src/shared/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemoveFormComponent = /** @class */ (function () {
    function RemoveFormComponent(_formService, _appService) {
        this._formService = _formService;
        this._appService = _appService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveFormComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveFormComponent.prototype, "form", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveFormComponent.prototype, "onError", void 0);
    RemoveFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-form',
            template: __webpack_require__("../../../../../src/shared/components/forms/remove-form/remove-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], RemoveFormComponent);
    return RemoveFormComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/galleries/add-gallery/add-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n<div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n  <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n    <h2>{{ 'Add Gallery' | translate }}</h2>\n\n    <label>{{ 'Name' | translate }}</label>\n    <input id=\"hashedit-add-gallery-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n      [(ngModel)]=\"model.name\"\n      name=\"name\">\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n      <button type=\"submit\">{{ 'Add Gallery' | translate }}</button>\n    </div>\n\n  </form>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/galleries/add-gallery/add-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__ = __webpack_require__("../../../../../src/shared/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddGalleryComponent = /** @class */ (function () {
    function AddGalleryComponent(_galleryService) {
        this._galleryService = _galleryService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddGalleryComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddGalleryComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddGalleryComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddGalleryComponent.prototype, "onError", void 0);
    AddGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-gallery',
            template: __webpack_require__("../../../../../src/shared/components/galleries/add-gallery/add-gallery.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]])
    ], AddGalleryComponent);
    return AddGalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/galleries/edit-caption/edit-caption.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n      <h2>{{ 'Edit Caption' | translate }}</h2>\n\n      <label>{{ 'Caption' | translate }}</label>\n      <input id=\"hashedit-edit-caption\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.caption\"\n        name=\"label\">\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Update' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/galleries/edit-caption/edit-caption.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCaptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__ = __webpack_require__("../../../../../src/shared/services/gallery-image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditCaptionComponent = /** @class */ (function () {
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
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditCaptionComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditCaptionComponent.prototype, "image", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "gallery", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditCaptionComponent.prototype, "onError", void 0);
    EditCaptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-edit-caption',
            template: __webpack_require__("../../../../../src/shared/components/galleries/edit-caption/edit-caption.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */]])
    ], EditCaptionComponent);
    return EditCaptionComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/galleries/edit-gallery/edit-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n  \n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #editForm=\"ngForm\">\n\n      <h2>{{ 'Edit Gallery' | translate }}</h2>\n\n      <label>{{ 'Name' | translate }}</label>\n      <input id=\"hashedit-edit-gallery-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.name\"\n        name=\"name\">\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Update' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/galleries/edit-gallery/edit-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__ = __webpack_require__("../../../../../src/shared/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditGalleryComponent = /** @class */ (function () {
    function EditGalleryComponent(_galleryService) {
        this._galleryService = _galleryService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditGalleryComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditGalleryComponent.prototype, "gallery", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditGalleryComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditGalleryComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditGalleryComponent.prototype, "onError", void 0);
    EditGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-edit-gallery',
            template: __webpack_require__("../../../../../src/shared/components/galleries/edit-gallery/edit-gallery.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]])
    ], EditGalleryComponent);
    return EditGalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/galleries/remove-gallery-image/remove-gallery-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n  \n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove Image' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.name}}</h3>\n        <small>{{model.url}}</small>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button class=\"primary\" type=\"submit\">{{ 'Remove' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/galleries/remove-gallery-image/remove-gallery-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveGalleryImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__ = __webpack_require__("../../../../../src/shared/services/gallery-image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveGalleryImageComponent = /** @class */ (function () {
    function RemoveGalleryImageComponent(_galleryImageService) {
        this._galleryImageService = _galleryImageService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveGalleryImageComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveGalleryImageComponent.prototype, "image", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryImageComponent.prototype, "gallery", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryImageComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryImageComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryImageComponent.prototype, "onError", void 0);
    RemoveGalleryImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-gallery-image',
            template: __webpack_require__("../../../../../src/shared/components/galleries/remove-gallery-image/remove-gallery-image.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_image_service__["a" /* GalleryImageService */]])
    ], RemoveGalleryImageComponent);
    return RemoveGalleryImageComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/galleries/remove-gallery/remove-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n    \n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove Gallery' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.name}}</h3>\n        <p>{{model.id}}</p>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/galleries/remove-gallery/remove-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__ = __webpack_require__("../../../../../src/shared/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveGalleryComponent = /** @class */ (function () {
    function RemoveGalleryComponent(_galleryService) {
        this._galleryService = _galleryService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveGalleryComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveGalleryComponent.prototype, "gallery", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveGalleryComponent.prototype, "onError", void 0);
    RemoveGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-gallery',
            template: __webpack_require__("../../../../../src/shared/components/galleries/remove-gallery/remove-gallery.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]])
    ], RemoveGalleryComponent);
    return RemoveGalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/menus/add-menu-item/add-menu-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal app-card\" [class.visible]=\"visible === true\" [class.flip]=\"flip === true\">\n\n    <div class=\"app-card-front\">\n\n      <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n        <h2>{{ 'Add Menu Item' | translate }}</h2>\n\n        <label>{{ 'Text (or HTML)' | translate }}</label>\n        <input id=\"hashedit-add-menu-item-html\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n          [(ngModel)]=\"model.html\"\n          name=\"html\">\n\n        <label>{{ 'CSS Class' | translate }}</label>\n        <input id=\"hashedit-add-menu-item-css-class\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n          [(ngModel)]=\"model.cssClass\"\n          name=\"cssClass\">\n\n        <label>{{ 'Is Nested?' | translate }}</label>\n        <select id=\"hashedit-add-menu-item-is-nested\"\n          [(ngModel)]=\"model.isNested\"\n          name=\"isNested\">\n          <option value=\"true\">{{ 'Yes' | translate }}</option>\n          <option value=\"false\">{{ 'No' | translate }}</option>\n        </select>\n\n        <label>{{ 'URL' | translate }} <a class=\"toggle-select-url\" (click)=\"flipCard()\">{{ 'Select URL' | translate }}</a></label>\n        <input id=\"hashedit-add-menu-item-url\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n          [(ngModel)]=\"model.url\"\n          name=\"url\">\n\n        <label>{{ 'Target' | translate }}</label>\n        <input id=\"hashedit-add-menu-item-target\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n          [(ngModel)]=\"model.target\"\n          name=\"target\">\n\n        <div class=\"actions\">\n          <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n          <button type=\"submit\">{{ 'Add' | translate }}</button>\n        </div>\n\n      </form>\n\n    </div>\n    <!-- /.app-card-front -->\n\n    <div class=\"app-card-back\">\n\n      <h2>{{ 'Select URL' | translate }}</h2>\n\n      <div id=\"pages-list\" class=\"app-modal-list\">\n        <div class=\"app-list-item\" *ngFor=\"let page of pages\" (click)=\"setUrl(page)\">{{page.url}}</div>\n      </div>\n\n      <div class=\"actions\">\n        <a class=\"primary toggle-select-url\" data-i18n (click)=\"flipCard()\">Cancel</a>\n      </div>\n\n    </div>\n    <!-- /.app-card-back -->\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/menus/add-menu-item/add-menu-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__ = __webpack_require__("../../../../../src/shared/services/menu-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__ = __webpack_require__("../../../../../src/shared/services/page.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMenuItemComponent = /** @class */ (function () {
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
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddMenuItemComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddMenuItemComponent.prototype, "menu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuItemComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuItemComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuItemComponent.prototype, "onError", void 0);
    AddMenuItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-menu-item',
            template: __webpack_require__("../../../../../src/shared/components/menus/add-menu-item/add-menu-item.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]])
    ], AddMenuItemComponent);
    return AddMenuItemComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/menus/add-menu/add-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n      <h2>{{ 'Add Menu' | translate }}</h2>\n\n      <label>{{ 'Name' | translate }}</label>\n      <input id=\"hashedit-add-menu-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.name\"\n        name=\"name\">\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Add' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/menus/add-menu/add-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__ = __webpack_require__("../../../../../src/shared/services/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddMenuComponent = /** @class */ (function () {
    function AddMenuComponent(_menuService) {
        this._menuService = _menuService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddMenuComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddMenuComponent.prototype, "onError", void 0);
    AddMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-menu',
            template: __webpack_require__("../../../../../src/shared/components/menus/add-menu/add-menu.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]])
    ], AddMenuComponent);
    return AddMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/menus/edit-menu-item/edit-menu-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal app-card\" [class.visible]=\"visible === true\" [class.flip]=\"flip === true\">\n\n    <div class=\"app-card-front\">\n\n      <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n        <h2>{{ 'Edit Menu Item' | translate }}</h2>\n\n        <label>{{ 'Text (or HTML)' | translate }}</label>\n        <input id=\"hashedit-edit-menu-item-html\" type=\"text\" required\n          [(ngModel)]=\"model.html\"\n          name=\"html\">\n\n        <label>{{ 'CSS Class' | translate }}</label>\n        <input id=\"hashedit-edit-menu-item-css-class\" type=\"text\" maxlength=\"128\"\n          [(ngModel)]=\"model.cssClass\"\n          name=\"cssClass\">\n\n        <label>{{ 'Is Nested?' | translate }}</label>\n        <select id=\"hashedit-edit-menu-item-is-nested\"\n          [(ngModel)]=\"model.isNested\"\n          name=\"isNested\">\n          <option value=\"true\">{{ 'Yes' | translate }}</option>\n          <option value=\"false\">{{ 'No' | translate }}</option>\n        </select>\n\n        <label>{{ 'URL' | translate }} <a class=\"toggle-select-url\" (click)=\"flipCard()\">{{ 'Select URL' | translate }}</a></label>\n        <input id=\"hashedit-add-menu-item-url\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n          [(ngModel)]=\"model.url\"\n          name=\"url\">\n\n        <label>{{ 'Target' | translate }}</label>\n        <input id=\"hashedit-add-menu-item-target\" type=\"text\" maxlength=\"128\" placeholder=\"\"\n          [(ngModel)]=\"model.target\"\n          name=\"target\">\n\n        <div class=\"actions\">\n          <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n          <button type=\"submit\">{{ 'Update' | translate }}</button>\n        </div>\n\n      </form>\n\n    </div>\n    <!-- /.app-card-front -->\n\n    <div class=\"app-card-back\">\n\n      <h2>{{ 'Select URL' | translate }}</h2>\n\n      <div id=\"pages-list\" class=\"app-modal-list\">\n        <div class=\"app-list-item\" *ngFor=\"let page of pages\" (click)=\"setUrl(page)\">{{page.url}}</div>\n      </div>\n\n      <div class=\"actions\">\n        <a class=\"primary toggle-select-url\" (click)=\"flipCard()\">{{ 'Cancel' | translate }}</a>\n      </div>\n\n    </div>\n    <!-- /.app-card-back -->\n\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/menus/edit-menu-item/edit-menu-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__ = __webpack_require__("../../../../../src/shared/services/menu-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__ = __webpack_require__("../../../../../src/shared/services/page.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditMenuItemComponent = /** @class */ (function () {
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
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditMenuItemComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "menu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditMenuItemComponent.prototype, "item", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuItemComponent.prototype, "onError", void 0);
    EditMenuItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-edit-menu-item',
            template: __webpack_require__("../../../../../src/shared/components/menus/edit-menu-item/edit-menu-item.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_page_service__["a" /* PageService */]])
    ], EditMenuItemComponent);
    return EditMenuItemComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/menus/edit-menu/edit-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #editForm=\"ngForm\">\n\n      <h2>{{ 'Edit Menu' | translate }}</h2>\n\n      <label>{{ 'Name' | translate }}</label>\n      <input id=\"hashedit-edit-menu-name\" type=\"text\" maxlength=\"128\" placeholder=\"\" required\n        [(ngModel)]=\"model.name\"\n        name=\"name\">\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Update' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/menus/edit-menu/edit-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__ = __webpack_require__("../../../../../src/shared/services/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditMenuComponent = /** @class */ (function () {
    function EditMenuComponent(_menuService) {
        this._menuService = _menuService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditMenuComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditMenuComponent.prototype, "menu", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditMenuComponent.prototype, "onError", void 0);
    EditMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-edit-menu',
            template: __webpack_require__("../../../../../src/shared/components/menus/edit-menu/edit-menu.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]])
    ], EditMenuComponent);
    return EditMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/menus/remove-menu-item/remove-menu-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove Menu Item' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.html}}</h3>\n        <small>{{model.url}}</small>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/menus/remove-menu-item/remove-menu-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveMenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__ = __webpack_require__("../../../../../src/shared/services/menu-item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveMenuItemComponent = /** @class */ (function () {
    function RemoveMenuItemComponent(_menuItemService) {
        this._menuItemService = _menuItemService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveMenuItemComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveMenuItemComponent.prototype, "item", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "menu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuItemComponent.prototype, "onError", void 0);
    RemoveMenuItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-menu-item',
            template: __webpack_require__("../../../../../src/shared/components/menus/remove-menu-item/remove-menu-item.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_item_service__["a" /* MenuItemService */]])
    ], RemoveMenuItemComponent);
    return RemoveMenuItemComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/menus/remove-menu/remove-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove Menu' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.name}}</h3>\n        <p>{{model.id}}</p>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/menus/remove-menu/remove-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__ = __webpack_require__("../../../../../src/shared/services/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveMenuComponent = /** @class */ (function () {
    function RemoveMenuComponent(_menuService) {
        this._menuService = _menuService;
        this._visible = false;
        // outputs
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveMenuComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveMenuComponent.prototype, "menu", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveMenuComponent.prototype, "onError", void 0);
    RemoveMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-menu',
            template: __webpack_require__("../../../../../src/shared/components/menus/remove-menu/remove-menu.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_menu_service__["a" /* MenuService */]])
    ], RemoveMenuComponent);
    return RemoveMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/pages/add-page/add-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n    \n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n      <h2>{{ 'Add Page' | translate }}</h2>\n\n      <label>{{ 'Path' | translate }}</label>\n      <select id=\"hashedit-add-page-path\"\n        [(ngModel)]=\"model.path\"\n        name=\"path\">\n        <option *ngFor=\"let route of routes\" [value]=\"route\">{{route}}</option>\n      </select>\n\n      <label>{{ 'URL' | translate }}</label>\n      <input id=\"hashedit-add-page-url\" type=\"text\" maxlength=\"128\" placeholder=\"new-page\" required\n        [(ngModel)]=\"model.url\"\n        name=\"url\">\n\n      <label>{{ 'Title' | translate }}</label>\n      <input id=\"hashedit-add-page-title\" type=\"text\" maxlength=\"128\" required\n        [(ngModel)]=\"model.title\"\n        name=\"title\">\n\n      <label>{{ 'Description' | translate }}</label>\n      <input id=\"hashedit-add-page-desc\" type=\"text\" maxlength=\"128\"\n        [(ngModel)]=\"model.description\"\n        name=\"description\">\n\n      <label>{{ 'Template' | translate }}</label>\n      <select id=\"hashedit-add-page-template\"\n        [(ngModel)]=\"model.template\"\n        name=\"template\">\n        <option *ngFor=\"let template of templates\" [value]=\"template\">{{template}}</option>\n      </select>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\" [disabled]=\"processing\">{{ 'Add Page' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/pages/add-page/add-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__ = __webpack_require__("../../../../../src/shared/services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__ = __webpack_require__("../../../../../src/shared/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPageComponent = /** @class */ (function () {
    function AddPageComponent(_pageService, _siteService, _routeService) {
        this._pageService = _pageService;
        this._siteService = _siteService;
        this._routeService = _routeService;
        // set processing
        this.processing = false;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        // set processing
        this.processing = false;
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddPageComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddPageComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddPageComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddPageComponent.prototype, "onError", void 0);
    AddPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-page',
            template: __webpack_require__("../../../../../src/shared/components/pages/add-page/add-page.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */]])
    ], AddPageComponent);
    return AddPageComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/pages/page-settings/page-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #editForm=\"ngForm\">\n\n      <h2>{{ 'Page Settings' | translate }}</h2>\n\n      <div class=\"app-modal-body\">\n\n        <label>{{ 'Title' | translate }}</label>\n        <input id=\"hashedit-page-settings-title\" type=\"text\" maxlength=\"128\" required\n          [(ngModel)]=\"model.title\"\n          name=\"title\">\n\n        <label>{{ 'Description' | translate }}</label>\n        <input id=\"hashedit-page-settings-description\" type=\"text\" maxlength=\"128\"\n          [(ngModel)]=\"model.description\"\n          name=\"description\">\n\n        <label>{{ 'Keywords' | translate }}</label>\n        <input id=\"hashedit-page-settings-keywords\" type=\"text\" maxlength=\"128\"\n          [(ngModel)]=\"model.keywords\"\n          name=\"keywords\">\n\n        <label>{{ 'Tags' | translate }}</label>\n        <input id=\"hashedit-page-settings-tags\" type=\"text\" maxlength=\"128\"\n          [(ngModel)]=\"model.tags\"\n          name=\"tags\">\n          \n        <label>{{ 'Location' | translate }}</label>\n        <input id=\"hashedit-page-settings-location\" type=\"text\" maxlength=\"128\"\n          [(ngModel)]=\"model.location\"\n          name=\"location\">\n          \n        <label>{{ 'Photo' | translate }} <a (click)=\"showSelect()\">{{ 'Select' | translate }}</a></label>\n        <input id=\"hashedit-page-settings-photo\" type=\"text\" maxlength=\"128\"\n          [(ngModel)]=\"model.photo\"\n          name=\"photo\">\n\n        <label>{{ 'Custom Header' | translate }}</label>\n        <textarea id=\"hashedit-page-settings-custom-header\" type=\"text\" maxlength=\"256\"\n          [(ngModel)]=\"model.customHeader\"\n          name=\"customHeader\"></textarea>\n        <small>{{ 'Custom HTML content to be put in the header (e.g. meta tags, stylesheets)' | translate }}</small>\n\n        <label>{{ 'Custom Footer' | translate }}</label>\n        <textarea id=\"hashedit-page-settings-custom-footer\" type=\"text\" maxlength=\"256\"\n          [(ngModel)]=\"model.customFooter\"\n          name=\"customFooter\"></textarea>\n        <small>{{ 'Custom HTML content to be put in the footer (e.g. javascript)' | translate }}</small>\n\n        <label>{{ 'Callout' | translate }}</label>\n        <input id=\"hashedit-page-settings-callout\" type=\"text\" maxlength=\"128\"\n          [(ngModel)]=\"model.callout\"\n          name=\"callout\">\n\n        <label>{{ 'Language' | translate }}</label>\n        <select id=\"hashedit-page-settings-language\"\n          [(ngModel)]=\"model.language\"\n          name=\"language\">\n          <option value=\"en\">English (en)</option>\n          <option value=\"es\">Español (es)</option>\n          <option value=\"fr\">Français (fr)</option>\n          <option value=\"gr\">Ελληνικά (gr)</option>\n          <option value=\"ru\">Русский (ru)</option>\n        </select>\n\n        <label>{{ 'Direction' | translate }}</label>\n        <select id=\"hashedit-page-settings-direction\"\n          [(ngModel)]=\"model.direction\"\n          name=\"direction\">\n          <option value=\"ltr\">{{ 'Left-to-Right' | translate }}</option>\n          <option value=\"rtl\">{{ 'Right-to-Left' | translate }}</option>\n        </select>\n\n        <label>{{ 'Template' | translate }}</label>\n        <select id=\"hashedit-add-page-template\"\n          [(ngModel)]=\"model.template\"\n          name=\"template\">\n          <option *ngFor=\"let template of templates\" [value]=\"template\">{{template}}</option>\n        </select>\n\n      </div>\n      <!-- /.app-modal-body -->\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Update' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n  <respond-select-file [visible]=\"selectVisible\" (onCancel)=\"reset()\"  (onSelect)=\"select($event)\"></respond-select-file>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/shared/components/pages/page-settings/page-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__ = __webpack_require__("../../../../../src/shared/services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__ = __webpack_require__("../../../../../src/shared/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageSettingsComponent = /** @class */ (function () {
    function PageSettingsComponent(_pageService, _siteService, _routeService) {
        this._pageService = _pageService;
        this._siteService = _siteService;
        this._routeService = _routeService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
            .subscribe(function (data) { _this.success(); }, function (error) { _this.errorMessage = _this.onError.emit(error); });
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
    PageSettingsComponent.prototype.reset = function () {
        this.selectVisible = false;
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
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PageSettingsComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PageSettingsComponent.prototype, "page", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PageSettingsComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PageSettingsComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PageSettingsComponent.prototype, "onError", void 0);
    PageSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-page-settings',
            template: __webpack_require__("../../../../../src/shared/components/pages/page-settings/page-settings.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_route_service__["a" /* RouteService */]])
    ], PageSettingsComponent);
    return PageSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/pages/remove-page/remove-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove Page' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.title}}</h3>\n        <small>/{{model.url}}</small>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove Page' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/pages/remove-page/remove-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__ = __webpack_require__("../../../../../src/shared/services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__ = __webpack_require__("../../../../../src/shared/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemovePageComponent = /** @class */ (function () {
    function RemovePageComponent(_pageService, _routeService) {
        this._pageService = _pageService;
        this._routeService = _routeService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemovePageComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemovePageComponent.prototype, "page", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePageComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePageComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePageComponent.prototype, "onError", void 0);
    RemovePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-page',
            template: __webpack_require__("../../../../../src/shared/components/pages/remove-page/remove-page.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__["a" /* RouteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_route_service__["a" /* RouteService */]])
    ], RemovePageComponent);
    return RemovePageComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/plugins/remove-plugin/remove-plugin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove Plugin' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.title}}</h3>\n        <small>{{model.selector}}</small>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove Plugin' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/plugins/remove-plugin/remove-plugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovePluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemovePluginComponent = /** @class */ (function () {
    function RemovePluginComponent(_siteService) {
        this._siteService = _siteService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemovePluginComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemovePluginComponent.prototype, "plugin", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePluginComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePluginComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemovePluginComponent.prototype, "onError", void 0);
    RemovePluginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-plugin',
            template: __webpack_require__("../../../../../src/shared/components/plugins/remove-plugin/remove-plugin.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */]])
    ], RemovePluginComponent);
    return RemovePluginComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/submissions/remove-submission/remove-submission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove Submission' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.name}}</h3>\n        <small>{{model.formId}}</small>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove Submission' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/submissions/remove-submission/remove-submission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveSubmissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__ = __webpack_require__("../../../../../src/shared/services/submission.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveSubmissionComponent = /** @class */ (function () {
    function RemoveSubmissionComponent(_submissionService) {
        this._submissionService = _submissionService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveSubmissionComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveSubmissionComponent.prototype, "submission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveSubmissionComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveSubmissionComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveSubmissionComponent.prototype, "onError", void 0);
    RemoveSubmissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-submission',
            template: __webpack_require__("../../../../../src/shared/components/submissions/remove-submission/remove-submission.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */]])
    ], RemoveSubmissionComponent);
    return RemoveSubmissionComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/submissions/view-submission/view-submission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <h2>{{ 'View Submission' | translate }}</h2>\n\n    <table class=\"details\">\n\n      <tr>\n        <td>{{ 'Date' | translate }}</td>\n        <td>{{ model.date }}</td>\n      </tr>\n      <tr>\n        <td>{{ 'Form' | translate }}</td>\n        <td>{{ model.formId }}</td>\n      </tr>\n      <tr *ngFor=\"let field of model.fields\">\n        <td>{{ field.id  }}</td>\n        <td>{{ field.value }}</td>\n      </tr>\n\n    </table>\n\n    <div class=\"actions\">\n      <a (click)=\"hide()\" class=\"primary\">{{ 'Done' | translate }}</a>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/submissions/view-submission/view-submission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSubmissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__ = __webpack_require__("../../../../../src/shared/services/submission.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewSubmissionComponent = /** @class */ (function () {
    function ViewSubmissionComponent(_submissionService) {
        this._submissionService = _submissionService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ViewSubmissionComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ViewSubmissionComponent.prototype, "submission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewSubmissionComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewSubmissionComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewSubmissionComponent.prototype, "onError", void 0);
    ViewSubmissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-view-submission',
            template: __webpack_require__("../../../../../src/shared/components/submissions/view-submission/view-submission.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_submission_service__["a" /* SubmissionService */]])
    ], ViewSubmissionComponent);
    return ViewSubmissionComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/subscribe/subscribe.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"app-status status-trial\" *ngIf=\"status == 'Trial'\" (click)=\"checkout()\">\n  <p>{{ 'Trial started.' | translate }} {{ daysRemaining }} <span>{{ 'days remaining.' | translate }} {{ 'Activate now.' | translate }}</span></p>\n  <i class=\"material-icons\">keyboard_arrow_right</i>\n</a>\n\n<a class=\"app-status status-expired\" *ngIf=\"status == 'Expired'\" (click)=\"checkout()\">\n  <p>{{ 'Subscription expired.' | translate }} {{ 'Activate now.' | translate }}</p>\n  <i class=\"material-icons\">keyboard_arrow_right</i>\n</a>"

/***/ }),

/***/ "../../../../../src/shared/components/subscribe/subscribe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__ = __webpack_require__("../../../../../src/shared/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent(_siteService, _appService, renderer) {
        this._siteService = _siteService;
        this._appService = _appService;
        this.renderer = renderer;
    }
    /**
     * Init pages
     */
    SubscribeComponent.prototype.ngOnInit = function () {
        this.status = 'Active';
        this.hasAccount = false;
        this.daysRemaining = 0;
        this.activationUrl = '';
        // get app settings
        this.settings();
    };
    /**
     * Get settings
     */
    SubscribeComponent.prototype.settings = function () {
        // set trial information
        this.status = localStorage.getItem('site_status');
        this.hasAccount = (localStorage.getItem('site_has_account') == 'true'); // convert to boolean
        this.daysRemaining = parseInt(localStorage.getItem('site_trial_days_remaining'));
        // activation
        this.activationMethod = localStorage.getItem('activation_method');
        this.activationUrl = localStorage.getItem('activation_url');
        this.stripeAmount = parseInt(localStorage.getItem('stripe_amount'));
        this.stripeName = localStorage.getItem('stripe_name');
        this.stripeDescription = localStorage.getItem('stripe_description');
        this.stripePublishableKey = localStorage.getItem('stripe_publishable_key');
        this.stripeCurrency = localStorage.getItem('stripe_currency');
        // set body attribute
        if (this.status.toUpperCase() == 'EXPIRED' || this.status.toUpperCase() == 'TRIAL') {
            document.body.setAttribute('show-status', '');
        }
        else {
            document.body.removeAttribute('show-status');
        }
    };
    /**
     * Stripe checkout
     */
    SubscribeComponent.prototype.checkout = function () {
        var context = this;
        // handle stripe activation
        if (this.activationMethod == 'Stripe') {
            var handler = window.StripeCheckout.configure({
                key: this.stripePublishableKey,
                locale: 'auto',
                token: function (token) {
                    var _this = this;
                    // subscribe
                    context._siteService.subscribe(token.id, token.email)
                        .subscribe(function (data) {
                        context.subscribed();
                        _this._appService.showToast('success', '');
                    }, function (error) { _this._appService.showToast('failure', ''); });
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
    SubscribeComponent.prototype.subscribed = function () {
        localStorage.setItem('site_status', 'Active');
        this.status = 'Active';
        localStorage.setItem('site_has_account', 'true');
        this.hasAccount = true;
        document.body.removeAttribute('show-status');
    };
    SubscribeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-subscribe',
            template: __webpack_require__("../../../../../src/shared/components/subscribe/subscribe.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_site_service__["a" /* SiteService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/users/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n    \n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n      <h2>{{ 'Add User' | translate }}</h2>\n\n      <div class=\"app-modal-body\">\n\n        <label>{{ 'Email' | translate }}</label>\n        <input id=\"hashedit-add-user-email\" type=\"text\" maxlength=\"128\" required\n          [(ngModel)]=\"model.email\"\n          name=\"email\">\n\n        <label>{{ 'First Name' | translate }}</label>\n        <input id=\"hashedit-add-user-first-name\" type=\"text\" maxlength=\"128\" required\n          [(ngModel)]=\"model.firstName\"\n          name=\"firstName\">\n\n        <label>{{ 'Last Name' | translate }}</label>\n        <input id=\"hashedit-add-user-last-name\" type=\"text\" maxlength=\"128\" required\n          [(ngModel)]=\"model.lastName\"\n          name=\"lastName\">\n\n        <label>{{ 'Password' | translate }}</label>\n        <input id=\"hashedit-add-user-password\" type=\"password\" maxlength=\"128\" required\n          [(ngModel)]=\"model.password\"\n          name=\"password\">\n\n        <label>{{ 'Retype Password' | translate }}</label>\n        <input id=\"hashedit-add-user-retype\" type=\"password\" maxlength=\"128\" required\n          [(ngModel)]=\"model.retype\"\n          name=\"retype\">\n\n        <label>{{ 'Language' | translate }}</label>\n        <select id=\"hashedit-add-user-language\"\n          [(ngModel)]=\"model.language\"\n          name=\"language\">\n          <option *ngFor=\"let language of languages\" [value]=\"language.code\">{{language.text}}</option>\n        </select>\n\n      </div>\n      <!-- /.app-modal-body -->\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Add User' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/users/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(_userService, _appService) {
        this._userService = _userService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
            this._appService.showToast('failure', 'The password does not match the retype field');
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
        this._visible = false;
        this.onAdd.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AddUserComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "onError", void 0);
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-add-user',
            template: __webpack_require__("../../../../../src/shared/components/users/add-user/add-user.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/users/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n  \n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #addForm=\"ngForm\">\n\n      <h2>{{ 'Edit User' | translate }}</h2>\n\n      <div class=\"app-modal-body\">\n\n        <label>{{ 'Email' | translate }}</label>\n        <input id=\"hashedit-edit-user-email\" type=\"text\" maxlength=\"128\" required\n          [(ngModel)]=\"model.email\"\n          name=\"email\" disabled=\"disabled\">\n\n        <label>{{ 'First Name' | translate }}</label>\n        <input id=\"hashedit-edit-user-first-name\" type=\"text\" maxlength=\"128\" required\n          [(ngModel)]=\"model.firstName\"\n          name=\"firstName\">\n\n        <label>{{ 'Last Name' | translate }}</label>\n        <input id=\"hashedit-edit-user-last-name\" type=\"text\" maxlength=\"128\" required\n          [(ngModel)]=\"model.lastName\"\n          name=\"lastName\">\n\n        <label>{{ 'Password' | translate }}</label>\n        <input id=\"hashedit-edit-user-password\" type=\"password\" maxlength=\"128\" required\n          [(ngModel)]=\"model.password\"\n          name=\"password\">\n\n        <label>{{ 'Retype Password' | translate }}</label>\n        <input id=\"hashedit-edit-user-retype\" type=\"password\" maxlength=\"128\" required\n          [(ngModel)]=\"model.retype\"\n          name=\"retype\">\n\n        <label>{{ 'Language' | translate }}</label>\n        <select id=\"hashedit-edit-user-language\"\n          [(ngModel)]=\"model.language\"\n          name=\"language\">\n          <option *ngFor=\"let language of languages\" [value]=\"language.code\">{{language.text}}</option>\n        </select>\n\n      </div>\n      <!-- /.app-modal-body -->\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Update' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/shared/components/users/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(_userService, _appService) {
        this._userService = _userService;
        this._appService = _appService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
            this._appService.showToast('failure', 'The password does not match the retype field');
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
        this._visible = false;
        this.onUpdate.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], EditUserComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditUserComponent.prototype, "user", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditUserComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditUserComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditUserComponent.prototype, "onError", void 0);
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-edit-user',
            template: __webpack_require__("../../../../../src/shared/components/users/edit-user/edit-user.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_app_service__["a" /* AppService */]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/components/users/remove-user/remove-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal-background\" [class.visible]=\"visible === true\">\n  <div class=\"app-modal\" [class.visible]=\"visible === true\">\n\n    <form (ngSubmit)=\"submit()\" #removeForm=\"ngForm\">\n\n      <h2>{{ 'Remove User' | translate }}</h2>\n\n      <p>{{ 'Confirm you want to remove:' | translate }}:</p>\n\n      <div class=\"to-be-removed\">\n        <h3>{{model.firstName}} {{model.lastName}}</h3>\n        <small>{{model.email}}</small>\n      </div>\n\n      <div class=\"actions\">\n        <a (click)=\"hide()\">{{ 'Cancel' | translate }}</a>\n        <button type=\"submit\">{{ 'Remove User' | translate }}</button>\n      </div>\n\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/shared/components/users/remove-user/remove-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveUserComponent = /** @class */ (function () {
    function RemoveUserComponent(_userService) {
        this._userService = _userService;
        this._visible = false;
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RemoveUserComponent.prototype, "visible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RemoveUserComponent.prototype, "user", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveUserComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveUserComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RemoveUserComponent.prototype, "onError", void 0);
    RemoveUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-remove-user',
            template: __webpack_require__("../../../../../src/shared/components/users/remove-user/remove-user.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]])
    ], RemoveUserComponent);
    return RemoveUserComponent;
}());



/***/ }),

/***/ "../../../../../src/shared/pipes/time-ago.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeAgoPipe = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'timeAgo' })
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());



/***/ }),

/***/ "../../../../../src/shared/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http, translate) {
        this.http = http;
        this.translate = translate;
        this._settingsUrl = 'api/app/settings';
        this._themesListUrl = 'api/themes/list';
        this._languagesListUrl = 'api/languages/list';
    }
    /**
     * Retrieve settings for the application
     */
    AppService.prototype.retrieveSettings = function () {
        return this.http.get(this._settingsUrl).map(function (res) { return res.json(); });
    };
    /**
     * Lists themes in the application
     */
    AppService.prototype.listThemes = function () {
        return this.http.get(this._themesListUrl).map(function (res) { return res.json(); });
    };
    /**
     * Lists languages available to the application
     */
    AppService.prototype.listLanguages = function () {
        return this.http.get(this._languagesListUrl).map(function (res) { return res.json(); });
    };
    /**
     * Shows the system toast
     */
    AppService.prototype.showToast = function (type, text) {
        if (type == 'failure' && (text == null || text == '')) {
            text = 'Sorry, you encountered an error. Contact your site administrator if the problem continues.';
        }
        else if (type == 'success' && (text == null || text == '')) {
            text = 'Success!';
        }
        else if (text == null || text == '') {
            text = 'Uncategorized message';
        }
        this.translate.get(text).subscribe(function (res) {
            toast.show(type, res);
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/code.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl + '/' + type, options).map(function (res) { return res.json(); });
    };
    /**
     * Retrieves code from a URL
     *
     * @param {string} url
     * @return {Observable}
     */
    CodeService.prototype.retrieve = function (url, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._addUrl, body, options);
    };
    CodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CodeService);
    return CodeService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/component.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    ComponentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ComponentService);
    return ComponentService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeFileUrl, body, options);
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/form-field.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormFieldService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._updateOrderUrl, body, options);
    };
    FormFieldService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FormFieldService);
    return FormFieldService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/gallery-image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryImageService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._updateOrderUrl, body, options);
    };
    GalleryImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GalleryImageService);
    return GalleryImageService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    GalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/menu-item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuItemService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._updateOrderUrl, body, options);
    };
    MenuItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MenuItemService);
    return MenuItemService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removePageUrl, body, options);
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteService = /** @class */ (function () {
    function RouteService(http) {
        this.http = http;
        this._listUrl = 'api/routes/list';
    }
    /**
     * Lists pages in the application
     *
     */
    RouteService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listUrl, options).map(function (res) { return res.json(); });
    };
    RouteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/setting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._editUrl, body, options);
    };
    SettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/site.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteService = /** @class */ (function () {
    function SiteService(http) {
        this.http = http;
        this._createUrl = 'api/sites/create';
        this._subscribeUrl = 'api/sites/subscribe';
        this._unsubscribeUrl = 'api/sites/unsubscribe';
        this._reloadUrl = 'api/sites/reload';
        this._reindexUrl = 'api/sites/reindex';
        this._sitemapUrl = 'api/sites/sitemap';
        this._migrateUrl = 'api/sites/migrate';
        this._templateUrl = 'api/sites/republish/templates';
        this._listTemplatesUrl = 'api/templates/list';
        this._listPluginsUrl = 'api/plugins/list';
        this._updateUrl = 'api/sites/update/plugins';
        this._removePluginUrl = 'api/plugins/remove';
        this._retrieveSubscriptionUrl = 'api/sites/subscription/retrieve';
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._subscribeUrl, body, options);
    };
    /**
     * Unsubscribes a site
     *
     * @return {Observable}
     */
    SiteService.prototype.unsubscribe = function () {
        var body = JSON.stringify({});
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._unsubscribeUrl, body, options);
    };
    /**
     * Retrieve subscription
     *
     */
    SiteService.prototype.retrieveSubscription = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._retrieveSubscriptionUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Reloads the system files
     *
     * @return {Observable}
     */
    SiteService.prototype.reload = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._reloadUrl, options);
    };
    /**
     * Reindexes pages in the site
     *
     * @return {Observable}
     */
    SiteService.prototype.reindex = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._reindexUrl, options);
    };
    /**
     * Republishes the sitemap
     *
     * @return {Observable}
     */
    SiteService.prototype.sitemap = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._sitemapUrl, options);
    };
    /**
     * Migrates a R5 site to R6
     *
     * @return {Observable}
     */
    SiteService.prototype.migrate = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._migrateUrl, options);
    };
    /**
     * Republishes templates
     *
     * @return {Observable}
     */
    SiteService.prototype.republishTemplates = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._templateUrl, options);
    };
    /**
     * Lists templates
     *
     */
    SiteService.prototype.listTemplates = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listTemplatesUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Lists plugins
     *
     */
    SiteService.prototype.listPlugins = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._listPluginsUrl, options).map(function (res) { return res.json(); });
    };
    /**
     * Updates plugins
     *
     * @return {Observable}
     */
    SiteService.prototype.updatePlugins = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removePluginUrl, body, options);
    };
    SiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SiteService);
    return SiteService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/submission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmissionService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    SubmissionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SubmissionService);
    return SubmissionService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._removeUrl, body, options);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/submissions/submissions.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Submissions' | translate }}</h1>\n\n</menu>\n\n<section class=\"app-main\">\n\n  <div id=\"submissions-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let submission of submissions\" (mouseenter)=\"setActive(submission)\" (click)=\"setActive(submission)\" [class.selected]=\"submission === selectedSubmission\">\n      <h2><span class=\"primary\"><a (click)=\"showView(submission)\">{{ submission.name }}</a></span><span class=\"secondary\">{{ submission.date | timeAgo }}</span></h2>\n      <small>{{ submission.formId }}</small>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(submission)\">{{ 'Remove Submission' | translate }}</a>\n          <a (click)=\"showView(submission)\" class=\"primary\">{{ 'View Submission' | translate }}</a>\n      </div>\n    </div>\n  </div>\n  \n  <p class=\"no-list-items\" *ngIf=\"submissions.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-view-submission [visible]=\"viewVisible\" [submission]=\"submission\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-view-submission>\n<respond-remove-submission [visible]=\"removeVisible\" [submission]=\"submission\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-remove-submission>\n\n<respond-drawer active=\"submissions\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/submissions/submissions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_submission_service__ = __webpack_require__("../../../../../src/shared/services/submission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmissionsComponent = /** @class */ (function () {
    function SubmissionsComponent(_submissionService, _router, _appService) {
        this._submissionService = _submissionService;
        this._router = _router;
        this._appService = _appService;
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    SubmissionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-submissions',
            template: __webpack_require__("../../../../../src/submissions/submissions.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_submission_service__["a" /* SubmissionService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_submission_service__["a" /* SubmissionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], SubmissionsComponent);
    return SubmissionsComponent;
}());



/***/ }),

/***/ "../../../../../src/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<respond-subscribe></respond-subscribe>\n\n<menu class=\"app-menu\">\n\n    <button class=\"app-more\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n    \n    <h1>{{ 'Users' | translate }}</h1>\n\n    <button class=\"app-add\" (click)=\"showAdd()\"><i class=\"material-icons\">add</i></button>\n    \n</menu>\n\n<section class=\"app-main\">\n\n  <div id=\"users-list\" class=\"app-list\">\n    <div class=\"app-list-item\" *ngFor=\"let user of users\" (mouseenter)=\"setActive(user)\" (click)=\"setActive(user)\" [class.selected]=\"user === selectedUser\">\n      <h2><span class=\"primary\"><a (click)=\"showEdit(user)\" >{{ user.firstName }} {{ user.lastName }}</a></span></h2>\n      <small>{{ user.email }}</small>\n      <div class=\"app-list-actions\">\n          <a (click)=\"showRemove(user)\">{{ 'Remove' | translate }}</a>\n          <a (click)=\"showEdit(user)\" class=\"primary\">{{ 'Edit' | translate }}</a>\n      </div>\n    </div>\n  </div>\n  \n  <p class=\"no-list-items\" *ngIf=\"users.length === 0\">{{ 'Nothing here yet' | translate }}</p>\n\n</section>\n\n<respond-add-user [visible]=\"addVisible\" (onCancel)=\"reset()\" (onAdd)=\"list()\" (onError)=\"failure($event)\"></respond-add-user>\n\n<respond-edit-user [visible]=\"editVisible\" [user]=\"user\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-edit-user>\n\n<respond-remove-user [visible]=\"removeVisible\" [user]=\"user\" (onCancel)=\"reset()\" (onUpdate)=\"list()\" (onError)=\"failure($event)\"></respond-remove-user>\n\n<respond-drawer active=\"users\" [visible]=\"drawerVisible\" (onHide)=\"reset()\"></respond-drawer>"

/***/ }),

/***/ "../../../../../src/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__ = __webpack_require__("../../../../../src/shared/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(_userService, _router, _appService) {
        this._userService = _userService;
        this._router = _router;
        this._appService = _appService;
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
        this._appService.showToast('failure', obj._body);
        if (obj.status == 401) {
            this._router.navigate(['/login']);
        }
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'respond-users',
            template: __webpack_require__("../../../../../src/users/users.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_app_service__["a" /* AppService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map