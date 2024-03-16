import { useLocation } from 'react-router-dom';
import { ReportModal } from '../../components/Modal/modals/ReportModal';
import { SimpleCard } from '../../components/Card';
import DetailLayout from '../../layout/DetailLayout';
import { SubTitle } from '../../components/Titles';
import {
	currentDateBRFormat,
	dateIntervalInMonthOrDays,
} from '../../utils/date';
import { useStore } from '../../store';
import { useEffect } from 'react';

//TODO: COLOCAR INFORMAÇÕES
export default function Appraisal() {
	const location = useLocation();
	const { appraisal } = useStore();
	const { state } = location;
	console.log(state);

	const { funcionario, periodoCalculado, dataInicio, dataFinal, meta } =
		appraisal?.data;

	useEffect(() => {
		appraisal.setData({ data: DUMY_DATA });
	}, []);

	const title = `${currentDateBRFormat()} - ${funcionario?.nome}`;
	return (
		<DetailLayout title={title} card="appraisal">
			<SimpleCard>
				<SubTitle>Meta atual</SubTitle>
				<p>{meta?.nome}</p>
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
		comprometimento: 50.0,
	},
	resumo_tarefas: {
		concluidas: 30,
		ativas: 30,
		andamento: 23,
		inativas: 12,
	},
	tarefas: [],
	meta: { nome: 'nome de meta' },
	funcionario: { nome: 'Fernanda' },
	periodoCalculado: dateIntervalInMonthOrDays('2024-02-25', '2024-03-30'),
	dataInicio: '30/02/2024',
	dataFinal: '30/03/2024',
};
