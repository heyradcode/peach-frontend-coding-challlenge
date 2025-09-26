import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from '@/components/TaskItem';
import { useUpdateTask, useDeleteTask } from '@/queries';

// Mock the queries
jest.mock('@/queries', () => ({
  useUpdateTask: jest.fn(),
  useDeleteTask: jest.fn(),
}));

const mockUseUpdateTask = useUpdateTask as jest.MockedFunction<typeof useUpdateTask>;
const mockUseDeleteTask = useDeleteTask as jest.MockedFunction<typeof useDeleteTask>;

describe('TaskItem', () => {
  const mockTask = {
    id: 1,
    text: 'Test task',
    isDone: false,
    isTrash: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockUpdateTask = jest.fn();
  const mockDeleteTask = jest.fn();

  beforeEach(() => {
    mockUseUpdateTask.mockReturnValue({
      mutateAsync: mockUpdateTask,
      isLoading: false,
    } as any);

    mockUseDeleteTask.mockReturnValue({
      mutateAsync: mockDeleteTask,
      isLoading: false,
    } as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders task text correctly', () => {
    render(<TaskItem {...mockTask} />);
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  it('shows completed state when task is done', () => {
    const completedTask = { ...mockTask, isDone: true };
    render(<TaskItem {...completedTask} />);
    
    const textElement = screen.getByText('Test task');
    expect(textElement).toHaveStyle('text-decoration: line-through');
  });

  it('calls updateTask when done button is clicked', async () => {
    const user = userEvent.setup();
    render(<TaskItem {...mockTask} />);
    
    const doneButton = screen.getByLabelText('Mark task as done');
    await user.click(doneButton);
    
    expect(mockUpdateTask).toHaveBeenCalledWith({ isDone: true });
  });

  it('calls deleteTask when trash button is clicked', async () => {
    const user = userEvent.setup();
    render(<TaskItem {...mockTask} />);
    
    const trashButton = screen.getByLabelText('Delete task');
    await user.click(trashButton);
    
    expect(mockDeleteTask).toHaveBeenCalled();
  });

  it('disables done button when task is already done', () => {
    const completedTask = { ...mockTask, isDone: true };
    render(<TaskItem {...completedTask} />);
    
    const doneButton = screen.getByLabelText('Task completed');
    expect(doneButton).toBeDisabled();
  });

  it('hides trash button when task is in trash', () => {
    const trashedTask = { ...mockTask, isTrash: true };
    render(<TaskItem {...trashedTask} />);
    
    expect(screen.queryByLabelText('Delete task')).not.toBeInTheDocument();
  });

  it('shows loading state when updating', () => {
    mockUseUpdateTask.mockReturnValue({
      mutateAsync: mockUpdateTask,
      isLoading: true,
    } as any);

    render(<TaskItem {...mockTask} />);
    
    const doneButton = screen.getByLabelText('Mark task as done');
    expect(doneButton).toBeDisabled();
  });

  it('shows loading state when deleting', () => {
    mockUseDeleteTask.mockReturnValue({
      mutateAsync: mockDeleteTask,
      isLoading: true,
    } as any);

    render(<TaskItem {...mockTask} />);
    
    const trashButton = screen.getByLabelText('Delete task');
    expect(trashButton).toBeDisabled();
  });
});
