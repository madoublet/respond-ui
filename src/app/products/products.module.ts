import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { RemoveProductImageComponent } from './remove-product-image/remove-product-image.component';
import { SharedModule } from '../shared/shared.module';

// sortable
import { SortablejsModule } from 'angular-sortablejs';

// translate
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    SortablejsModule
  ],
  declarations: [ProductsComponent, AddProductComponent, EditProductComponent, RemoveProductComponent, RemoveProductImageComponent]
})
export class ProductsModule { }
