import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'respond-add-block',
    templateUrl: 'add-block.component.html',
    providers: []
})

export class AddBlockComponent {

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor () {}

  /**
   * Init
   */
  ngOnInit() {

  }

  /**
   * Hides the add modal
   */
  hide() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Adds the block
   */
  add(type: string) {
    let html = '';

    if(type == '1-column') {
      html = '<div class="block row"><div class="col col-md-12"></div></div>';
    }
    else if(type == '2-column') {
      html = '<div class="block row"><div class="col col-md-6"></div><div class="col col-md-6"></div></div>';
    }
    else if(type == '2-column-weighted-left') {
      html = '<div class="block row"><div class="col col-md-9"></div><div class="col col-md-3"></div></div>';
    }
    else if(type == '2-column-weighted-right') {
      html = '<div class="block row"><div class="col col-md-3"></div><div class="col col-md-9"></div></div>';
    }
    else if(type == '3-column') {
      html = '<div class="block row"><div class="col col-md-4"></div><div class="col col-md-4"></div><div class="col col-md-4"></div></div>';
    }
    else if(type == '4-column') {
      html = '<div class="block row"><div class="col col-md-3"></div><div class="col col-md-3"></div><div class="col col-md-3"></div><div class="col col-md-3"></div></div>';
    }
    else if(type == 'jumbotron') {
      html = '<div class="block row jumbotron"><div class="col col-md-12"></div></div>';
    }
    
    this.onUpdate.emit({properties: {html: html}, attributes: []});
  }

}