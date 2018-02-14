import { Component, Renderer, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from '../../../shared/services/site.service';
import { AppService } from '../../../shared/services/app.service';
import { environment } from '../../../../environments/environment';

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
  route: any;
  mode: string = 'core';
  hasAccount: boolean = false;
  confirmVisible: boolean = false;
  _visible: boolean = false;
  _active: string;
  _confirm: boolean = false;

  @Input()
  set confirm(confirm: boolean){
    this._confirm = confirm;
  }

  get confirm() { return this._confirm }

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
    this.confirmVisible = false;
    this.mode = localStorage.getItem('respond_mode');

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
  navigate(route) {

    if(this._confirm === true) {

      this.route = route;

      // show the confirm modal
      this.confirmVisible = true;

    }
    else {
      this.route = route;
      this._router.navigate(this.route);
    }

  }

  /**
   * Cancels navigation
   */
  cancelNavigation() {
    this.confirmVisible = false;
    return true;
  }

  /**
   * Continues navigation
   */
  continueNavigation() {
    this.confirmVisible = false;
    this._router.navigate(this.route);
  }

  /**
   * View the code editor
   */
  viewCode() {

    localStorage.setItem('respond.codeUrl', 'index.html');
    localStorage.setItem('respond.codeType', 'default');

    var id = Math.random().toString(36).substr(2, 9);

    this.navigate(['/code',  id]);

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
  }

  /**
   * Signs out of the system
   */
  signOut() {

    // remove token
    localStorage.removeItem('respond.siteId');

    // navigate
    this.navigate(['/login']);

  }

}