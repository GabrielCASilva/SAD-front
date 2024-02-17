export const createEmployeesSlice = (set) => ({
    data: [],
    loading: false,
    error: false,
    setEmployees: ({ data }) => 
        set((state) => (
            { employees: {...state.employees, data}}
        )),
    setLoading: ( loading ) =>
        set((state) => (
            { employees: {...state.employees, loading}}
        )),
    setError: ( error ) =>
        set((state) => (
            { employees: {...state.employees, error}}
        )),
})