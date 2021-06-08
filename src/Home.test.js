import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders hi', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Andrew Ryno/i);
  expect(linkElement).toBeInTheDocument();
});
