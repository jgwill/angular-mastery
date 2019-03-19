import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmdiconlistComponent } from './xmdiconlist.component';

describe('XmdiconlistComponent', () => {
  let component: XmdiconlistComponent;
  let fixture: ComponentFixture<XmdiconlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmdiconlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmdiconlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
