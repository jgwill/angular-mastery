import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XshapesComponent } from './xshapes.component';

describe('XshapesComponent', () => {
  let component: XshapesComponent;
  let fixture: ComponentFixture<XshapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XshapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XshapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
