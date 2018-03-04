import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppService } from '../../shared/services/app.service';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [AppService, ProductService]
})
export class ProductsComponent implements OnInit {

  selectedProduct: any = {};
  product: any = {};
  products: any = [];
  filteredProducts: any = [];

  drawerVisible: boolean = false;
  addVisible: boolean = false;
  removeVisible: boolean = false;
  search: string = '';

  constructor(public translate: TranslateService, private _router: Router, private _appService: AppService, private _productService: ProductService) { }

  ngOnInit() {
    this.list('load');
  }

  /**
   * Make a copy of the pages
   */
  copy() {
    this.filteredProducts = Object.assign([], this.products);
   }

  /**
   * Updates the list
   */
  list(source) {
    if(source != 'load') {
      this._appService.showToast('success', null);
    }

    this.reset();

    // list pages
    this._productService.list()
                    .subscribe(
                      data => { this.products = data; this.copy(); },
                      error =>  { this.failure(<any>error); }
                    );
  }

  /**
   * Searches the list
   */
  searchList() {

    let keys = 'name,id', context = this;

    // reset when nothing is typed
    if(!this.search) {
      this.copy();
    }

    // filter items
    this.filteredProducts = Object.assign([], this.products).filter(
      item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(this.search, 'gi').test(item[key]))
    );

  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Sets the list item to active
   *
   * @param {Product} product
   */
  setActive(product) {
    this.selectedProduct = product;
  }

  /**
   * Resets an modal booleans
   */
  reset() {
    this.drawerVisible = false;
    this.addVisible = false;
    this.removeVisible = false;
    this.product = {};
  }

  /* 
   * Shows the add product modal 
   */
  showAdd() {
    this.addVisible = true;
  }

  /**
   * Shows the remove dialog
   *
   * @param {Product} product
   */
  showRemove(product) {
    this.removeVisible = true;
    this.product = product;
  }

  /**
   * Edits a product
   *
   * @param {Product} product
   */
  editPage(product) {

    if(product.url == '' || product.url == null) {
      this._appService.showToast('failure', 'Page not found');
    }
    else {
      localStorage.setItem('respond.pageUrl', product.url);

      var id = Math.random().toString(36).substr(2, 9);

      this._router.navigate( ['/edit',  id, 'page'] );
    }
  }

  /**
   * Edits a product
   *
   * @param {Product} product
   */
  edit(product) {
    this._router.navigate( ['/products/edit', product.id] );
  }


  /**
   * handles error
   */
  failure (obj: any) {

    console.log(obj);

    this._appService.showToast('failure', obj._body);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }


}
