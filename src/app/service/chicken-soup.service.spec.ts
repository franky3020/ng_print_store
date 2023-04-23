import { TestBed } from '@angular/core/testing';

import { ChickenSoupService } from './chicken-soup.service';

describe('ChickenSoupForTheSoulGeneratorService', () => {
  let service: ChickenSoupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChickenSoupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get PrimaryOne content at morning', () => {

    let service = TestBed.inject(ChickenSoupService);

    service.isAfternoon = () => {
      return true;
    };

    let content = service.getPrimaryOne();
    expect(content).toBe('但凡精緻好看的，都是暗地裡下過功夫的');
  });

  it('should get PrimaryOne content at morning', () => {

    let service = TestBed.inject(ChickenSoupService);

    service.isAfternoon = () => {
      return false;
    };

    let content = service.getPrimaryOne();
    expect(content).toBe('下午了 不需要心靈雞湯了');
  });

});
