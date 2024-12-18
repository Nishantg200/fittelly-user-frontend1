import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZumbaComponent } from './zumba.component';

describe('ZumbaComponent', () => {
  let component: ZumbaComponent;
  let fixture: ComponentFixture<ZumbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZumbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
