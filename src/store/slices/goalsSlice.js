export const createGoalsSlice = (set) => ({
    data: [],
    dataRef: [],
    loading: false,
    error: false,
    setData: ({ data }) => 
        set((state) => (
            { goals: {...state.goals, data, dataRef: data}}
        )),
    setLoading: ( loading ) =>
        set((state) => (
            { goals: {...state.goals, loading}}
        )),
    setError: ( error ) =>
        set((state) => (
            { goals: {...state.goals, error}}
        )),
    filterData: ({data}) =>
        set((state) => (
            { goals: {...state.goals, data}}
        )),
})