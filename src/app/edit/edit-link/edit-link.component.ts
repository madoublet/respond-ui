import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'respond-edit-link',
    templateUrl: 'edit-link.component.html',
    providers: []
})

export class EditLinkComponent {

  selectVisible: boolean = false;

  // set model
  model: any = {
      id: '',
      cssClass: '',
      href: '',
      target: '',
      title: ''
    };

  // model to store
  _title: string = 'Link';
  _properties: any = {
                      html: '',
                      id: '',
                      cssClass: '',
                      href: '',
                      target: '',
                      title: ''};
  _attributes: any = {};

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Input()
  set properties(properties: any){

    // reset model
    this._properties = properties;

    // set model
    this.model.html = properties.html;
    this.model.id = properties.id;
    this.model.cssClass = properties.cssClass;
    this.model.href = properties.href;
    this.model.target = properties.target;
    this.model.title = properties.title;

  }

  get properties() { return this._properties; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor () {}

  /**
   * Init
   */
  ngOnInit() {

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
    this.model.href = event.url

    // reset
    this.reset();
  }

  /**
   * failure
   */
  failure(event) {
    // reset
    this.reset();
  }

  /**
   * Hides the add component modal
   */
  hide() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Submits the form
   */
  submit() {
    this._visible = false;
    this.onUpdate.emit({type: 'link', properties: this.model});
  }

}