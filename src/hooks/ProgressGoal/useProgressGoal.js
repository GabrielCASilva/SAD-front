import { useEffect } from 'react';
import TaskService from '../../api/services/TaskService';
import { dateIntervalInMonthOrDays } from '../../utils/date';

export const useProgressGoal = (
	id,
	date,
	phase,
	diretor,
	setor,
	meta,
	setPhase,
	setProgress,
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
				const response = await TaskService.metaProgress({
					signal,
					id,
					params,
				});
				setPhase(3);
				setProgress({
					...response,
					date: params,
					responsavel: { nome: diretor },
					setor: { nome: setor },
					meta: { nome: meta },
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
