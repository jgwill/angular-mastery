import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XanimripplingComponent } from './xanimrippling.component';

describe('XanimripplingComponent', () => {
  let component: XanimripplingComponent;
  let fixture: ComponentFixture<XanimripplingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XanimripplingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XanimripplingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
