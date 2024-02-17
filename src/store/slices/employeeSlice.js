export const createEmployeeSlice = (set) => ({
    data: { 
        nome: "",
        cargo: {
            nome: ""
        },
        setor: {
            nome: ""
        },
        tarefas: []
    },
    loading: false,
    error: false,
    setEmployee: ({ data }) => 
        set((state) => (
            { employee: {...state.employee, data}}
        )),
    setLoading: ( loading ) =>
        set((state) => (
            { employee: {...state.employee, loading}}
        )),
    setError: ( error ) =>
        set((state) => (
            { employee: {...state.employee, error}}
        )),
})