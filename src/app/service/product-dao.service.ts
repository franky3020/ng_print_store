import {Injectable} from '@angular/core';
import {ProductBuilder} from "../entity/Product";

@Injectable({
    providedIn: 'root'
})
export class ProductDAOService {

    constructor() {
    }

    getProduct() {
        let productBuilder = new ProductBuilder('1', 500, 'toy');

        return productBuilder
            .setDescribe('is a good toy')
            .build();

    }
}

