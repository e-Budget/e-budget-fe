import { Component } from '@angular/core';
import {Navbar} from '../../../../shared/components/navbar/navbar';
import {Footer} from '../../../../shared/components/footer/footer';
import {Header} from '../../../../shared/components/header/header';
import {Content} from "../../../../shared/components/content/content";
import {QuickActions} from './quick-actions/quick-actions';
import {KpiCard} from './kpi-card/kpi-card';
import {Accounts} from './accounts/accounts';
import {Budget} from './budget/budget';
import {Analysis} from './analysis/analysis';

@Component({
  selector: 'app-overview',
  imports: [Navbar, Header, Content, KpiCard, Accounts, Analysis, Budget, QuickActions, Footer],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview {

}
