import React from 'react';
import { render } from '@testing-library/react';
import SearchOutput from './SearchOutput';

test('renders search output component when props are provided', async () => {
  const props = {
    dateOfBirth: '1985-01-07',
    familyName: 'Alonso', 
    givenName: 'Fernando', 
    nationality: 'Spanish', 
    imageUrl: 'someImageUrl'
  }
  const { getByTestId, getByText } = render(<SearchOutput {...props} />);

  const searchElement = getByTestId('SEARCH_OUTPUT');
  const profileImage = getByTestId('PROFILE');
  const stats = getByTestId('STATS')

  const fullName = await getByText('Fernando Alonso')
  const dateOfBirth = await getByText('1985-01-07')
  const nationality = await getByText('Spanish')
  // const imageUrl = await getByText('someImageUrl')


  expect(searchElement).toBeInTheDocument();
  expect(profileImage).toBeInTheDocument();
  expect(stats).toBeInTheDocument();

  expect(fullName).toBeInTheDocument();
  expect(dateOfBirth).toBeInTheDocument();
  expect(nationality).toBeInTheDocument();
  // expect(imageUrl).toBeInTheDocument();
});
