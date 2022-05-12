import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebookdeptComponent } from './deletebookdept.component';

describe('DeletebookdeptComponent', () => {
  let component: DeletebookdeptComponent;
  let fixture: ComponentFixture<DeletebookdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebookdeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebookdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
