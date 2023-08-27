import { TestBed } from '@angular/core/testing';

import { ProductDAOService } from './product-dao.service';

describe('ProductDAOService', () => {
  let service: ProductDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
