import { render, screen } from '@testing-library/react';
// import App from './App';
// import containers from './App';
import MainLayout from './containers/MainLayout';

test('renders learn react link', () => {
  render(<MainLayout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
