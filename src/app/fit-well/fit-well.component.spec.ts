import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitWellComponent } from './fit-well.component';

describe('FitWellComponent', () => {
  let component: FitWellComponent;
  let fixture: ComponentFixture<FitWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitWellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
