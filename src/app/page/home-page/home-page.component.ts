import { Component } from '@angular/core';
import {ProductDAOService} from "../../service/product-dao.service";
import {Product} from "../../entity/Product";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  products: Product[] = [];

  constructor(
      private productDAOService: ProductDAOService
  ) {
    this.getProduct();
  }
  async getProduct() {
    this.products = await this.productDAOService.getProducts();
  }

  doSomeThing() {
    // 先為空
  }

}
