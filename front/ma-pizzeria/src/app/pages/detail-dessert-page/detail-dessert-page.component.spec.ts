import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDessertPageComponent } from './detail-dessert-page.component';

describe('DetailDessertPageComponent', () => {
  let component: DetailDessertPageComponent;
  let fixture: ComponentFixture<DetailDessertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDessertPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDessertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
