import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../shared/services/file.service';
import { AppService } from '../shared/services/app.service';

@Component({
    selector: 'respond-files',
    templateUrl: 'files.component.html',
    providers: [FileService, AppService]
})


export class FilesComponent {

  id: string;
  search: string;
  file: any;
  files: any;
  filteredFiles: any = [];
  errorMessage: string;
  selectedFile: any;
  removeVisible: boolean;
  drawerVisible: boolean;
  storage: string = 'local';
  supportsCloudStorage: boolean = false;


  constructor (private _fileService: FileService, private _router: Router, private _appService: AppService) {}

  /**
   * Init files
   *
   */
  ngOnInit() {

    this.id = localStorage.getItem('site_id');
    this.removeVisible = false;
    this.drawerVisible = false;
    this.file = {};
    this.files = [];

    // list files
    this.list();

  }

  /**
   * Make a copy of the pages
   */
  copy() {
    this.filteredFiles = Object.assign([], this.files);
   }

  /**
   * Updates the list
   */
  list() {

    this.reset();
    this._fileService.list()
                     .subscribe(
                       data => { this.files = data; this.copy(); },
                       error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * Searches the list
   */
  searchList() {

    let keys = 'name', context = this;

    // reset when nothing is typed
    if(!this.search) {
      this.copy();
    }

    // filter items
    this.filteredFiles = Object.assign([], this.files).filter(
      item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(this.search, 'gi').test(item[key]))
    );

  }

  /**
   * Resets an modal booleans
   */
  reset() {
    this.removeVisible = false;
    this.drawerVisible = false;
    this.file = {};
  }

  /**
   * Sets the list item to active
   *
   * @param {File} file
   */
  setActive(file) {
    this.selectedFile = file;
  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Shows the remove dialog
   *
   * @param {File} file
   */
  showRemove(file) {
    this.removeVisible = true;
    this.file = file;
  }

  /**
   * Sets the storage type (local or cloud)
   *
   * @param {File} file
   */
  setStorage(storage) {
    this.storage = storage;
  }

  /**
   * handles error
   */
  failure(obj) {

    this._appService.showToast('failure', obj._body);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }

}