import { dateIntervalInMonthOrDays, formateBRDate } from '../../utils/date';

export const usePerformanceAppraisal = (tasks, date) => {
	const completed = tasks.filter(
		(tasks) => tasks.conclusao === 'concluida',
	).length;
	let performance = 0;
	if (completed === tasks.length) {
		performance = 100;
	} else {
		performance = (100 * completed) / tasks.length;
	}

	return {
		name: tasks[0].setor.nome,
		goal: '[META PLACEHOLDER]',
		dateInterval: dateIntervalInMonthOrDays(date.initDate, date.finalDate),
		initialDate: formateBRDate(date.initDate),
		finalDate: formateBRDate(date.finalDate),
		performance: performance,
		tasksCompleted: tasks.filter((tasks) => tasks.conclusao === 'concluida')
			.length,
		tasksPending: tasks.filter((tasks) => tasks.conclusao === 'Pendente')
			.length,
		tasksIncomplete: tasks.filter((tasks) => tasks.conclusao === 'Incompleta')
			.length,
		tasks: tasks,
	};
};
