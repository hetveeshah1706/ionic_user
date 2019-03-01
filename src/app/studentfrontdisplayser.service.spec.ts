import { TestBed } from '@angular/core/testing';

import { StudentfrontdisplayserService } from './studentfrontdisplayser.service';

describe('StudentfrontdisplayserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentfrontdisplayserService = TestBed.get(StudentfrontdisplayserService);
    expect(service).toBeTruthy();
  });
});
