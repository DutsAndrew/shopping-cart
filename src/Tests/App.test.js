import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Home from '../components/Home';

describe('app component', () => {
  it('renders start page with hero image and nav', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
