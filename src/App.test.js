import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('should go to Driver Stats page', () => {
    const { container } = render(<App />);
    const menuButton = container.querySelector('nav>button');
    const menuList = container.querySelector('.MenuList');
    const driversStatLink = container.querySelector('.MenuList>li');
    fireEvent.click(menuButton);
    
});
