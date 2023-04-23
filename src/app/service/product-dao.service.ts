import {Injectable} from '@angular/core';
import {Product, ProductBuilder} from "../entity/Product";

@Injectable({
    providedIn: 'root'
})
export class ProductDAOService {

    constructor() {
    }

    getProduct(): Promise<Product> {
        return new Promise((resolve)=>{
            setTimeout(()=>{

                let productBuilder = new ProductBuilder('1', 500, 'toy');
                return resolve(productBuilder
                    .setDescribe('is a good toy')
                    .build());

            },1000); // 模擬API 1 秒後才到達
        })
    }

    getProducts(): Promise<Product[]> {
        let products: Product[] = [];
        return new Promise((resolve)=>{
            setTimeout(()=>{

                for (let i = 0 ; i < 3 ; i++) {
                    let productBuilder = new ProductBuilder('1', 500, 'toy');
                    let product = productBuilder
                        .setDescribe('is a good toy')
                        .build();
                    products.push(product);
                }

                return resolve(products);

            },1000); // 模擬API 1 秒後才到達
        })
    }
}

