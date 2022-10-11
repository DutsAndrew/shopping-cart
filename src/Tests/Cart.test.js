import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../components/Cart';

describe('Cart component', () => {
  it('renders Cart', () => {
    const cart = {
      cart: [],
      quantity: 0,
      total: 0,
    }
    const incrementGame = jest.fn();
    const decrementGame = jest.fn();
    const removeGame = jest.fn();
    const { container } = render(<Cart cart={cart}
      incrementGame={incrementGame}
      decrementGame={decrementGame}
      removeGame={removeGame}
      />);
    expect(container).toMatchSnapshot();
  });
});