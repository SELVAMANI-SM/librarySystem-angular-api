import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallmemberComponent } from './showallmember.component';

describe('ShowallmemberComponent', () => {
  let component: ShowallmemberComponent;
  let fixture: ComponentFixture<ShowallmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
