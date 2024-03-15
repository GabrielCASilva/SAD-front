import Table from '..';
import { TASKS_STATE_COLUMNS } from '../../../constants/tablesColumns';

export default function TasksStateTable(props) {
	const { data } = props;

	return <Table columns={TASKS_STATE_COLUMNS} data={data} url="tarefas" />;
}
