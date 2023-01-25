import { render, screen } from '@testing-library/react';
import BorrowerNav from './BorrowerNav';

describe('BorrowerNav component', () => {
  const navData = [    {      category: 'Loan Applications',      details: [        {          title: 'New Application',          icon: 'https://example.com/new-application.png',        },        {          title: 'Pending Approval',          icon: 'https://example.com/pending-approval.png',        },      ],
    },
    {
      category: 'Repayments',
      details: [
        {
          title: 'Make Repayment',
          icon: 'https://example.com/make-repayment.png',
        },
        {
          title: 'Repayment History',
          icon: 'https://example.com/repayment-history.png',
        },
      ],
    },
  ];

  it('should render', () => {
    render(<BorrowerNav navData={navData} borrowerNav={false} />);

    expect(screen.getByRole('heading', { name: 'Switch Organization' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Loan Applications' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Repayments' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'New Application' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Pending Approval' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Make Repayment' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Repayment History' })).toBeInTheDocument();
  });

  it('should hide the navigation when borrowerNav prop is set to false', () => {
    render(<BorrowerNav navData={navData} borrowerNav={false} />);
    expect(screen.getByRole('heading', { name: 'Switch Organization' })).not.toBeVisible();
  });

  it('should show the navigation when borrowerNav prop is set to true', () => {
    render(<BorrowerNav navData={navData} borrowerNav={true} />);
    expect(screen.getByRole('heading', { name: 'Switch Organization' })).toBeVisible();
  });
    
    it('should hide the navigation when borrowerNav prop is set to false', () => {
  const { container } = render(<BorrowerNav navData={navData} borrowerNav={false} />);
  expect(container.querySelector('[style="display: none;"]')).toBeInTheDocument();
    });
    
    it('should hide the navigation when borrowerNav prop is set to false', () => {
  const { container } = render(<BorrowerNav navData={navData} borrowerNav={false} />);
  expect(container.querySelector('.hidden')).toBeInTheDocument();
});

it('should show the navigation when borrowerNav prop is set to true', () => {
  const { container } = render(<BorrowerNav navData={navData} borrowerNav={true} />);
  expect(container.querySelector('.show')).toBeInTheDocument();
});


});
