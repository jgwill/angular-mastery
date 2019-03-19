import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpolyComponent } from './xpoly.component';

describe('XpolyComponent', () => {
  let component: XpolyComponent;
  let fixture: ComponentFixture<XpolyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpolyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
