import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmylistComponent } from './xmylist.component';

describe('XmylistComponent', () => {
  let component: XmylistComponent;
  let fixture: ComponentFixture<XmylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
