import { create } from "zustand";
import { createTasksSlice } from "./slices/tasksSlice";
import { createTaskSlice } from "./slices/taskSlice";
import { createEmployeesSlice } from "./slices/employeesSlice";
import { createEmployeeSlice } from "./slices/employeeSlice";
import { createAppraisalSlice } from "./slices/appraisalSlice";
import { createGoalsSlice } from "./slices/goalsSlice";
import { createSectorsSlice } from "./slices/sectorsSlice";

export const useStore = create((...a) => ({
    tasks: {...createTasksSlice(...a)},
    task: {...createTaskSlice(...a)},
    employees: {...createEmployeesSlice(...a)},
    employee: {...createEmployeeSlice(...a)},
    goals: {...createGoalsSlice(...a)},
    sectors: {...createSectorsSlice(...a)},
    appraisal: {...createAppraisalSlice(...a)}
}));