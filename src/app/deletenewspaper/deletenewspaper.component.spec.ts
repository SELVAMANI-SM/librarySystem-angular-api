import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletenewspaperComponent } from './deletenewspaper.component';

describe('DeletenewspaperComponent', () => {
  let component: DeletenewspaperComponent;
  let fixture: ComponentFixture<DeletenewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletenewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletenewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
