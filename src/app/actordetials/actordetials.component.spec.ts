import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActordetialsComponent } from './actordetials.component';

describe('ActordetialsComponent', () => {
  let component: ActordetialsComponent;
  let fixture: ComponentFixture<ActordetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActordetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActordetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
