import { Component, OnInit } from '@angular/core'; // Importamos OnInit
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping', // Quitamos el .component del selector por buena práctica
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent implements OnInit { // Asegúrate de que ponga 'implements OnInit'
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
