import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Action } from './action';

describe('Action', () => {
  let component: Action;
  let fixture: ComponentFixture<Action>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Action]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Action);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    component.openModal();
    expect(component.isModalVisible).toBe(true);
  });

  it('should close modal', () => {
    component.closeModal();
    expect(component.isModalVisible).toBe(false);
  });
});
