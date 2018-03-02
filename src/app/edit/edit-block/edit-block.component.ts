import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'respond-edit-block',
    templateUrl: 'edit-block.component.html',
    providers: []
})

export class EditBlockComponent {

  isExpanded: boolean = false;
  showRemove: boolean = false;

  selectVisible: boolean = false;

  // set model
  model: any = {
      id: '',
      cssClass: '',
      backgroundImage: '',
      backgroundColor: '',
      backgroundSize: '',
      backgroundPosition: '',
      backgroundRepeat: ''
    };

  // model to store
  _title: string = 'Block';
  _selector: string = null;
  _properties: any = {
                        id: '',
                        cssClass: '',
                        html: ''
                      };
  _attributes: any = {};

  _visible: boolean = true;

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
    this.model.backgroundImage = properties.backgroundImage;
    this.model.backgroundColor = properties.backgroundColor;
    this.model.backgroundSize = properties.backgroundSize;
    this.model.backgroundPosition = properties.backgroundPosition;
    this.model.backgroundRepeat = properties.backgroundRepeat;

  }

  get properties() { return this._properties; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();
  @Output() onCommand = new EventEmitter<any>();

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

    // set src to selected file
    this.model.backgroundImage = 'files/' + event.name;

    // reset
    this.reset();

    // submit
    this.submit();
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
    this.onUpdate.emit({type: 'block', properties: this.model, attributes: this._attributes});
  }

  /**
   * failure
   */
  failure(event) {
    // reset
    this.reset();
  }

  /**
   * toggle expanded
   */
  toggleIsExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  /**
   * toggle the show remove headline
   */
  toggleShowRemove() {
    this.showRemove = !this.showRemove;
  }

  /**
   * send command to remove block
   */
  remove() {
    this.onCommand.emit('block.remove');
    this.showRemove = false;
  }

  /**
   * send command to rmove block up
   */
  moveUp() {
    this.onCommand.emit('block.moveUp');
    this.showRemove = false;
  }

  /**
   * send command to rmove block down
   */
  moveDown() {
    this.onCommand.emit('block.moveDown');
    this.showRemove = false;
  }

  /**
   * reset the background color
   */
  resetBackgroundColor() {
    this.model.backgroundColor = '';
    this.submit();
  }

}