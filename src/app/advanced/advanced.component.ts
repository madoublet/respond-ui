import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from '../shared/services/site.service';
import { AppService } from '../shared/services/app.service';

@Component({
    selector: 'respond-advanced',
    templateUrl: 'advanced.component.html',
    providers: [SiteService, AppService]
})

export class AdvancedComponent {

  id;
  errorMessage;
  selectedOption;
  addVisible: boolean = false;
  removeVisible: boolean = false;
  drawerVisible: boolean = false;
  settingsVisible: boolean = false;
  canSync: boolean = false;
  siteUrl: string = null;

  constructor (private _siteService: SiteService, private _router: Router, private _appService: AppService) {}

  /**
   * Init pages
   *
   */
  ngOnInit() {

    this.id = localStorage.getItem('site_id');
    this.canSync = (localStorage.getItem('can_sync') == 'true');
    this.settingsVisible = false;
    this.drawerVisible = false;

    this.list();
    this.settings();

  }

  /**
   * Get settings
   */
  settings() {

    // retrieve settings
    this._appService.retrieveSettings()
                     .subscribe(
                       (data: any) => {
                         this.siteUrl = data.siteUrl;
                         this.siteUrl = this.siteUrl.replace('{{siteId}}', this.id);
                       },
                       error =>  { }
                      );
  }

  /**
   * Updates the list
   */
  list() {

    this.reset();
  }

  /**
   * Resets an modal booleans
   */
  reset() {
    this.drawerVisible = false;
  }

  /**
   * Sets the list item to active
   *
   * @param {String} option
   */
  setActive(option) {
    this.selectedOption = option;
  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Reload system files
   */
  reload() {

    this._siteService.reload()
                     .subscribe(
                       (data: any) => { 
                        this._appService.showToast('success', null); 
                      },
                      error =>  { this.failure('test'); }
                      );

  }

  /**
   * Reindex pages
   */
  reindex() {

    this._siteService.reindex()
                      .subscribe(
                        (data: any) => { 
                        this._appService.showToast('success', null); 
                      },
                      error =>  { this.failure(<any>error); }
                      );

  }

  /**
   * Republish site
   */
  sitemap() {
    this._siteService.sitemap()
                      .subscribe(
                        (data: any) => { 
                        this._appService.showToast('success', null); 
                      },
                      error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * Republish Templates
   */
  templates() {
    this._siteService.republishTemplates()
                      .subscribe(
                        (data: any) => { 
                        this._appService.showToast('success', null); 
                      },
                      error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * Updates Plugins (re-syncs them with the latest version from the theme)
   */
  update() {
    this._siteService.updatePlugins()
                      .subscribe(
                        (data: any) => { 
                        this._appService.showToast('success', null); 
                      },
                      error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * Syncs the site to external provider
   */
  sync() {
    this._siteService.sync()
                      .subscribe(
                        (data: any) => { 
                        this._appService.showToast('success', null); 
                      },
                      error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * Downloads the site as a ZIP file
   */
  zip() {
    this._siteService.zip()
                      .subscribe(
                        (data: any) => { 
                          this._appService.showToast('success', null); 

                          window.open(this.siteUrl + '/archive.zip', '');
                      },
                      error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * handles error
   */
  failure (obj) {

    console.log(obj);
    this._appService.showToast('failure', obj.error);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }


}