import { useEffect } from 'react';
import TaskService from '../../api/services/TaskService';
import { useStore } from '../../store';

export const useGetTasks = (props) => {
	const { params } = props || {};
	const { tasks } = useStore();
	const { data, loading, error, setLoading, setError, setData } = tasks;

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const fetch = async () => {
			try {
				setLoading(true);

				const tasks = await TaskService.getTasks({ signal, params });

				setData({ data: tasks });
				setError(false);
			} catch (error) {
				setError(true);
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
