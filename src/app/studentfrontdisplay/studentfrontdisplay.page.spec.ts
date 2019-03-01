import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfrontdisplayPage } from './studentfrontdisplay.page';

describe('StudentfrontdisplayPage', () => {
  let component: StudentfrontdisplayPage;
  let fixture: ComponentFixture<StudentfrontdisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentfrontdisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentfrontdisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
