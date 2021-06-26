import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDessertComponent } from './detail-dessert.component';

describe('DetailDessertComponent', () => {
  let component: DetailDessertComponent;
  let fixture: ComponentFixture<DetailDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
