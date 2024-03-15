import Table from '..';
import { GOALS_COLUMNS } from '../../../constants/tablesColumns';
import { useGetGoals } from '../../../hooks/goals/useGetGoals';

export default function GoalsTable() {
	const { data } = useGetGoals();

	return <Table columns={GOALS_COLUMNS} data={data} url="metas" />;
}
