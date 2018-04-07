import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'respond-edit-image',
    templateUrl: 'edit-image.component.html',
    providers: []
})

export class EditImageComponent {

  selectVisible: boolean = false;

  // set model
  model: any = {
      id: '',
      cssClass: '',
      src: '',
      alt: '',
      title: ''
    };

  // model to store
  _properties: any = {
                      id: '',
                      cssClass: '',
                      src: '',
                      alt: '',
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
    this.model.id = properties.id;
    this.model.cssClass = properties.cssClass;
    this.model.src = properties.src;
    this.model.alt = properties.alt;
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

    this.model.src = event.url;

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
    this.onUpdate.emit({type: 'image', properties: this.model});
  }

}