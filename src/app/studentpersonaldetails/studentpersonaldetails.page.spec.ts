import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpersonaldetailsPage } from './studentpersonaldetails.page';

describe('StudentpersonaldetailsPage', () => {
  let component: StudentpersonaldetailsPage;
  let fixture: ComponentFixture<StudentpersonaldetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpersonaldetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpersonaldetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
