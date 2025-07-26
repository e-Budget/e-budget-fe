import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-latest',
  imports: [
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './latest.html',
  styleUrl: './latest.scss'
})
export class Latest {
  latest: Array<any> = [
    {
      img: 'assets/images/paypal.png',
      name: 'Paypal',
      type: 'Expense',
      account: 'Santander',
      date: new Date(),
      amount: -345.56,
    },
    {
      img: 'assets/images/paypal.png',
      name: 'Paypal',
      type: 'Income',
      account: 'Santander',
      date: new Date(),
      amount: 12.56,
    },
    {
      img: 'assets/images/paypal.png',
      name: 'Paypal',
      type: 'Expense',
      account: 'Santander',
      date: new Date(),
      amount: -1002.56,
    },
    {
      img: 'assets/images/paypal.png',
      name: 'Paypal',
      type: 'Expense',
      account: 'Santander',
      date: new Date(),
      amount: -1002.56,
    },
    {
      img: 'assets/images/paypal.png',
      name: 'Paypal',
      type: 'Expense',
      account: 'Santander',
      date: new Date(),
      amount: -1002.56,
    },
  ];
}
