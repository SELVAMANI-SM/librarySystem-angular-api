import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliedqueryComponent } from './repliedquery.component';

describe('RepliedqueryComponent', () => {
  let component: RepliedqueryComponent;
  let fixture: ComponentFixture<RepliedqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepliedqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepliedqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
