import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css'
})
export class DirectivesDemo {

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

  changeStoreStatus(): void {
    this.isStoreOpen = !this.isStoreOpen;
  }

  changeAvailability(id: number): void {
    for (let product of this.products) {
      if (product.id === id) {
        product.isAvailable = !product.isAvailable;
      }
    }
  }

}