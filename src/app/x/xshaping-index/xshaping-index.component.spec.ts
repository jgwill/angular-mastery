import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XshapingIndexComponent } from './xshaping-index.component';

describe('XshapingIndexComponent', () => {
  let component: XshapingIndexComponent;
  let fixture: ComponentFixture<XshapingIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XshapingIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XshapingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
