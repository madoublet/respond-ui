import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from '../../shared/services/form.service';

@Component({
    selector: 'respond-edit-element',
    templateUrl: 'edit-element.component.html',
    providers: [FormService]
})

export class EditElementComponent {

  // lists
  forms: any = [];

  // set model
  model: any = {
      id: '',
      cssClass: '',
      html: ''
    };

  // model to store
  _title: string = 'Element';
  _selector: string = null;
  _properties: any = {
                        id: '',
                        cssClass: '',
                        html: ''
                      };
  _attributes: any = {};

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Input()
  set title(title: string){

    // reset model
    this._title = title;

  }

  get title() { return this._title; }

  @Input()
  set selector(selector: string){

    // reset model
    this._selector = selector;

  }

  get selector() { return this._selector; }

  @Input()
  set properties(properties: any){

    // reset model
    this._properties = properties;

    // set model
    this.model.id = properties.id;
    this.model.cssClass = properties.cssClass;
    this.model.html = properties.html;

  }

  get properties() { return this._properties; }

  @Input()
  set attributes(attributes: any){

    // walk through attributs
    for(let x=0; x<attributes.length; x++) {

      // check for values
      if(attributes[x].values != null && attributes[x].values != undefined) {

          // make sure a value exists
          if(attributes[x].values.length > 0) {

            // inject forms
            if(attributes[x].values[0] == 'respond.forms') {
              attributes[x].type = 'form';
              this.listForms();
            }
          }

      } 

    }


    // reset model
    this._attributes = attributes;

  }

  get attributes() { return this._attributes; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _formService: FormService) {}

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
   * Submits the form
   */
  submit() {
    this._visible = false;
    this.onUpdate.emit({properties: this.model, attributes: this._attributes});
  }

  /**
   * lists the forms
   */
  listForms() {
    this._formService.list()
                     .subscribe(
                       data => { this.forms = data; },
                       error =>  { }
                      );
  }

}