import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XshapingButtonsComponent } from './xshaping-buttons.component';

describe('XshapingButtonsComponent', () => {
  let component: XshapingButtonsComponent;
  let fixture: ComponentFixture<XshapingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XshapingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XshapingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
