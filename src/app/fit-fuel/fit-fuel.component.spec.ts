import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFuelComponent } from './fit-fuel.component';

describe('FitFuelComponent', () => {
  let component: FitFuelComponent;
  let fixture: ComponentFixture<FitFuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitFuelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
