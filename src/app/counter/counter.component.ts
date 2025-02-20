import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div>
      <h2>Counter: {{ count }}</h2>
      <button (click)="increment()" data-testid="increment">Increment</button>
      <button (click)="decrement()" data-testid="decrement">Decrement</button>
    </div>
  `,
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
