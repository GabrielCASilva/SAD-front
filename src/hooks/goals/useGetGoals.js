import { useEffect } from 'react';
import GoalService from '../../api/services/GoalService';
import { useStore } from '../../store';

export const useGetGoals = () => {
	const { goals } = useStore();
	const { data, loading, error, setLoading, setError, setData } = goals;

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const fetch = async () => {
			try {
				setLoading(true);

				const goals = await GoalService.getGoals({ signal });

				setData({ data: goals });
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
