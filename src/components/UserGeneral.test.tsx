import { render, cleanup } from '@testing-library/react';
import UserGeneral from './UserGeneral';

afterEach(cleanup); // clean up the DOM after each test

const user = {
  createdAt: '2022-01-01',
  orgName: 'Test Company',
  userName: 'testuser',
  email: 'test@email.com',
  phoneNumber: '555-555-5555',
  lastActiveDate: '2022-01-01',
  profile: {
    firstName: 'Test',
    lastName: 'User',
    phoneNumber: 5555555555,
    avatar: '',
    gender: 'male',
    bvn: '1234567890',
    address: '123 Test St',
    currency: 'USD',
  },
  guarantor: {
    firstName: 'Guarantor',
    lastName: 'User',
    phoneNumber: 5555555555,
    gender: 'male',
    address: '123 Guarantor St',
  },
  accountBalance: 100,
  accountNumber: '1234567890',
  socials: {
    facebook: '',
    instagram: '',
    twitter: '',
  },
  education: {
    level: 'Bachelors',
    employmentStatus: 'Employed',
    sector: 'Technology',
    duration: '4 years',
    officeEmail: 'test@company.com',
    monthlyIncome: [5000],
    loanRepayment: 500,
  },
  id: 1,
}

test('renders the user general details', () => {
  const { getByText } = render(<UserGeneral user={user} />);
  expect(getByText('Test User')).toBeInTheDocument();
  expect(getByText('1234567890')).toBeInTheDocument();
  expect(getByText('$100')).toBeInTheDocument();
  expect(getByText('1234567890/Providus Bank')).toBeInTheDocument();
});
