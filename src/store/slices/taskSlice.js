export const createTaskSlice = (set) => ({
    data: {},
    loading: false,
    error: false,
    setTask: ({ data }) => 
        set((state) => (
            { task: {...state.task, data}}
        )),
    setLoading: ( loading ) =>
        set((state) => (
            { task: {...state.task, loading}}
        )),
    setError: ( error ) =>
        set((state) => (
            { task: {...state.task, error}}
        )),
})