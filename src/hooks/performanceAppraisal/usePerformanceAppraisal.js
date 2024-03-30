import { useEffect } from 'react';
import TaskService from '../../api/services/TaskService';

export const usePerformanceAppraisal = (
	id,
	cargo,
	date,
	phase,
	setPhase,
	setPerformance,
) => {
	//servidor/12?dataInicio=2022-10-15&dataFim=2023-03-15

	const params = {
		dataInicio: date.initDate,
		dataFim: date.finalDate,
	};

	useEffect(() => {
		if (phase === 2) {
			const controller = new AbortController();
			const signal = controller.signal;

			const fetch = async () => {
				let response = {};
				if (cargo === 'Servidor') {
					response = await TaskService.servidorAppraisal({
						signal,
						id,
						params,
					});
				} else {
					response = await TaskService.supervisorAppraisal({
						signal,
						id,
						params,
					});
				}
				setPhase(3);
				setPerformance({ ...response, date: params });
			};

			fetch();

			return () => {
				console.log('cancelando...');
				controller.abort();
			};
		}
	}, [phase]);

	return {
		teste: 'teste',
	};
};
