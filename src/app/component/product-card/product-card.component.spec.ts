import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { Component } from '@angular/core';
import { MockCoolBuyBtnComponent } from '../cool-buy-btn/cool-buy-btn.component';

describe('ImgCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductCardComponent,
        MockButtonWithTipComponent,
        MockCoolBuyBtnComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-button-with-tip',
  template: '',
})
class MockButtonWithTipComponent {}
