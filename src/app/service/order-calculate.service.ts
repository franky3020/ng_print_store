import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderCalculateService {

  order: Order = new Order();
  constructor() { }

  addProduct(product: Product) {
    this.order.products.push(product);
  }

  getOrder() {
    return this.order;
  }

  setTransportation(transportation: number) {
    this.order.transportation = transportation;
  }


  calculate() {
    let sum = 0;
    this.order.products.forEach((product)=>{
      sum = sum + product.price * product.quantity;
    });
    sum = sum + this.order.transportation;
    return sum;
  }




}

export class Order {
  products: Product[] = [];
  transportation: number = 0;
}


export class Product {
  name = '';
  price = 0;
  quantity = 0;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}




// {
//   "items": [
//   {
//     "product": "book",
//     "price": 500,
//     "quantity": 3
//   },
//   {
//     "product": "pen",
//     "price": 30,
//     "quantity": 4
//   }
// ],
//     "transportation": 80
// }