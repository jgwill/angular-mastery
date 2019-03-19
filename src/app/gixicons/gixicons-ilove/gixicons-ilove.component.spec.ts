import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GixiconsILoveComponent } from './gixicons-ilove.component';

describe('GixiconsILoveComponent', () => {
  let component: GixiconsILoveComponent;
  let fixture: ComponentFixture<GixiconsILoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GixiconsILoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GixiconsILoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
