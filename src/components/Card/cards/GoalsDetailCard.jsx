import { Input, Select } from 'antd';
import { CardContainer, CardRow, CardWithoutTabs } from '..';
import { SubTitle } from '../../Titles';
import GoalsTable from '../../Table/tables/GoalsTable';

const { Search } = Input;

export default function GoalsDetailCard() {
	return (
		<CardWithoutTabs>
			<CardContainer>
				<CardRow>
					<SubTitle>Lista das tarefas associadas</SubTitle>
					<div className="w-fit-content">
						<Select placeholder="Ordenação" />
					</div>
					<Search />
					<GoalsTable />
				</CardRow>
			</CardContainer>
		</CardWithoutTabs>
	);
}
