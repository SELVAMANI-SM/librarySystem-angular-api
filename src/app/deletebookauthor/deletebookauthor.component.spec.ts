import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebookauthorComponent } from './deletebookauthor.component';

describe('DeletebookauthorComponent', () => {
  let component: DeletebookauthorComponent;
  let fixture: ComponentFixture<DeletebookauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebookauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebookauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
