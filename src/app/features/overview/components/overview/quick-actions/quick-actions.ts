import { Component } from '@angular/core';
import {Action} from './action/action';

@Component({
  selector: 'app-quick-actions',
  imports: [
    Action
  ],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.scss'
})
export class QuickActions {

}
