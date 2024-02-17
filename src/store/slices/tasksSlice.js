export const createTasksSlice = (set) => ({
    data: [],
    loading: false,
    error: false,
    setTasks: ({ data }) => 
        set((state) => (
            { tasks: {...state.tasks, data}}
        )),
    setLoading: ( loading ) =>
        set((state) => (
            { tasks: {...state.tasks, loading}}
        )),
    setError: ( error ) =>
        set((state) => (
            { tasks: {...state.tasks, error}}
        )),
})