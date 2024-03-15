import { CardContainer, CardRow, CardWithoutTabs, SimpleCard } from '..';
import { useStore } from '../../../store';
import TasksStateTable from '../../Table/tables/TasksStateTable';
import { SubTitle } from '../../Titles';

import { Input, Select } from 'antd';

const { Search } = Input;

export default function AppraisalCard() {
	const { appraisal } = useStore();
	const { data } = appraisal;

	return (
		<CardWithoutTabs>
			<CardContainer>
				<CardRow>
					<SubTitle>Relatório geral</SubTitle>
					<p>
						O Funcionário conseguiu atingir aproximadamente
						<span className="b-500"> {data.performance}% </span>
						do total das métricas do período avaliado
					</p>
					<div className="flex gap-24">
						<SimpleCard cardClasses="w-max-fit-content card-border-color--green">
							{data.tasksCompleted} tarefas concluidas
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
							{data.tasksIncomplete} tarefas incompletas
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color-gray">
							{data.tasksPending} tarefas pendentes
						</SimpleCard>
					</div>
				</CardRow>
				<CardRow classes="ant-border-color">
					<SubTitle>Todas as tarefas</SubTitle>
					<div className="flex gap-24">
						<div className="w-fit-content">
							<Select placeholder="Ordenação" />
						</div>
						<div className="w-fit-content">
							<Select placeholder="Estado" />
						</div>
					</div>
					<Search />
					<TasksStateTable data={data.tasks} />
				</CardRow>
			</CardContainer>
		</CardWithoutTabs>
	);
}
