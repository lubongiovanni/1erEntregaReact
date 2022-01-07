import { render, screen } from '@testing-library/react';
import App from './App';
import Img from './Img';

test('renders learn react link', () => {
  render(<App />);
  render(<Img />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
