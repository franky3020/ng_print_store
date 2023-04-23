import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentPageComponent } from './demo-component-page.component';
import {Component} from "@angular/core";

describe('DemoComponentPageComponent', () => {
  let component: DemoComponentPageComponent;
  let fixture: ComponentFixture<DemoComponentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentPageComponent, MockButtonWithTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComponentPageComponent);
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
