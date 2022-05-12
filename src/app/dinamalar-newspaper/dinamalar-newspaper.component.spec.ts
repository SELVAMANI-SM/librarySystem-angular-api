import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamalarNewspaperComponent } from './dinamalar-newspaper.component';

describe('DinamalarNewspaperComponent', () => {
  let component: DinamalarNewspaperComponent;
  let fixture: ComponentFixture<DinamalarNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamalarNewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamalarNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
