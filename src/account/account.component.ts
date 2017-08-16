import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from '../shared/services/site.service';

declare var toast: any;

@Component({
    selector: 'respond-account',
    templateUrl: 'account.component.html',
    providers: [SiteService]
})

export class AccountComponent {

  id;
  errorMessage;
  subscription: any;
  addVisible: boolean = false;
  removeVisible: boolean = false;
  drawerVisible: boolean = false;
  settingsVisible: boolean = false;
  plan: string = "";
  amount: number;
  amountDisplay: string = "";
  currency: string = "";
  interval: string = "";

  constructor (private _siteService: SiteService, private _router: Router) {}

  /**
   * Init pages
   *
   */
  ngOnInit() {

    this.id = localStorage.getItem('respond.siteId');
    this.settingsVisible = false;
    this.drawerVisible = false;

    this.retrieve();

  }

  /**
   * Retrieves the subscription
   */
  retrieve() {

    this.reset();
    this._siteService.retrieveSubscription()
                     .subscribe(
                       data => { 
                         this.subscription = data; 
                         this.plan = data.name;
                         this.amount = data.amount / 100;
                         this.currency = data.currency.toUpperCase();
                         this.interval = data.interval;

                        if(this.currency.toUpperCase() == 'USD') {
                          this.amountDisplay = "$" + this.amount;
                        }
                        else {
                          this.amountDisplay = this.amount + " " + this.currency;
                        }

                         console.log(data); },
                       error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * Resets an modal booleans
   */
  reset() {
    this.drawerVisible = false;
  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * handles error
   */
  failure (obj) {

    console.log(obj);

    toast.show('failure');

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }


}