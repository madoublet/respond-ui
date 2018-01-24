import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'respond-edit-element',
    templateUrl: 'edit-element.component.html',
    providers: []
})

export class EditElementComponent {

  // model to store
  model: any;

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Input()
  set attrs(attrs: any){

    // reset model
    this.model = attrs;

  }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor () {}

  /**
   * Init
   */
  ngOnInit() {

    this.model = {
      id: '',
      cssClass: '',
      html: ''
    };

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
    this.onUpdate.emit(this.model);
  }

}