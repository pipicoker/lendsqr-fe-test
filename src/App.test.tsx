// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
 
import { render } from '@testing-library/react';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

test('renders login page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(getByText('Login')).toBeInTheDocument();
});

test('renders landing page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(getByText('Welcome')).toBeInTheDocument();
});

