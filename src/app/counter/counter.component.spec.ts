import { render, screen, fireEvent } from '@testing-library/angular';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  it('should create', async () => {
    await render(CounterComponent);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  it('should increment the counter', async () => {
    await render(CounterComponent);
    const incrementButton = screen.getByTestId('increment');

    await fireEvent.click(incrementButton);
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  it('should decrement the counter', async () => {
    await render(CounterComponent);
    const decrementButton = screen.getByTestId('decrement');

    await fireEvent.click(decrementButton);
    expect(screen.getByText('Counter: -1')).toBeInTheDocument();
  });

  it('should handle multiple operations', async () => {
    await render(CounterComponent);
    const incrementButton = screen.getByTestId('increment');
    const decrementButton = screen.getByTestId('decrement');

    await fireEvent.click(incrementButton);
    await fireEvent.click(incrementButton);
    await fireEvent.click(decrementButton);

    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });
});
