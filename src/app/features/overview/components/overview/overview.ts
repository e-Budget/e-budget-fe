import { Component } from '@angular/core';
import {Navbar} from '../../../../shared/components/navbar/navbar';
import {Footer} from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-overview',
  imports: [Navbar, Footer],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview {

}
