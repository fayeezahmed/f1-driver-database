import React from 'react';
import { render } from '@testing-library/react';
import SearchOutput from './SearchOutput';

test('renders search output component', () => {
  const { getByTestId } = render(<SearchOutput />);

  const searchElement = getByTestId('SEARCH_OUTPUT');
  const profileImage = getByTestId('PROFILE');
  const stats = getByTestId('STATS')

  expect(searchElement).toBeInTheDocument();
  expect(profileImage).toBeInTheDocument();
  expect(stats).toBeInTheDocument();
});
