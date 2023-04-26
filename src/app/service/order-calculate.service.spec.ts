import { TestBed } from '@angular/core/testing';

import {OrderCalculateService, Product} from './order-calculate.service';

describe('OrderCalculateService', () => {
  let service: OrderCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('calculate order', () => {

    let product = new Product('test1', 500, 3);
    service.addProduct(product);
    let product2 = new Product('test2', 300, 6);
    service.addProduct(product2);

    service.setTransportation(50);

    let calResult = service.calculate();
    expect(calResult).toBe(500*3 + 300*6 + 50);


  });

});
