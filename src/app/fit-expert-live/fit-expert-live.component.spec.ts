import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitExpertLiveComponent } from './fit-expert-live.component';

describe('FitExpertLiveComponent', () => {
  let component: FitExpertLiveComponent;
  let fixture: ComponentFixture<FitExpertLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitExpertLiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitExpertLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
