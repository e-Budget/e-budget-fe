import {Component, Input, numberAttribute} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-balance-item',
  imports: [CurrencyPipe],
  templateUrl: './balance-item.html',
  styleUrl: './balance-item.scss'
})
export class BalanceItem {
  @Input({ required: true }) displayIcon!: string;
  @Input({ required: true }) displayText!: string;
  @Input({ transform: numberAttribute, required: true }) displayAmount!: number;
}
