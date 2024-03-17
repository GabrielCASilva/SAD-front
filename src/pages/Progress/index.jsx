import { useLocation } from 'react-router-dom';
import { ReportModal } from '../../components/Modal/modals/ReportModal';
import { SimpleCard } from '../../components/Card';
import DetailLayout from '../../layout/DetailLayout';
import { SubTitle } from '../../components/Titles';
import { useEffect } from 'react';
import { useStore } from '../../store';
import {
	currentDateBRFormat,
	dateIntervalInMonthOrDays,
} from '../../utils/date';

//TODO: REVER
export default function Progress() {
	const location = useLocation();
	const { progress } = useStore();
	const { state } = location;

	const { responsavel, setor, periodoCalculado, dataInicio, dataFinal, meta } =
		progress.data;

	useEffect(() => {
		//TODO: ATUALIZAR DEPOIS
		progress.setData({ data: DUMY_DATA });
	}, []);

	const title = `${currentDateBRFormat()} - ${meta?.nome}`;
	return (
		<DetailLayout title={title} card="progress">
			<SimpleCard>
				<SubTitle>Autor</SubTitle>
				<p>{responsavel?.nome}</p>
			</SimpleCard>
			<SimpleCard>
				<SubTitle>Setor associado a meta</SubTitle>
				<p>{setor?.nome}</p>
			</SimpleCard>
			<SimpleCard>
				<SubTitle>Período calculado</SubTitle>
				<p>{periodoCalculado}</p>
				<p>Início: {dataInicio}</p>
				<p>Final: {dataFinal}</p>
			</SimpleCard>
			<ReportModal />
		</DetailLayout>
	);
}

const DUMY_DATA = {
	metricas: {
		agilidade: 80.0,
		produtividade: 30.0,
		eficacia: 40.0,
	},
	resumo_tarefas: {
		concluidas: 30,
		ativas: 30,
		andamento: 23,
		inativas: 12,
	},
	tarefas: [],
	responsavel: { nome: 'John Doe' },
	setor: { nome: 'nome do setor' },
	periodoCalculado: dateIntervalInMonthOrDays('2024-02-25', '2024-03-30'),
	dataInicio: '30/02/2024',
	dataFinal: '30/03/2024',
	meta: { nome: 'nome da meta' },
};
