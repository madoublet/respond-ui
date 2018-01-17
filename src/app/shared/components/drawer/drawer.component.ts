import { Component, Renderer, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from '../../../../shared/services/site.service';
import { AppService } from '../../../../shared/services/app.service';

@Component({
    selector: 'respond-drawer',
    templateUrl: 'drawer.component.html',
    providers: [SiteService, AppService]
})

export class DrawerComponent {

  globalListener: any;

  id;
  dev;
  siteUrl;
  hasAccount: boolean = false;
  _visible: boolean = false;
  _active: string;

  @Input()
  set visible(visible: boolean){
    this._visible = visible;
  }

  get visible() { return this._visible; }

  @Input()
  set active(active: string){
    this._active = active;
  }

  get active() { return this._active; }

  @Output() onHide = new EventEmitter<any>();

  constructor (private _siteService: SiteService, private _appService: AppService, private _router: Router, private renderer: Renderer) {}

  /**
   * Init pages
   */
  ngOnInit() {
    this.id = localStorage.getItem('respond.siteId');
    this.dev = false;
    this.siteUrl = '';
    this.hasAccount = false;
    
    var url = window.location.href;

    if(url.indexOf('?dev') !== -1) {
      this.dev = true;
    }

    // get app settings
    this.settings();
  }

  /**
   * Get settings
   */
  settings() {

    this.hasAccount = (localStorage.getItem('site_has_account') == 'true'); // convert to boolean
    
    // retrieve settings
    this._appService.retrieveSettings()
                     .subscribe(
                       data => {
                         this.siteUrl = data.siteUrl;
                         this.siteUrl = this.siteUrl.replace('{{siteId}}', this.id);
                       },
                       error =>  { }
                      );
  }

  /**
   * View the code editor
   */
  viewCode() {

    localStorage.setItem('respond.codeUrl', 'templates/default.html');
    localStorage.setItem('respond.codeType', 'template');

    var id = Math.random().toString(36).substr(2, 9);

    this._router.navigate( ['/code',  id] );

  }

  /**
   * Hides the add page modal
   */
  hide() {
    this._visible = false;
    this.onHide.emit(null);
  }

  /**
   * Collapses the drawer
   */
  collapse() {

    if(document.body.hasAttribute('drawer-collapse')) {
      document.body.removeAttribute('drawer-collapse');
    }
    else {
      document.body.setAttribute('drawer-collapse', '');
    }

  }

  /**
   * Signs out of the system
   */
  signOut() {

    // remove token
    localStorage.removeItem('respond.siteId');

    // redirect
    this._router.navigate( ['/login'] );

  }

}