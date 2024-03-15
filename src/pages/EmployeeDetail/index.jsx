import PerformanceAppraisalModal from '../../components/Modal/modals/PerformanceAppraisalModal';
import { useGetEmployeeAndEmployeesTasks } from '../../hooks/employees/useGetEmployee';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { SimpleCard } from '../../components/Card';
import DetailLayout from '../../layout/DetailLayout';
import { pastYears } from '../../utils/date';

//TODO: PREENCHER OS DADOS
export default function EmployeeDetail() {
	const { id } = useParams();
	const { data: employee, isLoading } = useGetEmployeeAndEmployeesTasks({
		id,
	});
	const { nome, foto, setor, tarefas, cargo, dataCadastro } = employee;
	console.log(employee);

	const title = (
		<>
			<span style={{ color: 'var(--white-gray)' }}>Funcionários {'>'}</span>{' '}
			{nome}
		</>
	);
	return (
		<DetailLayout title={title} card="employees" loading={isLoading}>
			<SimpleCard containerClasses="align-center">
				<div
					className="flex justify-center"
					style={{
						width: '18.5rem',
						height: '18.5rem',
						borderRadius: '50%',
						overflow: 'hidden',
					}}>
					<img
						src={foto}
						alt="Foto do funcionário"
						style={{ maxHeight: '100%' }}
					/>
				</div>
				<p className="b-500">{nome}</p>
				<p className="b-500">{cargo.nome}</p>
			</SimpleCard>
			<SimpleCard>
				<p>Setor: {setor.nome}</p>
				<p>Tarefas realizadas: {tarefas.length}</p>
				<p>Tempo de empresa: {pastYears(dataCadastro)} anos</p>
			</SimpleCard>
			<PerformanceAppraisalModal employeeTasks={tarefas} />
			<Button>Inativar funcionário</Button>
			<Button>Editar dados</Button>
		</DetailLayout>
	);
}
