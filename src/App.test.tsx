import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


import "@testing-library/jest-dom";
import { LoadResult } from 'components/LoadResult/LoadResult';

test('App component render', () => {
  render(
      <App />
  );
});

test('Load result component exist', () => {
  expect(render(<LoadResult />)).toBeDefined();
});

test('App component check text', () => {
  const str = screen.queryByText('Test App Data');
  expect(str).toBeDefined();
});