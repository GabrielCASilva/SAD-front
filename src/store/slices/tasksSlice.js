export const createTasksSlice = (set) => ({
    tasks: [],
    loading: false,
    error: false,
    setTasks: ({ tasks }) => 
        set((state) => (
            { tasksSlice: {...state.tasksSlice, tasks}}
        )),
    setLoading: ({ loading }) =>
        set((state) => (
            { tasksSlice: {...state.tasksSlice, loading}}
        )),
    setError: ({ error }) =>
        set((state) => (
            { tasksSlice: {...state.tasksSlice, error}}
        )),
})