import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCardComponent } from './img-card.component';
import {Component} from "@angular/core";
import {MockCoolBuyBtnComponent} from "../cool-buy-btn/cool-buy-btn.component";

describe('ImgCardComponent', () => {
  let component: ImgCardComponent;
  let fixture: ComponentFixture<ImgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCardComponent, MockButtonWithTipComponent, MockCoolBuyBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'app-button-with-tip',
  template: ''
})
class MockButtonWithTipComponent {
}
