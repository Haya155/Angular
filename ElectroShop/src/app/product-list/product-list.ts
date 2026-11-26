import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
/*products: {
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

*/
Products=[{
id:1,
name:"Laptop",
price:850,
category:"Electronics",
isAvailable:true,
discount:0.15,
image:"images/OIP.webp"
},
{
id:2,
name:"Smartphone",
price:450,
category:"Electronics",
isAvailable:true,
discount:0,
image:"images/61Q6BzH+4vL._AC_SL1000_.jpg"
},
{
id:3,
name:"Headphones",
price:120,
category:"Accessories",
isAvailable:false,
discount:0.1,
image:"images/71NlbTSqHbL._AC_.jpg"
},
{
id:4,
name:"Smart Watch	",
price:180,
category:"Accessories",
isAvailable:true,
discount:0.2,
image:"images/smartwatch-huawei-watch-air-zrodlo-huawei-5.jpg"
},
{
id:5,
name:"Tablet",
price:300,
category:"Electronics",
isAvailable:false,
discount:0.05,
image:"images/616SXS5m0eL._AC_SL1500_.jpg"
},
{
id:6,
name:"Keyboard",
price:65,
category:"Accessories",
isAvailable:true,
discount:0.0,
image:"images/HP-125-Keyboard_28380c26-0caf-4c8c-b1b1-6c2410547a0d.9bd3c88a84953f565afe8b5a4265e6a6.avif"
},
{
id:7,
name:"Gaming Mouse",
price:45,
category:"Accessories",
isAvailable:true,
discount:0.1,
image:"images/OIP (1).webp"
},{
id:8,
name:"Monitor",
price:220,
category:"Electronics",
isAvailable:false,
discount:0.0,
image:"images/OIP (2).webp"
}

];
orderStatus :string="jj";
selectedCategory: string = 'Electronics';
}
