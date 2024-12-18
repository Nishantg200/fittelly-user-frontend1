import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyClassComponent } from './daily-class.component';

describe('DailyClassComponent', () => {
  let component: DailyClassComponent;
  let fixture: ComponentFixture<DailyClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
