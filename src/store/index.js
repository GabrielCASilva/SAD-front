import { create } from 'zustand';
import { createTasksSlice } from './slices/tasksSlice';
import { createTaskSlice } from './slices/taskSlice';
import { createEmployeesSlice } from './slices/employeesSlice';
import { createEmployeeSlice } from './slices/employeeSlice';
import { createAppraisalSlice } from './slices/appraisalSlice';
import { createGoalsSlice } from './slices/goalsSlice';
import { createSectorsSlice } from './slices/sectorsSlice';
import { createGoalSlice } from './slices/goalSlice';
import { createProgressSlice } from './slices/progressSlice';

export const useStore = create((...a) => ({
	tasks: { ...createTasksSlice(...a) },
	task: { ...createTaskSlice(...a) },
	employees: { ...createEmployeesSlice(...a) },
	employee: { ...createEmployeeSlice(...a) },
	goals: { ...createGoalsSlice(...a) },
	goal: { ...createGoalSlice(...a) },
	sectors: { ...createSectorsSlice(...a) },
	appraisal: { ...createAppraisalSlice(...a) },
	progress: { ...createProgressSlice(...a) },
}));
