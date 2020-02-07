import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hi', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Andrew Ryno/i);
  expect(linkElement).toBeInTheDocument();
});
