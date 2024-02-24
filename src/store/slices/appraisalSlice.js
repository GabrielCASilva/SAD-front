export const createAppraisalSlice = (set) => ({
    data: {},
    setAppraisal: ({ data }) => 
        set((state) => (
            { appraisal: {...state.appraisal, data}}
        )),
})