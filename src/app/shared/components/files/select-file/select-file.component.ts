import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileService } from '../../../../shared/services/file.service';

@Component({
    selector: 'respond-select-file',
    templateUrl: 'select-file.component.html',
    providers: [FileService]
})

export class SelectFileComponent {

  id: string;
  file: any;
  files: any;
  filteredFiles: any = [];
  errorMessage: string;
  search: string = null;

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _fileService: FileService) {}

  /**
   * Init files
   */
  ngOnInit() {

    this.id = localStorage.getItem('site_id');

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
                       data => { this.files = data; this.copy() },
                       error =>  { this.onError.emit(<any>error); }
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
    this.file = {};
  }

  /**
   * Hides the modal
   */
  hide() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Submits the form
   */
  select(file) {

    this.onSelect.emit(file);

  }


}