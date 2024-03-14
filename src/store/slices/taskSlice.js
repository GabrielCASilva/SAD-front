export const createTaskSlice = (set) => ({
	data: {},
	loading: false,
	error: false,
	setData: ({ data }) => set((state) => ({ task: { ...state.task, data } })),
	setLoading: (loading) =>
		set((state) => ({ task: { ...state.task, loading } })),
	setError: (error) => set((state) => ({ task: { ...state.task, error } })),
});
