import { useEffect } from 'react';
import TaskService from '../../api/services/TaskService';
import { useStore } from '../../store';
import GoalService from '../../api/services/GoalService';

export const useGetGoalAndGoalsTasks = (props) => {
	const { id } = props;

	const { goal } = useStore();
	const { data, loading, error, setLoading, setError, setData } = goal;

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const fetch = async () => {
			try {
				setLoading(true);

				const goal = await GoalService.getGoal({ signal, id });

				const tasks = await TaskService.getTasks({ signal });

				const goalTasks = tasks.filter((task) => task.meta.id === goal.id);

				setData({ data: { ...goal, tarefas: goalTasks } });
				setError(false);
			} catch (error) {
				setError(false);
			} finally {
				setLoading(false);
			}
		};

		fetch();

		return () => {
			console.log('cancelando...');
			controller.abort();
		};
	}, []);

	return {
		data,
		isLoading: loading,
		isError: error,
	};
};
