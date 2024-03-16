import { Input, Select } from 'antd';
import Card, { CardRow, SimpleCard, TabContainer } from '..';
import Button from '../../Button';
import { SubTitle } from '../../Titles';
import ProgressBar from '../../ProgressBar';
import { useStore } from '../../../store';
import FilteredTableInDescriptionCard from '../../Table/tablesWithFilters/FilteredTableInDescriptionCard';
import { TASKS_STATE_OPTIONS } from '../../../constants/options';

const { Search } = Input;

const tabList = [
	{
		key: 'tab1',
		tab: 'Tarefas',
	},
	{
		key: 'tab2',
		tab: 'Informações pessoais',
	},
];

const contentList = {
	tab1: <Tab1 />,
	tab2: <p>content2</p>,
};

export default function EmployeeDetailCard() {
	return <Card contentList={contentList} tabList={tabList} />;
}

function Tab1() {
	return (
		<TabContainer>
			<CardRow>
				<EmployeesCurrentTask />
			</CardRow>
			<CardRow classes="container">
				<AllEmployeesTasks />
			</CardRow>
		</TabContainer>
	);
}

function EmployeesCurrentTask() {
	const { employee } = useStore();
	const { data } = employee;
	const { tarefas } = data;

	const currentTask =
		tarefas.find((tarefa) => tarefa.dataInicio && !tarefa.dataConclusao) || {};

	return (
		<>
			<div className="flex justify-between container">
				<SubTitle>Tarefa Atual</SubTitle>
				<div style={{ width: 'fit-content' }}>
					<Button>Concluir tarefas</Button>
				</div>
			</div>
			<div style={{ position: 'relative' }}>
				<div
					className="flex gap-24 container"
					style={{ position: 'relative', zIndex: 1 }}>
					<div
						className="w-100"
						style={{ maxWidth: '32.2rem', minHeight: '16rem' }}>
						<SimpleCard cardClasses="h-100">
							<p className="b-600">{currentTask.nome}</p>
							<p>{currentTask.descricao}</p>
						</SimpleCard>
					</div>
					<div className="flex column justify-center w-100 b-500 gap-14">
						<div className="flex justify-between">
							<p>Inicio: {currentTask?.dataInicio}</p>
							<p>Final: {currentTask?.dataPrevistaConclusao}</p>
							<p>Previsao: {currentTask?.dataPrevistaConclusao}</p>
						</div>
						<div>
							<p>Tempo de progresso</p>
							<ProgressBar progress={currentTask?.taxaProgresso} />
						</div>
					</div>
				</div>
				<BackgroundEmployeesCurrentTask />
			</div>
		</>
	);
}

function AllEmployeesTasks() {
	const { employee } = useStore();
	const { data } = employee;

	return (
		<FilteredTableInDescriptionCard
			data={data.tarefas}
			orderingOptions={TASKS_STATE_OPTIONS}
		/>
	);
}

// BACKGROUND STYLE COMPONENT
function BackgroundEmployeesCurrentTask() {
	return (
		<div
			style={{
				backgroundColor: 'var(--background-gray)',
				position: 'absolute',
				height: '70%',
				width: '100%',
				top: '15%',
			}}></div>
	);
}
