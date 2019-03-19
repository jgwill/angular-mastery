import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmenusideComponent } from './xmenuside.component';

describe('XmenusideComponent', () => {
  let component: XmenusideComponent;
  let fixture: ComponentFixture<XmenusideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmenusideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmenusideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
