import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GixendofComponent } from './gixendof.component';

describe('GixendofComponent', () => {
  let component: GixendofComponent;
  let fixture: ComponentFixture<GixendofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GixendofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GixendofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
