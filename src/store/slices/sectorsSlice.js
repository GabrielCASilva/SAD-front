export const createSectorsSlice = (set) => ({
    data: [],
    dataRef: [],
    loading: false,
    error: false,
    setData: ({ data }) => 
        set((state) => (
            { sectors: {...state.sectors, data, dataRef: data}}
        )),
    setLoading: ( loading ) =>
        set((state) => (
            { sectors: {...state.sectors, loading}}
        )),
    setError: ( error ) =>
        set((state) => (
            { sectors: {...state.sectors, error}}
        )),
    filterData: ({data}) =>
        set((state) => (
            { sectors: {...state.sectors, data}}
        )),
})