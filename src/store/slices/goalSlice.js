export const createGoalSlice = (set) => ({
	data: {
		nome: '',
		diretor: {
			nome: '',
		},
		setor: {
			nome: '',
		},
		tarefas: [],
	},
	loading: false,
	error: false,
	setData: ({ data }) => set((state) => ({ goal: { ...state.goal, data } })),
	setLoading: (loading) =>
		set((state) => ({ goal: { ...state.goal, loading } })),
	setError: (error) => set((state) => ({ goal: { ...state.goal, error } })),
});
