import React from 'react';
import { render, act } from '@testing-library/react';
import UsersDetails from './UsersDetails';

jest.mock('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users', () => {
  return Promise.resolve({
    json: () => Promise.resolve([
      {
        accountBalance: '1000',
        accountNumber: '1234567890',
        createdAt: '2022-01-01',
        education: {
          level: 'Bachelors',
          employmentStatus: 'Employed',
          sector: 'Technology',
          duration: '4 years',
          loanRepayment: 'Yes',
          monthlyIncome: ['5000', '6000'],
          officeEmail: 'test@example.com',
        },
        email: 'test@example.com',
        guarantor: {
          firstName: 'John',
          lastName: 'Doe',
          phoneNumber: '555-555-5555',
          address: '123 Main St',
          gender: 'Male',
        },
        id: '1',
        lastActiveDate: '2022-01-01',
        orgName: 'Test Organization',
        phoneNumber: '555-555-5555',
        profile: {
          firstName: 'Jane',
          lastName: 'Doe',
          phoneNumber: '555-555-5555',
          address: '123 Main St',
          avatar: '',
          bvn: '1234567890',
          currency: 'USD',
          gender: 'Female',
        },
        socials: {
          facebook: '',
          instagram: '',
          twitter: '',
        },
        userName: 'jane_doe',
      },
    ]),
  });
});

test('renders users data', async () => {
  const getUserIdMock = jest.fn();
  const { getByText } = render(<UsersDetails GetUserId={getUserIdMock} />);

  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
  
  expect(getByText('Test Organization')).toBeInTheDocument();
  expect(getByText('jane_doe')).toBeInTheDocument();
  expect(getByText('test@example.com')).toBeInTheDocument();
});
