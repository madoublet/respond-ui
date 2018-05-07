import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
    selector: 'respond-remove-product-image',
    templateUrl: 'remove-product-image.component.html',
    providers: [ProductService]
})

export class RemoveProductImageComponent {

  errorMessage;

  // model to store
  _productId: string;
  model: any = {};

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Input()
  set productId(productId){

    // set visible
    this._productId = productId;

  }

  get productId() { return this._productId; }

  @Input()
  set image(image){

    // set visible
    this.model = image;

  }

  get image() { return this.model; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _productService: ProductService) {}

  /**
   * Init
   */
  ngOnInit() {

    this.model = {
      id: '',
      name: '',
      caption: ''
    };

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

    this._productService.removeImage(this.model.id, this._productId)
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