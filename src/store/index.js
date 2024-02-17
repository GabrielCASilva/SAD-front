import { create } from "zustand";
import { createTasksSlice } from "./slices/tasksSlice";
import { createTaskSlice } from "./slices/taskSlice";
import { createEmployeesSlice } from "./slices/employeesSlice";
import { createEmployeeSlice } from "./slices/employeeSlice";

export const useStore = create((...a) => ({
    tasks: {...createTasksSlice(...a)},
    task: {...createTaskSlice(...a)},
    employees: {...createEmployeesSlice(...a)},
    employee: {...createEmployeeSlice(...a)}
}));