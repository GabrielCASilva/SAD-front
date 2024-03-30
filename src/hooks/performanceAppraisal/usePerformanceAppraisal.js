import { useEffect } from 'react';
import TaskService from '../../api/services/TaskService';
import { dateIntervalInMonthOrDays } from '../../utils/date';

export const usePerformanceAppraisal = (
	id,
	cargo,
	date,
	phase,
	employeeName,
	setPhase,
	setPerformance,
) => {
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
				setPerformance({
					...response,
					date: params,
					meta: { nome: response.tarefasAvaliacao[0].meta.nome },
					funcionario: { nome: employeeName },
					periodoCalculado: dateIntervalInMonthOrDays(
						date.initDate,
						date.finalDate,
					),
				});
			};

			setTimeout(() => {
				fetch();
			}, 1000);

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
