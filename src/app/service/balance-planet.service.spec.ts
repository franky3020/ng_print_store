import { TestBed } from '@angular/core/testing';

import { BalancePlanetService } from './balance-planet.service';

describe('BalancePlanetService', () => {
  let service: BalancePlanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalancePlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sum even', () => {
    let sum = service.sumEven([77, 2, 60, 4]);
    expect(sum).toBe(77 + 60 );
  });

  it('sum odd', () => {
    let sum = service.sumOdd([77, 2, 60, 4]);
    expect(sum).toBe(2 + 4 );
  });

  it('get will destroy planet index', () => {
    let planetIndex = service.getDestroyPlanetIndex([1, 6, 3, 9, 7]);
    expect(planetIndex).toBe(1 );
  });

  it('when destroy planet is empty', () => {
    let planetIndex = service.getDestroyPlanetIndex([]);
    expect(planetIndex).toBe(-1 );
  });

  it('test testCopy()', () => {
   service.testCopy();
  });



});
