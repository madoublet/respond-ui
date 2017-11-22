import { Component, Renderer, EventEmitter, Input, Output } from '@angular/core';
import { SiteService } from '../../../shared/services/site.service';
import { AppService } from '../../../shared/services/app.service';

@Component({
    selector: 'respond-subscribe',
    templateUrl: 'subscribe.component.html',
    providers: [SiteService, AppService]
})

export class SubscribeComponent {

  globalListener: any;

  status: string;
  hasAccount: boolean;
  daysRemaining: any;

  activationMethod: string;
  activationUrl: string;
  stripeAmount: any;
  stripeName: string;
  stripeDescription: string;
  stripePublishableKey: string;
  stripeCurrency: string;

  constructor (private _siteService: SiteService, private _appService: AppService, private renderer: Renderer) {}

  /**
   * Init pages
   */
  ngOnInit() {
    this.status = 'Active';
    this.hasAccount = false;
    this.daysRemaining = 0;
    this.activationUrl = '';
    // get app settings
    this.settings();
  }

  /**
   * Get settings
   */
  settings() {

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
  }

  /**
   * Stripe checkout
   */
  checkout() {

    var context = this;

    // handle stripe activation
    if(this.activationMethod == 'Stripe') {

      var handler = (<any>window).StripeCheckout.configure({
        key: this.stripePublishableKey,
        locale: 'auto',
        token: function (token: any) {

          // subscribe
          context._siteService.subscribe(token.id, token.email)
                       .subscribe(
                         data => { 
                           context.subscribed(); 
                           this._appService.showToast('success', ''); 
                          },
                         error => { this._appService.showToast('failure', '');  }
                        );

        }
      });

      handler.open({
        name: this.stripeName,
        description: this.stripeDescription,
        amount: this.stripeAmount,
        currency: this.stripeCurrency
      });

      this.globalListener = this.renderer.listenGlobal('window', 'popstate', () => {
        handler.close();
      });

    }
    else {
      window.location.href = this.activationUrl;
    }


  }

  /**
   * Successfully subscribed
   */
  subscribed() {
    localStorage.setItem('site_status', 'Active');
    this.status = 'Active';

    localStorage.setItem('site_has_account', 'true');
    this.hasAccount = true;
  }

}