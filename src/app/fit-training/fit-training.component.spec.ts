import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitTrainingComponent } from './fit-training.component';

describe('FitTrainingComponent', () => {
  let component: FitTrainingComponent;
  let fixture: ComponentFixture<FitTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
