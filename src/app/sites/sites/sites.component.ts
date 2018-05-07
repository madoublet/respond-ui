import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppService } from '../../shared/services/app.service';
import { SiteService } from '../../shared/services/site.service';
import { DrawerComponent } from 'app/shared/components/drawer/drawer.component';
import { MessageComponent } from '../../shared/components/message/message.component';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  providers: [AppService, SiteService]
})
export class SitesComponent implements OnInit {

  id: string;
  role: string;
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

  @ViewChild('drawer') private drawer: DrawerComponent;
  @ViewChild('message') private message: MessageComponent;

  constructor(public translate: TranslateService, private _router: Router, private _appService: AppService, private _siteService: SiteService) { }


  ngOnInit() {
    this.id = localStorage.getItem('site_id');
    this.role = localStorage.getItem('site_role');
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
                      (data: any) => { this.sites = data; this.copy(); },
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
                      (data: any) => { 
                        this.setToken(data.token);
                        this.setSyncability(data.sync.canSync);
                        this.id = data.user.siteId;

                        // set status
                        localStorage.setItem('site_status', data.message.status);

                        // set color
                        localStorage.setItem('message_color', data.message.color);
                        localStorage.setItem('message_text', data.message.text);
                        localStorage.setItem('message_link', data.message.link);

                        // set site id and role
                        localStorage.setItem('site_id', data.user.siteId);
                        localStorage.setItem('site_role', data.user.role);

                        this._appService.showToast('success', null);

                        // re-init the message
                        this.drawer.init();
                        this.message.init();
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
   * handles error
   */
  failure (obj: any) {

    console.log(obj);

    this._appService.showToast('failure', obj.error);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }

}
