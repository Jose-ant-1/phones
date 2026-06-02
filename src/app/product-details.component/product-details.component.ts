import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  supplier: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);

    if (this.product) {
      this.cartService.getSuppliers().subscribe(suppliers => {
        this.supplier = suppliers.find(s => s.id === this.product?.supplierId);
      });
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  comprobarStock() {
    return this.product ? this.product.stock > 0 : false;
  }
}
