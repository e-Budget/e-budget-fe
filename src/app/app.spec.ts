import { TestBed } from '@angular/core/testing';
import { App } from './app';
import {Overview} from './features/overview/components/overview/overview';
import {routes} from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain route for overview', () => {
    const expectedRoute = { path: '', component: Overview };
    expect(routes).toContainEqual(expectedRoute);
  });
});
