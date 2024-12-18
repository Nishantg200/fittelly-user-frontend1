import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthComponent } from './strength.component';

describe('StrengthComponent', () => {
  let component: StrengthComponent;
  let fixture: ComponentFixture<StrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
