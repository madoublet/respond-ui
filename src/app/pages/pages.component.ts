import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../shared/services/page.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../shared/services/app.service';
import { RouteService } from '../shared/services/route.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'respond-pages',
    templateUrl: 'pages.component.html',
    providers: [PageService, AppService, RouteService]
})

export class PagesComponent {

  id: string;
  page: any;
  pages: any;
  routes: any;
  filteredPages: any;
  errorMessage: string;
  selectedPage: any;
  addVisible: boolean = false;
  removeVisible: boolean = false;
  drawerVisible: boolean = false;
  settingsVisible: boolean = false;
  search: string = null;
  foldersVisible: boolean = false;

  constructor (private _pageService: PageService, private _router: Router, private _translate: TranslateService, private _appService: AppService, private _routeService: RouteService) {}

  /**
   * Init pages
   *
   */
  ngOnInit() {

    this.id = localStorage.getItem('respond.siteId');

    this.addVisible = false;
    this.removeVisible = false;
    this.settingsVisible = false;
    this.drawerVisible = false;
    this.page = {};
    this.pages = [];
    this.routes = [];
    this.filteredPages = [];
    this.search = null;

    this.list('load');

  }

  /**
   * Make a copy of the pages
   */
  copy() {
   this.filteredPages = Object.assign([], this.pages);
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
    this._pageService.list()
                     .subscribe(
                       data => { this.pages = data; this.copy(); },
                       error =>  { this.failure(<any>error); }
                      );

    // list routes
    this._routeService.list()
                     .subscribe(
                       data => { this.routes = data; },
                       error =>  { this.failure(<any>error); }
                      );


  }

  /**
   * Searches the list
   */
  searchList() {

    let keys = 'title,url', context = this;

    // reset when nothing is typed
    if(!this.search) {
      this.copy();
    }

    // folder search
    if (this.search.indexOf('url:') != -1) {
      keys = 'url';

      let searchStr = this.search.replace('url: /', '').trim();

      // find root items
      if(searchStr == '') {
        
        this.filteredPages = [];

        this.pages.forEach(function(page) {
          if(page.url.indexOf('/') == -1) {
            context.filteredPages.push(page);
          }
        });

      }
      else {
        // filter items
        this.filteredPages = Object.assign([], this.pages).filter(
          item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(searchStr, 'gi').test(item[key]))
        );
      }

    
    }
    else {

      // filter items
      this.filteredPages = Object.assign([], this.pages).filter(
        item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(this.search, 'gi').test(item[key]))
      );

    }

  }

  /**
   * Searches the list
   */
  searchListForRoute(route:string) {

    var keys = 'url';

    this.search = 'url: ' + route;

    this.searchList();

    this.foldersVisible = false;
  }

  /**
   * Shows the folders
   */
  showFoldersList() { 
    this.foldersVisible = true;
  }

  /**
   * Shows the folders
   */
  hideFoldersList() { 
    this.foldersVisible = false;
  }


  /**
   * Resets an modal booleans
   */
  reset() {
    this.removeVisible = false;
    this.addVisible = false;
    this.settingsVisible = false;
    this.drawerVisible = false;
    this.page = {};
  }

  /**
   * Sets the list item to active
   *
   * @param {Page} page
   */
  setActive(page) {
    this.selectedPage = page;
  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Shows the add dialog
   */
  showAdd() {
    this.addVisible = true;
  }

  /**
   * Shows the remove dialog
   *
   * @param {Page} page
   */
  showRemove(page) {
    this.removeVisible = true;
    this.page = page;
  }

  /**
   * Shows the settings dialog
   *
   * @param {Page} page
   */
  showSettings(page) {
    this.settingsVisible = true;
    this.page = page;
  }

  /**
   * Edits a page
   *
   * @param {Page} page
   */
  edit(page) {
    localStorage.setItem('respond.pageUrl', page.url);

    var id = Math.random().toString(36).substr(2, 9);

    this._router.navigate( ['/edit',  id, 'page'] );
  }

  /**
   * Edits code for a page
   *
   * @param {Page} page
   */
  editCode(page) {

    let url = '', parts = page.url.split('.');
    url = parts[0] + '.html';

    localStorage.setItem('respond.codeUrl', url);
    localStorage.setItem('respond.codeType', 'page');

    var id = Math.random().toString(36).substr(2, 9);

    this._router.navigate( ['/code',  id] );
  }

  /**
   * handles error
   */
  failure (obj) {
    
    this._appService.showToast('failure', obj._body);
    
    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }


}