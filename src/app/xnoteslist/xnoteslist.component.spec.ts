import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XnoteslistComponent } from './xnoteslist.component';

describe('XnoteslistComponent', () => {
  let component: XnoteslistComponent;
  let fixture: ComponentFixture<XnoteslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XnoteslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XnoteslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
