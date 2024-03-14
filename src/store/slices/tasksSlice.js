export const createTasksSlice = (set) => ({
	data: [],
	dataRef: [],
	loading: false,
	error: false,
	setData: ({ data }) =>
		set((state) => ({ tasks: { ...state.tasks, data, dataRef: data } })),
	setLoading: (loading) =>
		set((state) => ({ tasks: { ...state.tasks, loading } })),
	setError: (error) => set((state) => ({ tasks: { ...state.tasks, error } })),
	filterData: ({ data }) =>
		set((state) => ({ tasks: { ...state.tasks, data } })),
});
