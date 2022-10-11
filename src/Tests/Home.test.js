import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../components/Home';

describe('home component', () => {
  it('renders home page with paragraphs', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  })
});