import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

function renderComponent(testId) {
  const { getByTestId } = render(<Search />);
  const element = getByTestId(testId);
  return element;
}

test('renders search component', () => {
  const searchElement = renderComponent('SEARCH');
  expect(searchElement).toBeInTheDocument();
});

test('renders input field', () => {
  const searchInputElement = renderComponent('SEARCH_INPUT');
    expect(searchInputElement).toBeInTheDocument();
  });

test('renders submit button', () => {
    const submitButtonElement = renderComponent('SUBMIT_BUTTON');
    expect(submitButtonElement).toBeInTheDocument();
});

test('calls api when I hit submit', () => {
    // expect function to be called
    const { getByTestId } = render(<Search />);
    const searchElement = getByTestId('SEARCH_INPUT');
    const submitButton = getByTestId('SUBMIT_BUTTON');

    fireEvent.change(searchElement, { target: { value: 'Michael Schumacher' } })
    expect(searchElement.value).toBe('Michael Schumacher')

    fireEvent.click(submitButton);
    // user clicks submit
    // something should happen
})