import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepicherComponent } from './datepicher.component';

describe('DatepicherComponent', () => {
  let component: DatepicherComponent;
  let fixture: ComponentFixture<DatepicherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepicherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepicherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
