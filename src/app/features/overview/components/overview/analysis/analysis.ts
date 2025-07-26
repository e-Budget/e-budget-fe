import { Component } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-analysis',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './analysis.html',
  styleUrl: './analysis.scss'
})
export class Analysis {

}
