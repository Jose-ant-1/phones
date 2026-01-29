import { Component } from '@angular/core';
import { products } from '../products';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import { ProductAlertComponent } from '../product-alert.component/product-alert.component';

@Component({
  selector: 'app-product-list.component',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ProductAlertComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [...products]

  share() {
    window.alert('The product has been shared!')
  }

  onNotify() {
    window.alert('We will notify when the phone price drops')
  }

}
