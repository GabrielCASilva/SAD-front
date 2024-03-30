import { useEffect } from 'react';
import EmployeeService from '../../api/services/EmployeeService';
import { useStore } from '../../store';

export const useGetEmployees = () => {
	const { employees } = useStore();
	const { data, loading, error, setLoading, setError, setData } = employees;

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const fetch = async () => {
			try {
				setLoading(true);

				const employees = await EmployeeService.getEmployees({ signal });

				const filterEmployees = employees.filter(
					(employee) => employee.cargo.nome !== 'Diretor',
				);

				setData({ data: filterEmployees });
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
