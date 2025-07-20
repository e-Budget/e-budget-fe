import { Component } from '@angular/core';
import {Navbar} from '../../../../shared/components/navbar/navbar';
import {Footer} from '../../../../shared/components/footer/footer';
import {Header} from '../../../../shared/components/header/header';
import {Balance} from "./balance/balance";
import {Content} from "../../../../shared/components/content/content";

@Component({
  selector: 'app-overview',
  imports: [Navbar, Header, Content, Balance, Footer],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview {

}
