import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitGuidProComponent } from './fit-guid-pro.component';

describe('FitGuidProComponent', () => {
  let component: FitGuidProComponent;
  let fixture: ComponentFixture<FitGuidProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitGuidProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitGuidProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
