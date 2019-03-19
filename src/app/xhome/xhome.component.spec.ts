import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XhomeComponent } from './xhome.component';

describe('XhomeComponent', () => {
  let component: XhomeComponent;
  let fixture: ComponentFixture<XhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
