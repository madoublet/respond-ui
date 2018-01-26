import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageService } from '../../../../shared/services/page.service';

@Component({
    selector: 'respond-select-page',
    templateUrl: 'select-page.component.html',
    providers: [PageService]
})

export class SelectPageComponent {

  id: string;
  page: any;
  pages: any;
  filteredPages: any = [];
  errorMessage;
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

  constructor (private _pageService: PageService) {}

  /**
   * Init files
   */
  ngOnInit() {

    this.id = localStorage.getItem('respond.siteId');
    this.list();

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
  list() {

    this.reset();
    this._pageService.list()
                     .subscribe(
                       data => { this.pages = data; this.copy(); },
                       error =>  { this.onError.emit(<any>error); }
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

    // filter items
    this.filteredPages = Object.assign([], this.pages).filter(
      item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(this.search, 'gi').test(item[key]))
    );

  }

  /**
   * Resets an modal booleans
   */
  reset() {
    this.page = {};
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
  select(page) {

    this.onSelect.emit(page);

  }


}