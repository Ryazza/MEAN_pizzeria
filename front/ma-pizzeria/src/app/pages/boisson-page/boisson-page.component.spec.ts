import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonPageComponent } from './boisson-page.component';

describe('BoissonPageComponent', () => {
  let component: BoissonPageComponent;
  let fixture: ComponentFixture<BoissonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoissonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
