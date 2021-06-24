import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTextComponent } from './pizza-text.component';

describe('PizzaTextComponent', () => {
  let component: PizzaTextComponent;
  let fixture: ComponentFixture<PizzaTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
