import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembertakebookComponent } from './membertakebook.component';

describe('MembertakebookComponent', () => {
  let component: MembertakebookComponent;
  let fixture: ComponentFixture<MembertakebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembertakebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembertakebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
