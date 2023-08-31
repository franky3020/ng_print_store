import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolBuyBtnComponent } from './cool-buy-btn.component';

describe('CoolBuyBtnComponent', () => {
  let component: CoolBuyBtnComponent;
  let fixture: ComponentFixture<CoolBuyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoolBuyBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoolBuyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
