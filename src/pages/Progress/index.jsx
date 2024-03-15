import { useLocation } from 'react-router-dom';
import { ReportModal } from '../../components/Modal/modals/ReportModal';
import { SimpleCard } from '../../components/Card';
import DetailLayout from '../../layout/DetailLayout';
import { SubTitle } from '../../components/Titles';

export default function Progress() {
	const location = useLocation();
	const { state } = location;
	console.log(state);

	return (
		<DetailLayout title="[DATA] - [NOME]" card="progress">
			<SimpleCard>
				<SubTitle>Autor</SubTitle>
				<p>[NOME]</p>
			</SimpleCard>
			<SimpleCard>
				<SubTitle>Setor associado a meta</SubTitle>
				<p>[SETOR]</p>
			</SimpleCard>
			<SimpleCard>
				<SubTitle>Período calculado</SubTitle>
				<p>[PERIODO]</p>
				<p>Início: [DATA]</p>
				<p>Final: [DATA]</p>
			</SimpleCard>
			<ReportModal />
		</DetailLayout>
	);
}
