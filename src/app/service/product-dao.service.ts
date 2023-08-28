import {Injectable} from '@angular/core';
import {Product, ProductBuilder} from "../entity/Product";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GetProductRes, getProductRes2Product} from "../api-req-res/getProductRes";
import {EnvironmentConfigService} from "./environment-config.service";
import {environment} from "../../environment";
import {AddProductReq} from "../api-req-res/AddProductReq";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductDAOService {

    updateProductSubject: Subject<void> = new Subject<void>();

    constructor(private http: HttpClient, private environmentConfigService: EnvironmentConfigService) {
    }
    getProducts(): Promise<Product[]> {
        let products: Product[] = [];
        
        if (this.environmentConfigService.getUseMockData()) {
            return this.getMockProducts();
        }

        return new Promise((resolve) => {

            const baseUrl = environment.api_test_url;
            this.http.get<GetProductRes[]>(baseUrl + '/api/product').subscribe((res) => {
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

    addNewProduct(jwt: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const baseUrl = environment.api_test_url;
            
            let addProductReq = new AddProductReq();
            addProductReq.name = new Date().toString();
            addProductReq.create_user_id = 1;
            addProductReq.price = 1000;
            addProductReq.describe = new Date().toString();
            

            const headers_object = new HttpHeaders().set("Authorization", "Bearer " + jwt);
            this.http.post(baseUrl + "/api/product", addProductReq, {
                headers: headers_object
            }).subscribe((res) => {
                this.updateProductSubject.next();
                return resolve();
            }, (error) => {
                return reject();
            });
            
        });
    }

    deleteProduct(id: number, jwt: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const baseUrl = environment.api_test_url;

            const headers_object = new HttpHeaders().set("Authorization", "Bearer " + jwt);
            this.http.delete(baseUrl + "/api/product/" + id.toString(), {
                headers: headers_object
            }).subscribe((res) => {
                this.updateProductSubject.next();
                return resolve();
            }, (error) => {
                return reject();
            });

        });
    }
    
    getMockProducts(): Promise<Product[]>  {
        let products: Product[] = [];
        return new Promise((resolve)=>{
            setTimeout(()=>{

                for (let i = 0 ; i < 3 ; i++) {
                    let productBuilder = new ProductBuilder(1, 500, 'toy');
                    let product = productBuilder
                        .setDescribe('is a good toy')
                        .setCreateUserName('test')
                        .build();
                    products.push(product);
                }

                return resolve(products);

            },1000); // 模擬API 1 秒後才到達
        })
    }
}

