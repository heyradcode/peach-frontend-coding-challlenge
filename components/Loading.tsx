import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
  gap: var(--space-md);
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-black-300);
  border-top: 4px solid var(--color-brand);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: var(--color-black-300);
  font-size: var(--text-sm);
  margin: 0;
`;

interface LoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ 
  text = 'Loading...', 
  size = 'md' 
}) => {
  const spinnerSize = size === 'sm' ? '24px' : size === 'lg' ? '56px' : '40px';
  const borderWidth = size === 'sm' ? '2px' : size === 'lg' ? '6px' : '4px';

  return (
    <LoadingContainer>
      <Spinner 
        style={{ 
          width: spinnerSize, 
          height: spinnerSize,
          borderWidth: borderWidth
        }} 
      />
      <LoadingText>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
