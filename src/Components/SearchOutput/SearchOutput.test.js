import React from 'react';
import { render } from '@testing-library/react';
import SearchOutput from './SearchOutput';

test('renders search output component', () => {
  const { getByTestId } = render(<SearchOutput />);
  const searchElement = getByTestId('SEARCH_OUTPUT');
  expect(searchElement).toBeInTheDocument();
});
