import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  items: any[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();

  }
}
