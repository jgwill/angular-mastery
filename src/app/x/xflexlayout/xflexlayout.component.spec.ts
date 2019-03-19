import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XflexlayoutComponent } from './xflexlayout.component';

describe('XflexlayoutComponent', () => {
  let component: XflexlayoutComponent;
  let fixture: ComponentFixture<XflexlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XflexlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XflexlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
