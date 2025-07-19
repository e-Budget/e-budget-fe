import { Routes } from '@angular/router';
import {Dashboard} from './features/dashboard/components/dashboard/dashboard';
import {Overview} from './features/overview/components/overview/overview';

export const routes: Routes = [
  {
    path: '',
    component: Overview
  }
];
