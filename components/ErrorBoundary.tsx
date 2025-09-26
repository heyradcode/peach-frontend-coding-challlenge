import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import { ErrorBoundaryState } from '@/types';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: var(--space-xl);
  text-align: center;
  background: var(--color-black-100);
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-danger);
  margin: var(--space-lg);
`;

const ErrorTitle = styled.h2`
  color: var(--color-danger);
  margin-bottom: var(--space-md);
`;

const ErrorMessage = styled.p`
  color: var(--color-black-400);
  margin-bottom: var(--space-lg);
  max-width: 500px;
`;

const RetryButton = styled.button`
  background: var(--color-brand);
  color: var(--color-black-100);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);

  &:hover:not(:disabled) {
    background: var(--color-secondary-100);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Please try refreshing
            the page or contact support if the problem persists.
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            Try Again
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
