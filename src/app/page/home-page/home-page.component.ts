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
    setInterval(async () => {
      // TODO: 需檢查有無更新 無則不需要刷新 所以API需要有更新時間
      
      let products = await this.productDAOService.getProducts();
      if (this.products.length !== products.length) {
        this.products = products
      }
      
    }, 500);
  }

  doSomeThing() {
    // 先為空
  }

}
