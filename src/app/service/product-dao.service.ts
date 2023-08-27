import {Injectable} from '@angular/core';
import {Product, ProductBuilder} from "../entity/Product";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GetProductRes, getProductRes2Product} from "../api-req-res/getProductRes";
import {EnvironmentConfigService} from "./environment-config.service";

@Injectable({
    providedIn: 'root'
})
export class ProductDAOService {

    constructor(private http: HttpClient, private environmentConfigService: EnvironmentConfigService) {
    }
    getProducts(): Promise<Product[]> {
        let products: Product[] = [];
        
        if (this.environmentConfigService.getUseMockData()) {
            return this.getMockProducts();
        }

        return new Promise((resolve) => {
            this.http.get<GetProductRes[]>('http://frankyya.com:35002/api/product').subscribe((res) => {
                let getProductResArray: GetProductRes[] = res;
                console.log("getProductRes test");
                console.log(getProductResArray);
                getProductResArray.forEach((item) => {
                    const product= getProductRes2Product(item);
                    products.push(product);
                })
                return resolve(products);
            });
        });
    }
    
    getMockProducts(): Promise<Product[]>  {
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

