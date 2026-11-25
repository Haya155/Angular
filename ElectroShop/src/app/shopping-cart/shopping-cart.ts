import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {

  @Input() productName: string = "";
  @Input() productPrice: number = 0;
  @Input() quantity: number = 0;

  calculateTotal(): number {
    return this.productPrice * this.quantity;
  }

}