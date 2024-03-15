import Table from '..';
import { TASKS_COLUMNS } from '../../../constants/tablesColumns';
import { useGetTasks } from '../../../hooks/tasks/useGetTasks';

export default function TasksTable() {
	const { data } = useGetTasks();

	return <Table columns={TASKS_COLUMNS} data={data} url="tarefas" />;
}
