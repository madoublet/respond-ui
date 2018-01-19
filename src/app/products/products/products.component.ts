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

  drawerVisible: boolean = false;
  addVisible: boolean = false;
  removeVisible: boolean = false;
  product: any;
  products: any;

  constructor(public translate: TranslateService, private _router: Router, private _appService: AppService, private _productService: ProductService) { }

  ngOnInit() {
    this.product = {};
    this.products = [];
  }

  /**
   * Updates the list
   */
  list(source) {

  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Resets an modal booleans
   */
  reset() {
    this.drawerVisible = false;
    this.addVisible = false;
    this.removeVisible = false;
  }

  /* 
   * Shows the add product modal 
   */
  showAdd() {
    this.addVisible = true;
  }

  /**
   * handles error
   */
  failure (obj: any) {

    this._appService.showToast('failure', obj._body);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }


}
