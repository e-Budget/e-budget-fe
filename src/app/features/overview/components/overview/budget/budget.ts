import { Component } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-budget',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './budget.html',
  styleUrl: './budget.scss'
})
export class Budget {
  budgets: Array<any> = [
    {
      icon: 'bi-apple',
      name: 'Groceries',
      monthlyBudgetBalance: 1024.79,
      monthlyBudgetUsedPercentage: 49
    },
    {
      icon: 'bi-apple',
      name: 'Groceries',
      monthlyBudgetBalance: 0.79,
      monthlyBudgetUsedPercentage: 47
    },
    {
      icon: 'bi-cart-fill',
      name: 'Groceries',
      monthlyBudgetBalance: 0,
      monthlyBudgetUsedPercentage: 47
    },
    {
      icon: 'bi-apple',
      name: 'Groceries',
      monthlyBudgetBalance: 124.79,
      monthlyBudgetUsedPercentage: 47
    },
    {
      icon: 'bi-apple',
      name: 'Groceries',
      monthlyBudgetBalance: 124.79,
      monthlyBudgetUsedPercentage: 47
    },
  ];
}
