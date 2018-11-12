import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasWithdrawComponent } from './gas-withdraw.component';

describe('GasWithdrawComponent', () => {
  let component: GasWithdrawComponent;
  let fixture: ComponentFixture<GasWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
