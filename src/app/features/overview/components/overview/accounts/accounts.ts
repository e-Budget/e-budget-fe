import { Component } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss'
})
export class Accounts {
  accounts: any = [
    {
      name: 'Santander',
      logo: 'assets/images/santander.png',
      currentBalance: 1000
    },
    {
      name: 'Coverflex',
      logo: 'assets/images/coverflex.png',
      currentBalance: 214
    },
    {
      name: 'Wise',
      logo: 'assets/images/wise.png',
      currentBalance: 1000
    },
  ];

  totalBalance: number = 3000;
}
