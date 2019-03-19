import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XanimHeartbeatComponent } from './xanim-heartbeat.component';

describe('XanimHeartbeatComponent', () => {
  let component: XanimHeartbeatComponent;
  let fixture: ComponentFixture<XanimHeartbeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XanimHeartbeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XanimHeartbeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
