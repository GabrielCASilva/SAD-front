import { CardContainer, CardWithoutTabs } from '..';

import { TASKS_STATE_OPTIONS } from '../../../constants/options';
import { useStore } from '../../../store';
import FilteredTableInDescriptionCard from '../../Table/tablesWithFilters/FilteredTableInDescriptionCard';

export default function GoalsDetailCard() {
	const { goal } = useStore();
	const { data } = goal;

	return (
		<CardWithoutTabs>
			<CardContainer>
				<FilteredTableInDescriptionCard
					data={data.tarefas}
					orderingOptions={TASKS_STATE_OPTIONS}
					subTitle="Lista das tarefas associadas"
				/>
			</CardContainer>
		</CardWithoutTabs>
	);
}
