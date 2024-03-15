import Table from '..';
import { useGetTasks } from '../../../hooks/tasks/useGetTasks';
import Tag from '../../Tag';

const COLUMNS = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Título',
		dataIndex: 'nome',
		key: 'nome',
	},
	{
		title: 'Setor',
		dataIndex: 'setor',
		key: 'setor',
		render: (setor) => setor.nome,
	},
	{
		title: 'Servidor',
		dataIndex: 'servidor',
		key: 'servidor',
		render: (servidor) => servidor.nome,
	},
	{
		title: 'Situação',
		dataIndex: 'situacao',
		key: 'situacao',
		render: (situacao) => <Tag type={situacao} />,
	},
];

export default function TasksTable() {
	const { data } = useGetTasks();

	return <Table columns={COLUMNS} data={data} url="tarefas" />;
}
