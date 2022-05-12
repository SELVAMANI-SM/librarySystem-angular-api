import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberreturnbookComponent } from './memberreturnbook.component';

describe('MemberreturnbookComponent', () => {
  let component: MemberreturnbookComponent;
  let fixture: ComponentFixture<MemberreturnbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberreturnbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberreturnbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
