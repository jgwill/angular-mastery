import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XformnewuserComponent } from './xformnewuser.component';

describe('XformnewuserComponent', () => {
  let component: XformnewuserComponent;
  let fixture: ComponentFixture<XformnewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XformnewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XformnewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
