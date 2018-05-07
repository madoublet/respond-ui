import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItemService } from '../../../../shared/services/menu-item.service';
import { PageService } from '../../../../shared/services/page.service';

@Component({
    selector: 'respond-add-menu-item',
    templateUrl: 'add-menu-item.component.html',
    providers: [MenuItemService, PageService]
})

export class AddMenuItemComponent {

  pages;
  errorMessage;
  selectVisible: boolean = false;

  // model to store
  model = {
    html: '',
    cssClass: '',
    isNested: false,
    url: '',
    target: ''
  };

  // visible input
  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

    // reset model
    this.model = {
      html: '',
      cssClass: '',
      isNested: false,
      url: '',
      target: ''
    };

  }

  get visible() { return this._visible; }

  // menu input
  @Input() menu;

  // outputs
  @Output() onCancel = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _menuItemService: MenuItemService, private _pageService: PageService) {}

  /**
   * Init
   */
  ngOnInit() {

    // list pages
    this._pageService.list()
                     .subscribe(
                      (data: any) => { this.pages = data; },
                       error =>  this.errorMessage = <any>error
                      );

  }

  /**
   * Hides the add modal
   */
  hide() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Submits the form
   */
  submit() {

    this._menuItemService.add(this.menu.id, this.model.html, this.model.cssClass, this.model.isNested, this.model.url, this.model.target)
                     .subscribe(
                      (data: any) => { this.success(); },
                       error =>  { this.onError.emit(<any>error); }
                      );

  }

  /**
   * Handles a successful add
   */
  success() {

    this._visible = false;
    this.onAdd.emit(null);

  }

  /**
   * failure
   */
  failure(event) {
    // reset
    this.reset();
  }

  /* 
   * shows the select file modal
   */
  showSelect() {
    this.selectVisible = true;
  }

  /**
   * reset
   */
  reset() {
    this.selectVisible = false;
  }

  /**
   * select
   */
  select(event) {

    // set href to selected url
    this.model.url = event.url

    // reset
    this.reset();
  }

}