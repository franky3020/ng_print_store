import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingTextComponent } from './typing-text.component';

describe('TypingTextComponent', () => {
  let component: TypingTextComponent;
  let fixture: ComponentFixture<TypingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate right text lenrth', () => {
    let textLength = component.getTextLength('中文');
    expect(textLength).toBe(4);
  });

});
