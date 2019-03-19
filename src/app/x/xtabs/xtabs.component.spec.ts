import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtabsComponent } from './xtabs.component';

describe('XtabsComponent', () => {
  let component: XtabsComponent;
  let fixture: ComponentFixture<XtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
