import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetialComponent } from './moviedetial.component';

describe('MoviedetialComponent', () => {
  let component: MoviedetialComponent;
  let fixture: ComponentFixture<MoviedetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
