import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XresourcecardComponent } from './xresourcecard.component';

describe('XresourcecardComponent', () => {
  let component: XresourcecardComponent;
  let fixture: ComponentFixture<XresourcecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XresourcecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XresourcecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
