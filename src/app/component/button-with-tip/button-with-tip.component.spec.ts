import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithTipComponent } from './button-with-tip.component';

describe('ButtonWithTipComponent', () => {
  let component: ButtonWithTipComponent;
  let fixture: ComponentFixture<ButtonWithTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWithTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
