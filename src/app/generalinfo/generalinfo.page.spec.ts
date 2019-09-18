import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralinfoPage } from './generalinfo.page';

describe('GeneralinfoPage', () => {
  let component: GeneralinfoPage;
  let fixture: ComponentFixture<GeneralinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
