import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newui1Component } from './newui1.component';

describe('Newui1Component', () => {
  let component: Newui1Component;
  let fixture: ComponentFixture<Newui1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newui1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newui1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
