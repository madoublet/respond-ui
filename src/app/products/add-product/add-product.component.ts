import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
    selector: 'respond-add-product',
    templateUrl: 'add-product.component.html',
    providers: [ProductService]
})

export class AddProductComponent {

  // model to store
  model: any;

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

    // reset model
    this.model = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      name: '',
      shipped: false,
      price: 25.00,
      file: '', 
      subscription: false,
      plan: '',
      planPrice: ''
    };

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _productService: ProductService) {}

  /**
   * Init
   */
  ngOnInit() {

    this.model = {
      id:  '',
      name: '',
      shipped: false,
      price: 25.00,
      file: '', 
      subscription: false,
      plan: '',
      planPrice: ''
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

    this._productService.add(this.model.id, this.model.name, this.model.shipped, this.model.price, this.model.file, this.model.subscription, this.model.plan, this.model.planPrice)
                     .subscribe(
                       data => { this.success(); },
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