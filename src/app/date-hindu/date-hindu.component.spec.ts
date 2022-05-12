import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateHinduComponent } from './date-hindu.component';

describe('DateHinduComponent', () => {
  let component: DateHinduComponent;
  let fixture: ComponentFixture<DateHinduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateHinduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateHinduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
