import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../shared/services/setting.service';
import { AppService } from '../shared/services/app.service';

@Component({
    selector: 'respond-settings',
    templateUrl: 'settings.component.html',
    providers: [SettingService, AppService]
})

export class SettingsComponent {

  id: string;
  role: string;
  setting;
  settings: any = [];
  tabs: any = [];
  errorMessage;
  selectedSetting;
  drawerVisible: boolean;
  selectVisible: boolean;

  // set default index
  tabIndex = 0;

  constructor (private _settingService: SettingService, private _router: Router, private _appService: AppService) {}

  /**
   * Init
   *
   */
  ngOnInit() {

    this.id = localStorage.getItem('site_id');
    this.role = localStorage.getItem('site_role');
    this.drawerVisible = false;
    this.selectVisible = false;
    this.settings;
    this.setting = null;

    this.list();

  }

  /**
   * Updates the list
   */
  list() {

    this.reset();

    this._settingService.list()
                     .subscribe(
                      (data: any) => { this.setupTabs(data); },
                       error =>  { this.failure(<any>error); }
                      );

  }


  /**
   * Setup tabs
   */
  setupTabs(data) {

    let tabIndex = 0;
    this.tabs = [];

    this.tabs.push({ index: 0, title: 'General'});

    for(let x=0; x<data.length; x++) {

      // set tab
      data[x].tabIndex = tabIndex;

      if(data[x].type == 'title') {

        // increment tab index
        tabIndex++;

        // create a tab
        this.tabs.push({ index: tabIndex, title: data[x].label});
        

      }
    }

    this.settings = data;

  }

  /**
   * Shows a specific tab index
   */
  showIndex(index) {
    this.tabIndex = index;
  }

  /**
   * Handles the form submission
   */
  submit() {

    var data = this.settings;

    for(let x=0; x<data.length; x++) {
      delete data[x].tabIndex;
    }

    this._settingService.edit(data)
                     .subscribe(
                      (data: any) => { this.success(); this.list(); },
                       error =>  { this.failure(<any>error); }
                      );

  }


  /**
   * Shows the select modal
   */
  showSelect(setting) {
    this.setting = setting;
    this.selectVisible = true;
  }

  /**
   * Handles the selection of an image
   */
  select(event) {
    this.setting.value = 'files/' + event.name;
    this.selectVisible = false;
  }

  /**
   * Handles success
   */
  success() {
    this._appService.showToast('success', null);
  }

  /**
   * Resets screen
   */
  reset() {
    this.drawerVisible = false;
    this.selectVisible = false;
  }

  /**
   * Sets the setting to active
   *
   * @param {Setting} setting
   */
  setActive(setting) {
    this.selectedSetting = setting;

    this.list();
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

    this._appService.showToast('failure', obj.error);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }

}