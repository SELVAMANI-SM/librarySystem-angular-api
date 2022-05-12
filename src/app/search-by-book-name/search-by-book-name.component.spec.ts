import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBookNameComponent } from './search-by-book-name.component';

describe('SearchByBookNameComponent', () => {
  let component: SearchByBookNameComponent;
  let fixture: ComponentFixture<SearchByBookNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByBookNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByBookNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
