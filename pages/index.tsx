import CreateTaskForm from 'components/CreateTask'
import NoTasks from 'components/NoTasks'
import TaskItem from 'components/TaskItem'
import ErrorBoundary from 'components/ErrorBoundary'
import Loading from 'components/Loading'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useGetDoneTasks, useGetTasks } from 'queries'
import styled from 'styled-components'

const TaskList = styled.div`
  display: grid;
  gap: var(--space-sm);
  min-height: 100px;
`

const Title = styled.h2`
  margin: 0 0 var(--space-lg);
  color: var(--color-black-300);
  text-transform: uppercase;
  font-size: var(--text-lg);
  font-weight: 600;
  letter-spacing: 0.05em;
  border-top: 2px solid var(--color-black-300);
  border-bottom: 2px solid var(--color-black-300);
  padding: var(--space-sm) 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--color-brand);
  }
`

const Section = styled.section`
  background: var(--color-black-100);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-black-300);
  transition: all var(--transition-normal);

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
  }
`

const PageContainer = styled.div`
  display: grid;
  gap: var(--space-2xl);
  padding-bottom: var(--space-2xl);
`

const Home: NextPage = () => {
  const { data: tasks, isLoading: tasksLoading, error: tasksError } = useGetTasks()
  const { data: doneTasks, isLoading: doneLoading, error: doneError } = useGetDoneTasks()

  return (
    <>
      <Head>
        <title>My tasks | PeachyTask</title>
        <meta name="description" content="Manage your tasks with PeachyTask - a simple and elegant task management app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageContainer>
        <ErrorBoundary>
          <CreateTaskForm />
        </ErrorBoundary>

        <ErrorBoundary>
          <Section>
            <Title>To-do</Title>
            <TaskList>
              {tasksLoading ? (
                <Loading text="Loading tasks..." size="sm" />
              ) : tasksError ? (
                <NoTasks emoji="⚠️" text="Failed to load tasks. Please try again." />
              ) : tasks?.length && tasks.length > 0 ? (
                tasks.map(task => <TaskItem key={task.id} {...task} />)
              ) : (
                <NoTasks emoji="🎉" text="You're all done!" />
              )}
            </TaskList>
          </Section>
        </ErrorBoundary>

        <ErrorBoundary>
          <Section>
            <Title>Done</Title>
            <TaskList>
              {doneLoading ? (
                <Loading text="Loading completed tasks..." size="sm" />
              ) : doneError ? (
                <NoTasks emoji="⚠️" text="Failed to load completed tasks. Please try again." />
              ) : doneTasks?.length && doneTasks.length > 0 ? (
                doneTasks.map(task => <TaskItem key={task.id} {...task} />)
              ) : (
                <NoTasks emoji="😔" text="There's nothing here..." />
              )}
            </TaskList>
          </Section>
        </ErrorBoundary>
      </PageContainer>
    </>
  )
}

export default Home
