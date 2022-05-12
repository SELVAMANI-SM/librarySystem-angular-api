import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianexpressNewspaperComponent } from './indianexpress-newspaper.component';

describe('IndianexpressNewspaperComponent', () => {
  let component: IndianexpressNewspaperComponent;
  let fixture: ComponentFixture<IndianexpressNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianexpressNewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianexpressNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
