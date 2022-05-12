import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDinamalarComponent } from './date-dinamalar.component';

describe('DateDinamalarComponent', () => {
  let component: DateDinamalarComponent;
  let fixture: ComponentFixture<DateDinamalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDinamalarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDinamalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
