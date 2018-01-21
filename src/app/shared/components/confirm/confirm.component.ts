import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'respond-confirm',
    templateUrl: 'confirm.component.html',
    providers: []
})

export class ConfirmComponent {

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onContinue = new EventEmitter<any>();

  constructor () {}

  /**
   * Init pages
   */
  ngOnInit() {

  }

  /**
   * Cancels after confirmation
   */
  cancel() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Continues after confirmation
   */
  continue() {
    this._visible = false;
    this.onContinue.emit(null);
  }

}