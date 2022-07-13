import { TestBed } from '@angular/core/testing';

import { IntegrationLogService } from './integration-log.service';

describe('IntegrationLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrationLogService = TestBed.get(IntegrationLogService);
    expect(service).toBeTruthy();
  });
});
