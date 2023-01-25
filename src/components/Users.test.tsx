import { render, cleanup } from '@testing-library/react';
import Users from './Users';

afterEach(cleanup); // clean up the DOM after each test

test('renders the Users component', () => {
  const { getByText } = render(<Users />);
  expect(getByText('Users')).toBeInTheDocument();
  expect(getByText('users')).toBeInTheDocument();
  expect(getByText('active users')).toBeInTheDocument();
  expect(getByText('users with loans')).toBeInTheDocument();
  expect(getByText('users with savings')).toBeInTheDocument();
});
