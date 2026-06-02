import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, products } from './products'; // 👈 Importamos también el array "products"

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product): boolean {
    // 1. Buscamos el producto REAL en el catálogo global para controlar su stock
    const mainProduct = products.find(p => p.id === product.id);

    if (!mainProduct) return false;

    // 2. Buscamos si ya está metido en el carrito
    const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      // Si ya existe en el carrito, miramos el stock del catálogo general
      if (mainProduct.stock > 0) {
        existingItem.quantity += 1;
        mainProduct.stock -= 1; // 👈 Restamos del catálogo general de forma segura
        return true;
      } else {
        window.alert('¡Vaya! No queda más stock disponible de este producto.');
        return false;
      }
    } else {
      // Si se añade por primera vez
      if (mainProduct.stock > 0) {
        this.items.push({ ...product, quantity: 1 });
        mainProduct.stock -= 1; // 👈 Restamos del catálogo general de forma segura
        return true;
      } else {
        window.alert('Este producto no tiene stock disponible.');
        return false;
      }
    }
  }

  // Modificamos para recibir el ID del producto y gestionar el stock global
  removeItem(productId: number) {
    const existingItem = this.items.find(item => item.id === productId);
    const mainProduct = products.find(p => p.id === productId);

    if (existingItem && mainProduct) {
      existingItem.quantity -= 1;
      mainProduct.stock += 1; // 👈 Devolvemos el stock al catálogo general

      if (existingItem.quantity === 0) {
        this.items = this.items.filter(item => item.id !== productId);
      }
    }
    return this.items;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/shipping.json');
  }

  getSuppliers() {
    return this.http.get<any[]>('/suppliers.json');
  }
}
