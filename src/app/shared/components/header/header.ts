import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private static readonly GOOD_MORNING_SALUTATION: string = 'Good morning';
  private static readonly GOOD_AFTERNOON_SALUTATION: string = 'Good afternoon';
  private static readonly GOOD_EVENING_SALUTATION: string = 'Good evening';
  private readonly currentDateTime: Date = new Date();

  protected salutation: string;

  @Input({ required: true }) title!: string;

  constructor() {
    this.salutation = this.getSalutation(this.currentDateTime);
  }

  private getSalutation(date: Date): string {
    if(date.getHours() > 0 && date.getHours() <= 12) {
      return Header.GOOD_MORNING_SALUTATION;
    } else if(date.getHours() > 12 && date.getHours() < 18) {
      return Header.GOOD_AFTERNOON_SALUTATION;
    } else {
      return Header.GOOD_EVENING_SALUTATION;
    }
  }
}
