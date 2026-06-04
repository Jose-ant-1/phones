import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  supplier: any | undefined;
  associatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const supplierIdFromRoute = Number(routeParams.get('supplierId'));

    this.cartService.getSuppliers().subscribe(suppliers => {
      this.supplier = suppliers.find(s => s.id === supplierIdFromRoute);

      if (this.supplier) {
        this.associatedProducts = products.filter(
          product => product.supplierId === this.supplier.id
        );
      }


      this.cdr.detectChanges();
    });
  }
}
