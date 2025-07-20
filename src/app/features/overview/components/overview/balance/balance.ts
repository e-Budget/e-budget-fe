import { Component } from '@angular/core';
import {BalanceItem} from './balance-item/balance-item';

@Component({
  selector: 'app-balance',
  imports: [BalanceItem],
  templateUrl: './balance.html',
  styleUrl: './balance.scss'
})
export class Balance {

}
