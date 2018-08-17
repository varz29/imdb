import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesbygenreComponent } from './moviesbygenre.component';

describe('MoviesbygenreComponent', () => {
  let component: MoviesbygenreComponent;
  let fixture: ComponentFixture<MoviesbygenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesbygenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesbygenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
