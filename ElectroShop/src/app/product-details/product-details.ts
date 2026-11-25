import { Component, signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {

  @Input() productName: string = "";
  @Input() productDescription: string = "";
  @Input() productPrice: number = 0;
  @Input() isAvailable: boolean = false;
@Input() productImage: string = "";
  @Output() cartAdded = new EventEmitter<{
    name: string;
    quantity: number;
  }>();


  quantity = signal(1);

  increaseQuantity(): void {
    this.quantity.update(value => value + 1);
  }

  decreaseQuantity(): void {
    if (this.quantity() > 1) {
      this.quantity.update(value => value - 1);
    }
  }

  addToCart(): void {
    this.cartAdded.emit({
      name: this.productName,
      quantity: this.quantity()
    });
  }

}