import { Task } from '@prisma/client'
import { useDeleteTask, useUpdateTask } from 'queries'
import { MdCheck } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'
import styled from 'styled-components'

const Card = styled.div`
  display: grid;
  font-size: var(--text-lg);
  grid-template-columns: min-content 1fr min-content;
  gap: var(--space-md);
  align-items: center;
  padding: var(--space-md);
  background: var(--color-black-100);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-black-300);
  transition: all var(--transition-fast);
  min-height: 60px;

  &:hover {
    box-shadow: var(--shadow-sm);
    transform: translateY(-1px);
    border-color: var(--color-brand);
  }
`

const Text = styled.h3<{ isDone?: boolean }>`
  margin: 0;
  font-size: inherit;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
  opacity: ${props => props.isDone ? 0.6 : 1};
  color: ${props => props.isDone ? 'var(--color-black-300)' : 'var(--color-black-400)'};
`

const DoneButton = styled.button<{ isDone: boolean }>`
  background: ${props =>
    props.isDone ? 'var(--color-success)' : 'transparent'};
  border: 2px solid ${props =>
    props.isDone ? 'var(--color-success)' : 'var(--color-black-300)'};
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);

  svg {
    opacity: ${props => (props.isDone ? '1' : '0')};
    color: ${props => props.isDone ? 'var(--color-black-400)' : 'var(--color-black-300)'};
    transition: all var(--transition-fast);
  }

  &:not(:disabled):hover {
    background: var(--color-success);
    border-color: var(--color-success);
    transform: scale(1.05);

    svg {
      opacity: 1;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 2px;
  }
`

const TrashButton = styled.button`
  background: transparent;
  border: none;
  aspect-ratio: 1 / 1;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);

  svg {
    fill: var(--color-black-300);
    transition: all var(--transition-fast);
  }

  &:hover:not(:disabled) {
    background: var(--color-danger);
    transform: scale(1.05);

    svg {
      fill: var(--color-black-100);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-danger);
    outline-offset: 2px;
  }
`

const TaskItem: React.FC<Task> = ({ id, isDone, isTrash, text }) => {
  const { mutateAsync: updateTask, isLoading: isUpdating } = useUpdateTask({ id })
  const { mutateAsync: deleteTask, isLoading: isDeleting } = useDeleteTask({ id, isDone })

  const handleMarkDone = async () => {
    try {
      await updateTask({ isDone: true })
    } catch (error) {
      console.error('Failed to mark task as done:', error)
    }
  }

  const handleDelete = async () => {
    try {
      await deleteTask()
    } catch (error) {
      console.error('Failed to delete task:', error)
    }
  }

  return (
    <Card>
      <DoneButton
        isDone={!!isDone}
        disabled={!!isDone || !!isTrash || isUpdating}
        onClick={handleMarkDone}
        aria-label={isDone ? 'Task completed' : 'Mark task as done'}
      >
        <MdCheck />
      </DoneButton>
      <Text isDone={!!isDone}>{text}</Text>
      {!isTrash && (
        <TrashButton 
          onClick={handleDelete}
          disabled={isDeleting}
          aria-label="Delete task"
        >
          <IoMdTrash />
        </TrashButton>
      )}
    </Card>
  )
}

export default TaskItem
