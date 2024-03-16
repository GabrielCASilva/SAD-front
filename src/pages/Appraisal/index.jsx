import { useLocation } from 'react-router-dom';
import { ReportModal } from '../../components/Modal/modals/ReportModal';
import { SimpleCard } from '../../components/Card';
import DetailLayout from '../../layout/DetailLayout';
import { SubTitle } from '../../components/Titles';
import { currentDateBRFormat } from '../../utils/date';
import { useStore } from '../../store';
import { useEffect } from 'react';

//TODO: COLOCAR INFORMAÇÕES
export default function Appraisal() {
	const location = useLocation();
	const { appraisal } = useStore();
	const { state } = location;
	const { name, goal, initialDate, finalDate, dateInterval } = state;

	useEffect(() => {
		appraisal.setAppraisal({ data: state });
	}, []);

	const title = `${name} - ${currentDateBRFormat()}`;
	return (
		<DetailLayout title={title} card="appraisal">
			<SimpleCard>
				<SubTitle>Meta atual</SubTitle>
				<p>{goal}</p>
			</SimpleCard>
			<SimpleCard>
				<SubTitle>Período calculado</SubTitle>
				<p>{dateInterval}</p>
				<p>Início: {initialDate}</p>
				<p>Final: {finalDate}</p>
			</SimpleCard>
			<ReportModal />
		</DetailLayout>
	);
}
