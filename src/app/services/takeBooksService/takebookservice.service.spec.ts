import { TestBed } from '@angular/core/testing';

import { TakebookserviceService } from './takebookservice.service';

describe('TakebookserviceService', () => {
  let service: TakebookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakebookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
