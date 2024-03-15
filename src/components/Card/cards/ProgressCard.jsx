import { CardContainer, CardRow, CardWithoutTabs, SimpleCard } from '..';
import TasksStateTable from '../../Table/tables/TasksStateTable';
import { SubTitle } from '../../Titles';

import { Input, Select } from 'antd';

const { Search } = Input;

export default function ProgressCard() {
	return (
		<CardWithoutTabs>
			<CardContainer>
				<CardRow>
					<SubTitle>Concluão da meta</SubTitle>
					<p>
						<span className="b-500">[X] </span>
						da meta foi atingida com sucesso
					</p>
					<div className="flex gap-24">
						<SimpleCard cardClasses="w-max-fit-content card-border-color--green">
							[X] tarefas concluidas
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
							[X] tarefas incompletas
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color-gray">
							[X] tarefas pendentes
						</SimpleCard>
					</div>
				</CardRow>
				<CardRow classes="ant-border-color">
					<SubTitle>Lista das tarefas associadas</SubTitle>
					<div className="flex gap-24">
						<div className="w-fit-content">
							<Select placeholder="Ordenação" />
						</div>
						<div className="w-fit-content">
							<Select placeholder="Estado" />
						</div>
					</div>
					<Search />
					<TasksStateTable />
				</CardRow>
			</CardContainer>
		</CardWithoutTabs>
	);
}
