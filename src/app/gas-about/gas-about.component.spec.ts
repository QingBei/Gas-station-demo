import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasAboutComponent } from './gas-about.component';

describe('GasAboutComponent', () => {
  let component: GasAboutComponent;
  let fixture: ComponentFixture<GasAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
