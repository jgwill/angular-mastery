import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XresourcesComponent } from './xresources.component';

describe('XresourcesComponent', () => {
  let component: XresourcesComponent;
  let fixture: ComponentFixture<XresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
