import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  template: `
    <h1>Angular Jest vs Vitest Benchmark</h1>
    <app-counter></app-counter>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'angular-jest-vite';
}
