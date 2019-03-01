import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeDiscreptionPage } from './notice-discreption.page';

describe('NoticeDiscreptionPage', () => {
  let component: NoticeDiscreptionPage;
  let fixture: ComponentFixture<NoticeDiscreptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeDiscreptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeDiscreptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
