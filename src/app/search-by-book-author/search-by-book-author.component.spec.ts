import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBookAuthorComponent } from './search-by-book-author.component';

describe('SearchByBookAuthorComponent', () => {
  let component: SearchByBookAuthorComponent;
  let fixture: ComponentFixture<SearchByBookAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByBookAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByBookAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
