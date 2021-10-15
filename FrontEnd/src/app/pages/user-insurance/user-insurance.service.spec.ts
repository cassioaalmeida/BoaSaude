import { TestBed } from '@angular/core/testing';

import { UserInsuranceService } from './user-insurance.service';

describe('UserInsuranceService', () => {
  let service: UserInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
