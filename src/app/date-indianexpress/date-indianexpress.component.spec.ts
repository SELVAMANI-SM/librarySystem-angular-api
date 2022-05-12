import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateIndianexpressComponent } from './date-indianexpress.component';

describe('DateIndianexpressComponent', () => {
  let component: DateIndianexpressComponent;
  let fixture: ComponentFixture<DateIndianexpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateIndianexpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateIndianexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
