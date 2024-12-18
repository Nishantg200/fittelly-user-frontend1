import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitCareComponent } from './fit-care.component';

describe('FitCareComponent', () => {
  let component: FitCareComponent;
  let fixture: ComponentFixture<FitCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
