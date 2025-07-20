import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceItem } from './balance-item';

describe('BalanceItem', () => {
  let component: BalanceItem;
  let fixture: ComponentFixture<BalanceItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
