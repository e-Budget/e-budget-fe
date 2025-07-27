import {Component, Input} from '@angular/core';
import {Modal} from "../../../../../../shared/components/modal/modal";

@Component({
  selector: 'app-action',
    imports: [
        Modal
    ],
  templateUrl: './action.html',
  styleUrl: './action.scss'
})
export class Action {
  @Input({ required: true }) actionName!: string;
  @Input({ required: true }) actionIcon!: string;

  isModalVisible: boolean = false;

  openModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
