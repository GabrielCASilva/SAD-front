export const createProgressSlice = (set) => ({
	data: {},
	setData: ({ data }) =>
		set((state) => ({ progress: { ...state.progress, data } })),
});
