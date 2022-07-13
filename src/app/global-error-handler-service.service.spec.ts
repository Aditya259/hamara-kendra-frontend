import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandlerServiceService } from './global-error-handler-service.service';

describe('GlobalErrorHandlerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalErrorHandlerServiceService = TestBed.get(GlobalErrorHandlerServiceService);
    expect(service).toBeTruthy();
  });
});
