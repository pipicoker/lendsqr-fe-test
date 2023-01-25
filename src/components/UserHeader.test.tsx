import { render, cleanup } from '@testing-library/react';
import UserHeader from './UserHeader';

afterEach(cleanup); // clean up the DOM after each test

test('renders the UserHeader component', () => {
  const { getByText } = render(<UserHeader />);
  expect(getByText('Back to Users')).toBeInTheDocument();
  expect(getByText('User Details')).toBeInTheDocument();
  expect(getByText('blacklist user')).toBeInTheDocument();
  expect(getByText('activate user')).toBeInTheDocument();
});
