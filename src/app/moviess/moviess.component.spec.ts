import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviessComponent } from './moviess.component';

describe('MoviessComponent', () => {
  let component: MoviessComponent;
  let fixture: ComponentFixture<MoviessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
