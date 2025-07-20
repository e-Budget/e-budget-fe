import {Component, Input, numberAttribute} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-kpi-card',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss'
})
export class KpiCard {
  @Input({ required: true }) kpiIcon!: string;
  @Input({ required: true }) kpiName!: string;
  @Input({ transform: numberAttribute, required: true }) kpiValue!: number;
}
