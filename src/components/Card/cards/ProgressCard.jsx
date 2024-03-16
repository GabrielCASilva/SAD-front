import { CardContainer, CardRow, CardWithoutTabs, SimpleCard } from '..';
import { useStore } from '../../../store';
import TasksStateTable from '../../Table/tables/TasksStateTable';
import { SubTitle } from '../../Titles';

import { Input, Select } from 'antd';

const { Search } = Input;

export default function ProgressCard() {
	const { progress } = useStore();
	return (
		<CardWithoutTabs>
			<CardContainer>
				<CardRow>
					<SubTitle>Concluão da meta</SubTitle>
					<p>Métricas atingidas</p>
					<div className="flex gap-24">
						<SimpleCard cardClasses="w-max-fit-content card-border-color--green">
							<span className="b-500">[X] </span>
							<p className="m-zero">Agilidade</p>
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
							<span className="b-500">[X] </span>
							<p className="m-zero">Produtividade</p>
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
							<span className="b-500">[X] </span>
							<p className="m-zero">Eficacia</p>
						</SimpleCard>
					</div>

					<p>Tarefas avaliadas</p>
					<div className="flex gap-24">
						<SimpleCard cardClasses="w-max-fit-content card-border-color--green">
							<span className="b-500">[X] </span>
							<p className="m-zero">Concluídas</p>
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color--black">
							<span className="b-500">[X] </span>
							<p className="m-zero">Ativas</p>
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color--yellow">
							<span className="b-500">[X] </span>
							<p className="m-zero">Em andamento</p>
						</SimpleCard>
						<SimpleCard cardClasses="w-max-fit-content card-border-color--gray">
							<span className="b-500">[X] </span>
							<p className="m-zero">Inativas</p>
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
