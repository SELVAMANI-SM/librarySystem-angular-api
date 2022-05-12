import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBookDeptComponent } from './search-by-book-dept.component';

describe('SearchByBookDeptComponent', () => {
  let component: SearchByBookDeptComponent;
  let fixture: ComponentFixture<SearchByBookDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByBookDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByBookDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
