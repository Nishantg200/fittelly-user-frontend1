import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitArenaComponent } from './fit-arena.component';

describe('FitArenaComponent', () => {
  let component: FitArenaComponent;
  let fixture: ComponentFixture<FitArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitArenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
