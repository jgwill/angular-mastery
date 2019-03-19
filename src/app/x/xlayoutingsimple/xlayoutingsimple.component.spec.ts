import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XlayoutingsimpleComponent } from './xlayoutingsimple.component';

describe('XlayoutingsimpleComponent', () => {
  let component: XlayoutingsimpleComponent;
  let fixture: ComponentFixture<XlayoutingsimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XlayoutingsimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XlayoutingsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
