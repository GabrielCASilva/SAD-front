export const createAppraisalSlice = (set) => ({
    data: {},
    setData: ({ data }) => 
        set((state) => (
            { appraisal: {...state.appraisal, data}}
        )),
})