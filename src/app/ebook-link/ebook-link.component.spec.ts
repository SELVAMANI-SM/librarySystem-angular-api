import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookLinkComponent } from './ebook-link.component';

describe('EbookLinkComponent', () => {
  let component: EbookLinkComponent;
  let fixture: ComponentFixture<EbookLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbookLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
