import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from '../components/Shop';

describe('Shop component', () => {
  it('renders shop loading image', () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });
});