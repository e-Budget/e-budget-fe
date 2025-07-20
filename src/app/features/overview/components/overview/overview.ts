import { Component } from '@angular/core';
import {Navbar} from '../../../../shared/components/navbar/navbar';
import {Footer} from '../../../../shared/components/footer/footer';
import {Header} from '../../../../shared/components/header/header';

@Component({
  selector: 'app-overview',
  imports: [Navbar, Header, Footer],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview {

}
