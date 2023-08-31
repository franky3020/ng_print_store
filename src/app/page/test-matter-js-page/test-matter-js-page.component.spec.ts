import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatterJsPageComponent } from './test-matter-js-page.component';

describe('TestMatterJsPageComponent', () => {
  let component: TestMatterJsPageComponent;
  let fixture: ComponentFixture<TestMatterJsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestMatterJsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestMatterJsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
