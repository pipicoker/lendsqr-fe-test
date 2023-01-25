import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TopNav from './TopNav';

describe('TopNav', () => {
  let props: {
    borrowerNav: boolean,
    setBorrowerNav: (newVal: boolean) => void
  };
  beforeEach(() => {
    props = {
      borrowerNav: false,
      setBorrowerNav: jest.fn(),
    };
  });

  it('should render the hamburger menu', () => {
    const { getByTestId } = render(<TopNav {...props} />);
    const hamburger = getByTestId('hamburger');
    expect(hamburger).toBeInTheDocument();
  });

  it('should call setBorrowerNav when hamburger is clicked', () => {
    const { getByTestId } = render(<TopNav {...props} />);
    const hamburger = getByTestId('hamburger');
    fireEvent.click(hamburger);
    expect(props.setBorrowerNav).toHaveBeenCalledWith(true);
  });
});