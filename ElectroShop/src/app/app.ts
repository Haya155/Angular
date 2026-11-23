
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop');

  storeName: string = "ElectroShop";
  storeDescription: string = "Your favorite electronics store";
  storeAddress: string = "Amman, Jordan";
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = "USD";

  productNames: string[] = [
    "Laptop", "Smartphone", "Headphones",
    "Smart Watch", "Keyboard"
  ];

  productPrices: number[] = [750, 450, 80, 120, 45];

  featuredProduct: {
    name: string;
    price: number;
    description: string;
  } = {
    name: "Laptop",
    price: 750,
    description: "High-performance laptop"
  };

  storeStatus: string = "";
  discountPercentage: number = 10;
  finalPrice: number = 0;
  mostExpensive: number = 0;
  cheapest: number = 0;
  totalValue: number = 0;

  constructor() {

    if (this.isStoreOpen) {
      this.storeStatus = "We Are Open";
    } else {
      this.storeStatus = "We Are Closed";
    }

    if (this.discountPercentage > 0) {
      this.finalPrice = this.featuredProduct.price - (this.featuredProduct.price * this.discountPercentage / 100);
    } else {
      this.finalPrice = this.featuredProduct.price;
    }

    this.totalProducts = this.productPrices.length;

    if (this.productPrices.length > 0) {
      this.mostExpensive = this.productPrices[0];
      this.cheapest = this.productPrices[0];
    }

    for (let i = 0; i < this.productPrices.length; i++) {

      if (this.productPrices[i] > this.mostExpensive) {
        this.mostExpensive = this.productPrices[i];
      }

      if (this.productPrices[i] < this.cheapest) {
        this.cheapest = this.productPrices[i];
      }

      this.totalValue += this.productPrices[i];
    }
  }
}
