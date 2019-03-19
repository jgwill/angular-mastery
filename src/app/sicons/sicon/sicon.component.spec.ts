import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiconComponent } from './sicon.component';

describe('SiconComponent', () => {
  let component: SiconComponent;
  let fixture: ComponentFixture<SiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
