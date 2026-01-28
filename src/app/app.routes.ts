import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component/product-list.component';
import { ProductDetailsComponent } from './product-details.component/product-details.component'; // Asegúrate de importar esto
import { CartComponent } from './cart.component/cart.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Home page' },
  {path: 'products/:productId', component: ProductDetailsComponent, title: 'Product details'},
  { path: 'cart', component: CartComponent, title: 'Cart' },
];
