
/*import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 productName = signal("Laptop");
productDescription = signal("Dell Laptop, Core i7, 16GB RAM");
productPrice = signal(850);
isAvailable = signal(true);
productImage=signal("images/OIP.webp");



cartName: string = "";
cartPrice: number = 0;
cartQuantity: number = 0;


receiveCart(data: { name: string; quantity: number }): void {
  this.cartName = data.name;
  this.cartQuantity = data.quantity;
  this.cartPrice = this.productPrice();
}
showLaptop(): void {
  this.productName.set("Laptop");
  this.productDescription.set("Dell Laptop, Core i7, 16GB RAM");
  this.productPrice.set(850);
  this.isAvailable.set(true);
this.productImage.set("images/OIP.webp");

}

showHeadphones(): void {
  this.productName.set("Wireless Headphones");
  this.productDescription.set("Bluetooth Headphones");
  this.productPrice.set(120);
  this.isAvailable.set(true);
  this.productImage.set("images/71NlbTSqHbL._AC_.jpg");
}*/
  /*storeName: string = "ElectroShop";
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
  }*/
 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  storeName: string = "ElectroShop";

  isStoreOpen: boolean = true;

  selectedPage: string = "Products";

  products = [
    {
      id: 1,
      name: "Laptop",
      price: 850,
      isAvailable: true
    },
    {
      id: 2,
      name: "Headphones",
      price: 120,
      isAvailable: true
    },
    {
      id: 3,
      name: "Keyboard",
      price: 45,
      isAvailable: false
    }
  ];

  selectPage(page: string): void {
    this.selectedPage = page;
  }

}
