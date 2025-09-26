import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '@/components/Loading';

describe('Loading', () => {
  it('renders with default text', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<Loading text="Custom loading text" />);
    expect(screen.getByText('Custom loading text')).toBeInTheDocument();
  });

  it('renders spinner', () => {
    render(<Loading />);
    const spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Loading size="sm" />);
    let spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toHaveStyle({ width: '24px', height: '24px' });

    rerender(<Loading size="md" />);
    spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toHaveStyle({ width: '40px', height: '40px' });

    rerender(<Loading size="lg" />);
    spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toHaveStyle({ width: '56px', height: '56px' });
  });
});
