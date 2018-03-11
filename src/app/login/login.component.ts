import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../shared/services/app.service';
import { environment } from '../../environments/environment';

@Component({
    selector: 'respond-login',
    templateUrl: 'login.component.html',
    providers: [TranslateService, UserService, AppService]
})

export class LoginComponent {

  data;
  id;
  errorMessage;
  logoUrl
  usesLDAP = false;
  hasMultipleSites = false;
  defaultLanguage = 'en';
  acknowledgement;

  constructor (private _userService: UserService, private _appService: AppService, private _route: ActivatedRoute, private _router: Router, private _translate: TranslateService) {}

  ngOnInit() {

    this.logoUrl = '';
    this.acknowledgement = '';

      this._route.params.subscribe(params => {
        this.id = params['id'];
        localStorage.setItem('respond.siteId', this.id);
      });

      // retrieve settings
      this.settings();
  }

  /**
   * Get settings
   */
  settings() {

    this._appService.retrieveSettings()
                     .subscribe(
                       data => {
                         this.logoUrl = data.logoUrl;
                         this.acknowledgement = data.acknowledgement;
                         this.usesLDAP = data.usesLDAP;
                         this.defaultLanguage = data.defaultLanguage;
                         
                         // set mode
                         localStorage.setItem('respond_mode', data.mode);

                         // set language
                         this.setLanguage(this.defaultLanguage);

                         // set activation
                         this.setActivation(data.activationMethod, data.activationUrl, data.stripeAmount, data.stripeName, data.stripeDescription, data.stripePublishableKey, data.stripeCurrency)
                       },
                       error =>  { this.failure(<any>error); }
                      );

  }

  /**
   * Login to the app
   *
   * @param {Event} event
   * @param {string} email The user's login email
   * @param {string} password The user's login password
   * @param {string} test The user's site
   */
  login(event, email, password, site) {
    
      event.preventDefault();

      let id = undefined;

      if(this.id != undefined) {
        id = this.id;
      }
      
      if(site != '') {
        id = site;
      }

      // login
      this._userService.login(id, email, password)
                   .subscribe(
                     data => { this.data = data; this.success(); },
                     error => { this.failure(<any>error); }
                    );

  }

  /**
   * Handles a successful login
   */
  success() {

    // show the toast
    this._appService.showToast('success', null);

    // set language
    this.setLanguage(this.data.user.language);

    // set token
    this.setToken(this.data.token);

    // set status
    this.setStatus(this.data.user.status, this.data.user.days, this.data.user.hasAccount);

    // set syncability
    this.setSyncability(this.data.sync.canSync);

    // set sites
    this.setSites(this.data.user.sites, this.data.user.sysadmin);

    // set site id
    localStorage.setItem('respond.siteId', this.data.user.siteId);

    // navigate
    this._router.navigate( ['/pages'] );

  }

  /**
   * Routes to the forgot password screen
   */
  forgot() {
    if(this.id != undefined) {
      this._router.navigate( ['/forgot', this.id] );
    }
    else {
      this._router.navigate( ['/forgot'] );
    }
  }

  /**
   * Routes to the create screen
   */
  create() {
    this._router.navigate( ['/create'] );
  }

  /**
   * Sets the language for the app
   */
  setLanguage(language) {
      localStorage.setItem('user_language', language);

      // set language
      this._translate.use(language);
  }

  /**
   * Sets the language for the app
   */
  setSites(sites, sysadmin) {
    localStorage.setItem('respond_sites', JSON.stringify(sites));
    localStorage.setItem('respond_sysadmin', JSON.stringify(sysadmin));
  }

  /**
   * Sets whether the site can be synced to another data store (e.g. Amazon S3)
   */
  setSyncability(canSync) {
      localStorage.setItem('can_sync', canSync);
  }

  /**
   * Sets the token in local storage
   */
  setToken(token) {
      localStorage.setItem('id_token', token);
  }

  /**
   * Sets the status
   */
  setStatus(status, days, hasAccount) {

      // set 
      let strHasAccount:string = 'false';

      // set expired
      if(status == 'Trial' && days < 0) {
        status = 'Expired';
      }

      // set has account
      if(hasAccount == true) {
        strHasAccount = 'true';
      }

      localStorage.setItem('site_status', status);
      localStorage.setItem('site_has_account', strHasAccount);
      localStorage.setItem('site_trial_days_remaining', days);
  }

  /**
   * Sets the activation
   */
  setActivation(activationMethod, activationUrl, stripeAmount, stripeName, stripeDescription, stripePublishableKey, stripeCurrency) {

      localStorage.setItem('activation_method', activationMethod);
      localStorage.setItem('activation_url', activationUrl);
      localStorage.setItem('stripe_amount', stripeAmount);
      localStorage.setItem('stripe_name', stripeName);
      localStorage.setItem('stripe_description', stripeDescription);
      localStorage.setItem('stripe_publishable_key', stripePublishableKey);
      localStorage.setItem('stripe_currency', stripeCurrency);

  }
    
  /**
   * handles error
   */
  failure(obj) {

    if(obj.status == 409) {
      this.hasMultipleSites = true;
    }
    
    // show the toast
    this._appService.showToast('failure', obj._body);

  }


}