import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
    selector: 'respond-remove-product',
    templateUrl: 'remove-product.component.html',
    providers: [ProductService]
})

export class RemoveProductComponent {

  errorMessage;

  // model to store
  model: any = {};

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  @Input()
  set product(product){

    // set visible
    this.model = product;

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _productService: ProductService) {}

  /**
   * Init
   */
  ngOnInit() {

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
  submit() {

    this._productService.remove(this.model.id)
                     .subscribe(
                      (data: any) => { this.success(); },
                       error =>  { this.onError.emit(<any>error); }
                      );

  }

  /**
   * Handles a successful submission
   */
  success() {

    this._visible = false;
    this.onUpdate.emit(null);

  }


}