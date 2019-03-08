import { TestBed } from '@angular/core/testing';

import { ExamScheduleService } from './exam-schedule.service';

describe('ExamScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamScheduleService = TestBed.get(ExamScheduleService);
    expect(service).toBeTruthy();
  });
});
