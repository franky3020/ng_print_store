import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentPageComponent } from './demo-component-page.component';

describe('DemoComponentPageComponent', () => {
  let component: DemoComponentPageComponent;
  let fixture: ComponentFixture<DemoComponentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentPageComponent ]
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
