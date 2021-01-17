import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailGuard } from './product-details/product-detail.guard';
import { ConvertToSpacesPipe } from '../shared/pipes/convert-to-spaces.pipe' 


@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent , ConvertToSpacesPipe],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductsListComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductsModule { }
