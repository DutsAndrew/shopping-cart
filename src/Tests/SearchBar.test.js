import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  it('renders search form', () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });

  it('submits form', () => {
    const onSubmitMock = jest.fn();
    render(<SearchBar submit={onSubmitMock} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onSubmitMock).toBeCalledTimes(1);
  });
});