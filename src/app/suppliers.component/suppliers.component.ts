import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CartService} from '../cart.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css',
})
export class SuppliersComponent implements OnInit {

  suppliers!: Observable<any[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.suppliers = this.cartService.getSuppliers();
  }

}
