import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryrepliedComponent } from './queryreplied.component';

describe('QueryrepliedComponent', () => {
  let component: QueryrepliedComponent;
  let fixture: ComponentFixture<QueryrepliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryrepliedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryrepliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
