import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-alert.component.html',
  styleUrl: './product-alert.component.css',
})
export class ProductAlertComponent {
@Input() product: Product | undefined;
@Output() notify = new EventEmitter();
}
