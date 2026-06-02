import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService, CartItem } from '../cart.service'; // Importamos CartItem
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Cambiamos el tipo a CartItem para tener acceso a la propiedad .quantity
  items: CartItem[] = [];
  checkoutForm: FormGroup;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {}

  onIncrement(item: CartItem) {
    this.cartService.addToCart(item);
    this.items = this.cartService.getItems();
  }

  onDecrement(item: CartItem) {
    this.items = this.cartService.removeItem(item.id); // 👈 Mantiene item.id, que ahora es lo que espera el servicio
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert('Thank you for your purchase!');
    this.checkoutForm.reset();
  }
}
