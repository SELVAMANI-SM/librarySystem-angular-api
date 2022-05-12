import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinduNewspaperComponent } from './hindu-newspaper.component';

describe('HinduNewspaperComponent', () => {
  let component: HinduNewspaperComponent;
  let fixture: ComponentFixture<HinduNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinduNewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinduNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
