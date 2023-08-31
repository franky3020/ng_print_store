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
    spyOn(service, 'isAfternoon').and.returnValue(false);
    let content = service.getPrimaryOne();
    expect(content).toBe('工作進度上越快落後，你就會有越充足的時間趕上');
  });

  it('should get PrimaryOne content at morning', () => {
    spyOn(service, 'isAfternoon').and.returnValue(true);
    let content = service.getPrimaryOne();
    expect(content).toBe(
      '為什麼我們沒有時間把事情做對，卻總有時間把事情砍掉重練？',
    );
  });
});
