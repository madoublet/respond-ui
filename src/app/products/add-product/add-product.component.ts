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
  generatePage: boolean = true;

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

    this.generatePage = true;

    // reset model
    this.model = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      url: '',
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
      url: '',
      name: '',
      description: '',
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
   * Generates a URL based on the title
   */
  onKey(event) {
    this.model.url = 'product/' + event.target.value.toLowerCase().replace(/ /g,"-").replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    this.model.id = event.target.value.toLowerCase().replace(/ /g,"-").replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  }

  /**
   * Submits the form
   */
  submit() {

    if(this.generatePage == false) {
      this.model.url = '';
    }

    this._productService.add(this.model.id, this.model.url, this.model.name, this.model.description, this.model.shipped, this.model.price, this.model.file, this.model.subscription, this.model.plan, this.model.planPrice)
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