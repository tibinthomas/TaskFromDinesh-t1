import { TestBed, inject } from '@angular/core/testing';

import { FormMakingService } from './form-making.service';

describe('FormMakingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormMakingService]
    });
  });

  it('should be created', inject([FormMakingService], (service: FormMakingService) => {
    expect(service).toBeTruthy();
  }));
});
