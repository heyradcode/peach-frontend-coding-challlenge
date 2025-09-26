import { Task } from '@prisma/client';

export type { Task };

export interface CreateTaskInput {
  text: string;
}

export interface UpdateTaskInput {
  text?: string;
  isDone?: boolean;
  isTrash?: boolean;
}

export interface TaskFilters {
  isDone?: boolean;
  isTrash?: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Error types
export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}
