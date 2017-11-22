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

  constructor (private _siteService: SiteService, private _router: Router, private _appService: AppService) {}

  /**
   * Init pages
   *
   */
  ngOnInit() {

    this.id = localStorage.getItem('respond.siteId');
    this.settingsVisible = false;
    this.drawerVisible = false;

    this.list();

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
                       data => { 
                        this._appService.showToast('success', null); 
                      },
                       error => { 
                        this._appService.showToast('failure', null); 
                      }
                      );

  }

  /**
   * Reindex pages
   */
  reindex() {

    this._siteService.reindex()
                      .subscribe(
                        data => { 
                        this._appService.showToast('success', null); 
                      },
                        error => { 
                        this._appService.showToast('failure', null); 
                      }
                      );

  }

  /**
   * Republish site
   */
  sitemap() {
    this._siteService.sitemap()
                      .subscribe(
                        data => { 
                        this._appService.showToast('success', null); 
                      },
                        error => { 
                        this._appService.showToast('failure', null); 
                      }
                      );
  }

  /**
   * Migrate R5 site
   */
  migrate() {
    this._siteService.migrate()
                      .subscribe(
                        data => { 
                        this._appService.showToast('success', null); 
                      },
                        error => { 
                        this._appService.showToast('failure', null); 
                      }
                      );
  }

  /**
   * Republish Templates
   */
  templates() {
    this._siteService.republishTemplates()
                      .subscribe(
                        data => { 
                        this._appService.showToast('success', null); 
                      },
                        error => { 
                        this._appService.showToast('failure', null); 
                      }
                      );
  }

  /**
   * Updates Plugins (re-syncs them with the latest version from the theme)
   */
  update() {
    this._siteService.updatePlugins()
                      .subscribe(
                        data => { 
                        this._appService.showToast('success', null); 
                      },
                        error => { 
                        this._appService.showToast('failure', null); 
                      }
                      );
  }


  /**
   * handles error
   */
  failure (obj) {

    console.log(obj);
    this._appService.showToast('failure', obj._body);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }


}