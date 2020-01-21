import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';

function renderComponent(testId) {
  const { getByTestId } = render(<Menu />);
  const element = getByTestId(testId);
  return element;
}

test('renders Menu component', () => {
    const menuElement = renderComponent("MENU")
    expect(menuElement).toBeInTheDocument();
})

test('renders Menu list component if Burger Menu is clicked', () => {
    const menuElement = renderComponent("MENU")
    // click on the burger menu
})
