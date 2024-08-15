import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import PrimaryButton from '../../../components/Button/PrimaryButton';

describe('PrimaryButton component', () => {
  it('renders with the correct text', () => {
    const { getByText } = render(<PrimaryButton text="Click me" />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('has the correct class names', () => {
    const { getByText } = render(<PrimaryButton text="Click me" />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toHaveClass('bg-primary');
    expect(buttonElement).toHaveClass('py-2');
    expect(buttonElement).toHaveClass('px-4');
    expect(buttonElement).toHaveClass('mt-2');
    expect(buttonElement).toHaveClass('rounded-lg');
    expect(buttonElement).toHaveClass('font-medium');
    expect(buttonElement).toHaveClass('text-on-primary');
  });
});
