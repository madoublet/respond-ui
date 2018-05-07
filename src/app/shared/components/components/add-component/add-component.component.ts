import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentService } from '../../../../shared/services/component.service';

@Component({
    selector: 'respond-add-component',
    templateUrl: 'add-component.component.html',
    providers: [ComponentService]
})

export class AddComponentComponent {

  // model to store
  model: any;

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

    // reset model
    this.model = {
      name: '',
      url: '',
      codeOnly: false
    };

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _componentService: ComponentService) {}

  /**
   * Init
   */
  ngOnInit() {

  }

  /**
   * Hides the add component modal
   */
  hide() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Generates a URL based on the title
   */
  onKey(event) {
    this.model.url = event.target.value.toLowerCase().replace(/ /g,"-").replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  }

  /**
   * Submits the form
   */
  submit() {

    // add component
    this._componentService.add(this.model.name, this.model.url, this.model.codeOnly)
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

}