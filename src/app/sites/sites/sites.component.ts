import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppService } from '../../shared/services/app.service';
import { SiteService } from '../../shared/services/site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  providers: [AppService, SiteService]
})
export class SitesComponent implements OnInit {

  id: string;
  selectedSite: any = {};
  site: any = {};
  sites: any = [];
  filteredSites: any = [];
  isSysadmin: boolean = false;

  drawerVisible: boolean = false;
  addVisible: boolean = false;
  removeVisible: boolean = false;
  settingsVisible: boolean = false;
  search: string = '';

  constructor(public translate: TranslateService, private _router: Router, private _appService: AppService, private _siteService: SiteService) { }


  ngOnInit() {
    this.id = localStorage.getItem('respond.siteId');
    this.isSysadmin = (localStorage.getItem('is_sysadmin').toLowerCase()  == 'true');
    this.list('load');
  }

  /**
   * Make a copy of the pages
   */
  copy() {
    this.filteredSites = Object.assign([], this.sites);
   }

  /**
   * Updates the list
   */
  list(source) {
    if(source != 'load') {
      this._appService.showToast('success', null);
    }

    this.reset();

    // list pages
    this._siteService.list()
                    .subscribe(
                      data => { this.sites = data; this.copy(); },
                      error =>  { this.failure(<any>error); }
                    );
  }

  /**
   * Searches the list
   */
  searchList() {

    let keys = 'name,id', context = this;

    // reset when nothing is typed
    if(!this.search) {
      this.copy();
    }

    // filter items
    this.filteredSites = Object.assign([], this.sites).filter(
      item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(this.search, 'gi').test(item[key]))
    );

  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Sets the list item to active
   *
   * @param {Site} site
   */
  setActive(site) {
    this.selectedSite = site;
  }

  /**
   * Resets an modal booleans
   */
  reset() {
    this.drawerVisible = false;
    this.addVisible = false;
    this.removeVisible = false;
    this.settingsVisible = false;
    this.site = {};
  }

  /* 
   * Shows the add product modal 
   */
  showAdd() {
    this.addVisible = true;
  }

  /**
   * Shows the remove dialog
   *
   * @param {Site} site
   */
  showRemove(site) {
    this.removeVisible = true;
    this.site = site;
  }

  /**
   * Shows the settings dialog
   *
   * @param {Site} site
   */
  showSettings(site) {
    this.settingsVisible = true;
    this.site = site;
  }


  /**
   * Shows the settings dialog
   *
   * @param {Site} site
   */
  switch(site) {
    this.site = site;

    this._siteService.switch(site.id)
                    .subscribe(
                      data => { 
                        this.setToken(data.token);
                        this.setStatus(data.user.status, data.user.days, data.user.hasAccount);
                        this.setSyncability(data.sync.canSync);
                        this.id = data.user.siteId;

                        // set site id
                        localStorage.setItem('respond.siteId', data.user.siteId);

                        this._appService.showToast('success', null);
                       },
                      error =>  { this.failure(<any>error); }
                    );


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
   * handles error
   */
  failure (obj: any) {

    console.log(obj);

    this._appService.showToast('failure', obj._body);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }

}
