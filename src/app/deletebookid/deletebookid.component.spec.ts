import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebookidComponent } from './deletebookid.component';

describe('DeletebookidComponent', () => {
  let component: DeletebookidComponent;
  let fixture: ComponentFixture<DeletebookidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebookidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebookidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
