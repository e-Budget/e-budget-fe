import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal } from './modal';
import spyOn = jest.spyOn;

describe('Modal', () => {
  let component: Modal;
  let fixture: ComponentFixture<Modal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close when closeModal is called', () => {
    spyOn(component.close, 'emit');

    component.closeModal();
    expect(component.close.emit).toHaveBeenCalled();
  });
});
