import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewspaperComponent } from './addnewspaper.component';

describe('AddnewspaperComponent', () => {
  let component: AddnewspaperComponent;
  let fixture: ComponentFixture<AddnewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
