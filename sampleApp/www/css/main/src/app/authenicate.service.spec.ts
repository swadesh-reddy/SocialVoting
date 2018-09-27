import { TestBed, inject } from '@angular/core/testing';

import { AuthenicateService } from './authenicate.service';

describe('AuthenicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenicateService]
    });
  });

  it('should be created', inject([AuthenicateService], (service: AuthenicateService) => {
    expect(service).toBeTruthy();
  }));
});
