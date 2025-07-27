import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Input({ required: true }) title!: string;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
