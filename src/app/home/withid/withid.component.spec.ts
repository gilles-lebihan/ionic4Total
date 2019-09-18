import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithidComponent } from './withid.component';

describe('WithidComponent', () => {
  let component: WithidComponent;
  let fixture: ComponentFixture<WithidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithidComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
