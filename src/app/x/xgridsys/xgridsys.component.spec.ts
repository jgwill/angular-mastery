import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XgridsysComponent } from './xgridsys.component';

describe('XgridsysComponent', () => {
  let component: XgridsysComponent;
  let fixture: ComponentFixture<XgridsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XgridsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XgridsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
