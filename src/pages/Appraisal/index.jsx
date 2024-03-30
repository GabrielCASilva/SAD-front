import { useLocation } from 'react-router-dom';
import { ReportModal } from '../../components/Modal/modals/ReportModal';
import { SimpleCard } from '../../components/Card';
import DetailLayout from '../../layout/DetailLayout';
import { SubTitle } from '../../components/Titles';
import {
	currentDateBRFormat,
	dateIntervalInMonthOrDays,
	formateBRDate,
} from '../../utils/date';
import { useStore } from '../../store';
import { useEffect } from 'react';

export default function Appraisal() {
	const location = useLocation();
	const { appraisal } = useStore();
	const { state } = location;
	console.log(appraisal)

	const { funcionario, periodoCalculado, date, meta } =
		appraisal?.data;

	useEffect(() => {
		appraisal.setData({ data: state });
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
				<p>Início: {formateBRDate(date?.dataInicio)}</p>
				<p>Final: {formateBRDate(date?.dataFim)}</p>
			</SimpleCard>
			<ReportModal />
		</DetailLayout>
	);
}