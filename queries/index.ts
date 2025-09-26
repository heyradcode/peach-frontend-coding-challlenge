import { Prisma, Task } from '@prisma/client'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const QUERY_KEY_TASKS = 'tasks'
const QUERY_KEY_DONE_TASKS = 'done_tasks'
const QUERY_KEY_TRASH_TASKS = 'trash_tasks'

/** ---------TODO TASK HOOKS --------- */

export function useGetTasks() {
  const getTasks = async () => {
    const { data } = await axios.get<Task[]>(`/api/tasks`)
    return data
  }
  return useQuery({
    queryKey: [QUERY_KEY_TASKS, 'incomplete'],
    queryFn: getTasks,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false
  })
}

export function useCreateTask() {
  const queryClient = useQueryClient()
  const createTask = async (newTask: Prisma.TaskCreateInput) => {
    const { data } = await axios.post<Task>(`/api/tasks`, newTask)
    return data
  }
  return useMutation({
    mutationFn: createTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TASKS] })
  })
}

export function useUpdateTask({ id }: { id: Task['id'] }) {
  const queryClient = useQueryClient()
  const updateTask = async (newTask: Prisma.TaskUpdateInput) => {
    const { data } = await axios.put<Task>(`/api/tasks/${id}`, newTask)
    return data
  }
  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TASKS] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_DONE_TASKS] })
    }
  })
}

/** ---------DONE TASK HOOKS --------- */

export function useGetDoneTasks() {
  const getDoneTasks = async () => {
    const { data } = await axios.get<Task[]>(`/api/tasks/done`)
    return data
  }
  return useQuery({
    queryKey: [QUERY_KEY_DONE_TASKS, 'incomplete'],
    queryFn: getDoneTasks,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false
  })
}

export function useDeleteTask({
  id,
  isDone
}: {
  id: Task['id']
  isDone: Task['isDone']
}) {
  const queryClient = useQueryClient()
  const deleteTask = async () => {
    const { data } = await axios.delete<Task>(`/api/tasks/${id}`)
    return data
  }
  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      if (isDone) {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY_DONE_TASKS] })
      } else {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TASKS] })
      }
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TRASH_TASKS] })
    }
  })
}

/** ---------TRASH TASK HOOKS --------- */
export function useGetTrashTasks() {
  const getTrashTasks = async () => {
    const { data } = await axios.get<Task[]>(`/api/trash`)
    return data
  }
  return useQuery({
    queryKey: [QUERY_KEY_TRASH_TASKS, 'incomplete'],
    queryFn: getTrashTasks,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false
  })
}

export function useEmptyTrash() {
  const queryClient = useQueryClient()
  const emptyTrash = async () => {
    const { data } = await axios.delete<Task>(`/api/trash`)
    return data
  }
  return useMutation({
    mutationFn: emptyTrash,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TRASH_TASKS] })
  })
}
