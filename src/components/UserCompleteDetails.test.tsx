import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserCompleteDetails from './UserCompleteDetails';

afterEach(cleanup);

const user = {
    createdAt: '2022-01-01',
    orgName: 'Test Org',
    userName: 'testuser',
    email: 'test@email.com',
    phoneNumber: '1234567890',
    lastActiveDate: '2022-01-02',
    profile: {
        firstName: 'Test',
        lastName: 'User',
        phoneNumber: 1234567890,
        avatar: '',
        gender: 'Male',
        bvn: '1234567890',
        address: 'Test Address',
        currency: 'USD',
    },
    guarantor: {
        firstName: 'Guarantor',
        lastName: 'Test',
        phoneNumber: 1234567890,
        gender: 'Female',
        address: 'Guarantor Address',
    },
    accountBalance: 1000,
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
        officeEmail: 'office@email.com',
        monthlyIncome: [3000, 3000, 3000, 3000],
        loanRepayment: 500,
    },
    id: 1
};

test('renders UserCompleteDetails component correctly', () => {
    const { getByTestId, getByText } = render(<UserCompleteDetails user={user} />);

    expect(getByTestId('UserCompleteDetails')).toBeInTheDocument();
    expect(getByText('Personal Information')).toBeInTheDocument();
    expect(getByText('Full Name')).toBeInTheDocument();
    expect(getByText('Test User')).toBeInTheDocument();
    expect(getByText('phone number')).toBeInTheDocument();
    expect(getByText('1234567890')).toBeInTheDocument();
    expect(getByText('email address')).toBeInTheDocument();
    expect(getByText('test@email.com')).toBeInTheDocument();
    expect(getByText('Education and Employment')).toBeInTheDocument();
    expect(getByText('level of education')).toBeInTheDocument();
    expect(getByText('Bachelors')).toBeInTheDocument();
});
