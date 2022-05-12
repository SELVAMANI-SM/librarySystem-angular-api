import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzzComponent } from './zzz.component';

describe('ZzzComponent', () => {
  let component: ZzzComponent;
  let fixture: ComponentFixture<ZzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
