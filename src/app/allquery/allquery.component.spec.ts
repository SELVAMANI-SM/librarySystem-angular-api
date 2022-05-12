import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllqueryComponent } from './allquery.component';

describe('AllqueryComponent', () => {
  let component: AllqueryComponent;
  let fixture: ComponentFixture<AllqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
