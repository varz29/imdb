import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuiMoviedetailsComponent } from './newui-moviedetails.component';

describe('NewuiMoviedetailsComponent', () => {
  let component: NewuiMoviedetailsComponent;
  let fixture: ComponentFixture<NewuiMoviedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewuiMoviedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewuiMoviedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
