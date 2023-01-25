import { render, waitFor, fireEvent } from '@testing-library/react';
import Filters from './Filters';

describe('Filters', () => {
  it('should render data correctly and handle pagination', async () => {
    const mockData = [
      {
        id: '1',
        accountNumber: '1234567890',
        email: 'test@example.com',
        profile: {
          firstName: 'John',
          lastName: 'Doe',
          phoneNumber: '555-555-5555',
          address: '123 Example St',
          avatar: '',
          bvn: '',
          currency: 'USD',
          gender: 'male',
        },
      },
      // additional mock data
    ];

    // mock the fetch call to return mock data
    jest.spyOn(global, 'fetch').mockImplementation(() =>
  Promise.resolve(new Response(JSON.stringify(mockData)))
);

    const { getByTestId, getByText } = render(<Filters />);

    // wait for data to be loaded
    await waitFor(() => expect(getByTestId('users-details')).toBeInTheDocument());

    // check if the first item of mock data is rendered
    expect(getByText('John Doe')).toBeInTheDocument();

    // check if pagination is rendered
    expect(getByText('Next')).toBeInTheDocument();

    // simulate a user clicking the next button
    fireEvent.click(getByText('Next'));

    // check if the offset is updated
    expect(getByText(`Loading items from 9 to 18`)).toBeInTheDocument();
  });

  it('should display an error message when fetch fails', async () => {
    // mock the fetch call to return an error
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Failed to fetch data'))
    );

    const { getByText } = render(<Filters />);

    // wait for the error message to be displayed
    await waitFor(() => expect(getByText('Failed to fetch data')).toBeInTheDocument());
  });
});
