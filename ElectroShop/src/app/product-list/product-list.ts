import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
products: {
    name: string;
    description: string;
    price: number;
    image: string;
    isAvailable: boolean;
  }[] = [
    {
      name: "Laptop",
      description: "High-performance laptop",
      price: 750,
      image: "images/OIP.webp",
      isAvailable: true
    },
    {
      name: "Smartphone",
      description: "Latest smartphone",
      price: 450,
      image: "images/61Q6BzH+4vL._AC_SL1000_.jpg",
      isAvailable: true
    },
    {
      name: "Headphones",
      description: "Wireless headphones",
      price: 80,
      image: "images/71NlbTSqHbL._AC_.jpg",
      isAvailable: true
    },
    {
      name: "Smart Watch",
      description: "Smart fitness watch",
      price: 120,
      image: "images/smartwatch-huawei-watch-air-zrodlo-huawei-5.jpg",
      isAvailable: true
    },
    {
      name: "Keyboard",
      description: "Mechanical keyboard",
      price: 45,
      image: "images/HP-125-Keyboard_28380c26-0caf-4c8c-b1b1-6c2410547a0d.9bd3c88a84953f565afe8b5a4265e6a6.avif",
      isAvailable: false
    }
  ];

  buyProduct(name: string): void {
    alert("You selected " + name);
  }


}
