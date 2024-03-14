export const createEmployeesSlice = (set) => ({
	data: [],
	dataRef: [],
	loading: false,
	error: false,
	setData: ({ data }) =>
		set((state) => ({
			employees: { ...state.employees, data, dataRef: data },
		})),
	setLoading: (loading) =>
		set((state) => ({ employees: { ...state.employees, loading } })),
	setError: (error) =>
		set((state) => ({ employees: { ...state.employees, error } })),
	filterData: ({ data }) =>
		set((state) => ({ employees: { ...state.employees, data } })),
});
