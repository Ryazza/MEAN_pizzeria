import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPizzaPageComponent } from './detail-pizza-page.component';

describe('DetailPageComponent', () => {
  let component: DetailPizzaPageComponent;
  let fixture: ComponentFixture<DetailPizzaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPizzaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPizzaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
