import Table from '..';
import { useGetGoals } from '../../../hooks/goals/useGetGoals';

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
		title: 'Autor',
		dataIndex: 'responsavel',
		key: 'responsavel',
		render: (responsavel) => responsavel.nome,
	},
	{
		title: 'Setor',
		dataIndex: 'setor',
		key: 'setor',
		render: (setor) => setor.nome,
	},
];

export default function GoalsTable() {
	const { data } = useGetGoals();

	return <Table columns={COLUMNS} data={data} url="metas" />;
}
