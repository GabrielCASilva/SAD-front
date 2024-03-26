import Button from '../../components/Button';
import { SimpleCard } from '../../components/Card';
import GoalsProgressModal from '../../components/Modal/modals/GoalsProgressModal';
import { SubTitle } from '../../components/Titles';
import { useGetGoalAndGoalsTasks } from '../../hooks/goals/useGetGoal';
import DetailLayout from '../../layout/DetailLayout';
import { useParams } from 'react-router-dom';

export default function GoalDetail() {
	const { id } = useParams();
	const { data, isLoading } = useGetGoalAndGoalsTasks({ id });

	console.log(data);

	const {
		nome,
		setor,
		tarefas,
		dataCriacao,
		dataPrevistaConclusao,
		dataConclusao,
		diretor,
	} = data;

	const title = (
		<>
			<span style={{ color: 'var(--white-gray)' }}>Metas {'>'}</span> {nome}
		</>
	);
	return (
		<DetailLayout title={title} card="goals" loading={isLoading}>
			<SimpleCard>
				<SubTitle>Autor</SubTitle>
				<p>{diretor.nome}</p>
			</SimpleCard>
			<SimpleCard>
				<SubTitle>Setor associado a meta</SubTitle>
				<p>{setor.nome}</p>
			</SimpleCard>
			<SimpleCard>
				<SubTitle>Datas</SubTitle>
				<p>Início: {dataCriacao}</p>
				<p>Final: {dataConclusao ? dataConclusao : dataPrevistaConclusao}</p>
			</SimpleCard>
			<GoalsProgressModal goalsTasks={tarefas} />
			<Button>Inativar meta</Button>
			<Button>Editar dados</Button>
		</DetailLayout>
	);
}
