import { TestBed } from '@angular/core/testing';

import { SearchPartnerService } from './search-partner.service';

describe('SearchPartnerService', () => {
  let service: SearchPartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
