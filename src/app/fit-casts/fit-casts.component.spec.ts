import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitCastsComponent } from './fit-casts.component';

describe('FitCastsComponent', () => {
  let component: FitCastsComponent;
  let fixture: ComponentFixture<FitCastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitCastsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitCastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
