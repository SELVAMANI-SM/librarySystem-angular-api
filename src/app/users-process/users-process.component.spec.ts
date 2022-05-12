import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProcessComponent } from './users-process.component';

describe('UsersProcessComponent', () => {
  let component: UsersProcessComponent;
  let fixture: ComponentFixture<UsersProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
