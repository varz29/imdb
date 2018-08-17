import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectordetialsComponent } from './directordetials.component';

describe('DirectordetialsComponent', () => {
  let component: DirectordetialsComponent;
  let fixture: ComponentFixture<DirectordetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectordetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectordetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
