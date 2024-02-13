import { create } from "zustand";
import { createTasksSlice } from "./slices/tasksSlice";

export const useStore = create((...a) => ({
    tasksSlice: {...createTasksSlice(...a)},
}));